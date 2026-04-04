export function getLeadEndpoint(override = '') {
  return (override || import.meta.env.VITE_FORM_ENDPOINT || '').trim();
}

export function hasLeadEndpoint(endpoint = '') {
  return Boolean(getLeadEndpoint(endpoint));
}

/**
 * @param {Record<string, unknown>} payload
 * @param {string} [endpoint]
 */
export async function submitLead(payload, endpoint) {
  const url = getLeadEndpoint(endpoint);
  if (!url) {
    throw new Error('NO_ENDPOINT');
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('SUBMIT_FAILED');
  }
  return response;
}
