import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

export function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError('Invalid email or password');
      setLoading(false);
      return;
    }

    navigate('/admin');
  };

  return (
    <>
      <SEO title="Admin Login" noindex />
      <section className="section">
        <div className="site-container flex justify-center">
          <div className="w-full max-w-sm rounded-[1.75rem] border border-slate-200 bg-white p-8">
            <h1 className="text-2xl text-slate-900">Admin login</h1>
            <form className="mt-6 space-y-4" onSubmit={handleLogin}>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-slate-900"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  value={email}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Password</span>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-slate-900"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  value={password}
                />
              </label>
              <Button className="w-full" disabled={loading} size="lg" type="submit" variant="primary">
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
              {error && (
                <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
