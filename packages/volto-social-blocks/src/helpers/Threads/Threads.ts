export function isValidThreadsUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  const trimmed = value.trim();
  const normalized = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(normalized);
    const hostname = url.hostname.toLowerCase();
    const allowedHosts = new Set([
      'threads.com',
      'www.threads.com',
      'threads.net',
      'www.threads.net',
    ]);

    if (!allowedHosts.has(hostname)) return false;

    const pathname = url.pathname.replace(/\/+$/, '');
    return /^\/@[\w.]+\/post\/[\w-]+$/i.test(pathname);
  } catch {
    return false;
  }
}
