import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

const STATUS_OPTIONS = ['new', 'contacted', 'quoted', 'booked', 'closed', 'lost'];

const STATUS_COLORS = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  quoted: 'bg-purple-100 text-purple-800',
  booked: 'bg-green-100 text-green-800',
  closed: 'bg-slate-100 text-slate-600',
  lost: 'bg-red-100 text-red-700',
};

const MOVE_TYPE_LABELS = {
  'local-moving': 'Local',
  'long-distance': 'Long-distance',
  packing: 'Packing',
  storage: 'Storage',
  other: 'Other',
};

function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTime(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function AdminPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  async function fetchLeads() {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    let active = true;

    async function initialize() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
        return;
      }

      if (active) {
        await fetchLeads();
      }
    }

    void initialize();

    return () => {
      active = false;
    };
  }, [navigate]);

  async function updateStatus(id, status) {
    await supabase.from('leads').update({ status }).eq('id', id);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    if (selected?.id === id) {
      setSelected((prev) => ({ ...prev, status }));
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  const filtered = filter === 'all' ? leads : leads.filter((l) => l.status === filter);

  const counts = leads.reduce((acc, l) => {
    acc[l.status] = (acc[l.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <SEO title="Leads Dashboard" noindex />

      <section className="section-tight">
        <div className="site-container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sans text-3xl font-semibold text-slate-900">Leads</h1>
              <p className="mt-1 text-sm text-slate-600">{leads.length} total</p>
            </div>
            <div className="flex items-center gap-3">
              <Button onClick={fetchLeads} size="sm" variant="secondary">
                Refresh
              </Button>
              <Button onClick={handleLogout} size="sm" variant="ghost">
                Sign out
              </Button>
            </div>
          </div>

          {/* Status filter tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => setFilter('all')}
            >
              All ({leads.length})
            </button>
            {STATUS_OPTIONS.map((s) => (
              <button
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                  filter === s ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                key={s}
                onClick={() => setFilter(s)}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})
              </button>
            ))}
          </div>

          {loading ? (
            <p className="mt-8 text-sm text-slate-600">Loading leads...</p>
          ) : filtered.length === 0 ? (
            <p className="mt-8 text-sm text-slate-600">No leads found.</p>
          ) : (
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
              {/* Lead list */}
              <div className="space-y-2">
                {filtered.map((lead) => (
                  <button
                    className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                      selected?.id === lead.id
                        ? 'border-slate-900 bg-slate-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                    key={lead.id}
                    onClick={() => setSelected(lead)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">{lead.name}</p>
                        <p className="mt-0.5 text-sm text-slate-600">
                          {MOVE_TYPE_LABELS[lead.move_type] || lead.move_type} &middot; {lead.from_zip} &rarr; {lead.to_zip}
                        </p>
                      </div>
                      <span className={`shrink-0 rounded-lg px-2 py-1 text-xs font-medium ${STATUS_COLORS[lead.status]}`}>
                        {lead.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">{formatTime(lead.created_at)}</p>
                  </button>
                ))}
              </div>

              {/* Lead detail */}
              {selected ? (
                <div className="sticky top-20 rounded-[1.75rem] border border-slate-200 bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xl font-semibold text-slate-900">{selected.name}</p>
                      <span className={`mt-2 inline-block rounded-lg px-2 py-1 text-xs font-medium ${STATUS_COLORS[selected.status]}`}>
                        {selected.status}
                      </span>
                    </div>
                    <button
                      className="text-sm text-slate-500 hover:text-slate-900"
                      onClick={() => setSelected(null)}
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-medium text-slate-500">Phone</p>
                        <a className="text-sm font-medium text-slate-900 hover:text-accent" href={`tel:${selected.phone}`}>
                          {selected.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">Email</p>
                        <a className="text-sm font-medium text-slate-900 hover:text-accent" href={`mailto:${selected.email}`}>
                          {selected.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">Move type</p>
                        <p className="text-sm text-slate-900">{MOVE_TYPE_LABELS[selected.move_type] || selected.move_type}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">Move date</p>
                        <p className="text-sm text-slate-900">{formatDate(selected.move_date)}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">From ZIP</p>
                        <p className="text-sm text-slate-900">{selected.from_zip}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500">To ZIP</p>
                        <p className="text-sm text-slate-900">{selected.to_zip}</p>
                      </div>
                    </div>

                    {selected.notes && (
                      <div>
                        <p className="text-xs font-medium text-slate-500">Notes</p>
                        <p className="mt-1 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                          {selected.notes}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-medium text-slate-500">Submitted</p>
                      <p className="text-sm text-slate-900">{formatTime(selected.created_at)}</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <p className="mb-2 text-xs font-medium text-slate-500">Update status</p>
                    <div className="flex flex-wrap gap-2">
                      {STATUS_OPTIONS.map((s) => (
                        <button
                          className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-colors ${
                            selected.status === s
                              ? 'bg-slate-900 text-white'
                              : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                          }`}
                          key={s}
                          onClick={() => updateStatus(selected.id, s)}
                        >
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center rounded-[1.75rem] border border-dashed border-slate-200 p-12">
                  <p className="text-sm text-slate-500">Select a lead to view details</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
