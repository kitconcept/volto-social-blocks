import React, { useEffect, useMemo, useRef } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

import { POST_WIDTHS } from '../sharedWidths';

export type ThreadsViewProps = {
  threadsUrl?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
  className?: string;
};

function normalizeThreadsPermalink(input?: string): string | undefined {
  if (!input) return undefined;
  const trimmed = input.trim();
  if (!trimmed) return undefined;

  const normalized = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(normalized);
    const pathname = url.pathname.replace(/\/+$/, '');
    if (!/^\/@[\w.]+\/post\/[\w-]+$/i.test(pathname)) return undefined;
    // Threads official embed script supports both, but standardize for consistency.
    return `https://www.threads.com${pathname}`;
  } catch {
    return undefined;
  }
}

function extractThreadsPostId(permalink: string): string | undefined {
  const match = permalink.match(/\/post\/([^/?#]+)/i);
  return match?.[1];
}

const ThreadsView = ({
  threadsUrl,
  align = 'center',
  size = 'l',
  className,
}: ThreadsViewProps) => {
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
  const linkText = 'View post on Threads';

  const permalink = useMemo(
    () => normalizeThreadsPermalink(threadsUrl),
    [threadsUrl],
  );
  const payloadId = useMemo(() => {
    if (!permalink) return undefined;
    const postId = extractThreadsPostId(permalink);
    return postId
      ? `ig-tp-${postId}`
      : `ig-tp-${Math.random().toString(36).slice(2)}`;
  }, [permalink]);

  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!permalink) return;

    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = '';

    const blockquote = document.createElement('blockquote');
    blockquote.className = 'text-post-media';
    blockquote.setAttribute('data-text-post-permalink', permalink);
    blockquote.setAttribute('data-text-post-version', '0');
    if (payloadId) blockquote.id = payloadId;

    const a = document.createElement('a');
    a.href = permalink;
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
    a.textContent = linkText;
    blockquote.appendChild(a);
    host.appendChild(blockquote);

    const SCRIPT_ID = 'volto-social-blocks-threads-embed';
    const scriptSrc = 'https://www.threads.com/embed.js';

    const process = () => {
      try {
        (window as any)?.instgrm?.Embeds?.process?.();
      } catch {}
    };

    const existing = document.getElementById(
      SCRIPT_ID,
    ) as HTMLScriptElement | null;
    if (existing) {
      setTimeout(process, 0);
      return () => {
        host.innerHTML = '';
      };
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = scriptSrc;
    script.async = true;
    script.onload = process;
    document.head?.appendChild(script);

    return () => {
      host.innerHTML = '';
    };
  }, [permalink, payloadId, linkText]);

  return permalink ? (
    <SocialContentWrapper
      align={align}
      tool="threads"
      url={threadsUrl || ''}
      linkText={linkText}
      className={className}
    >
      <div
        className="social-embed-container"
        style={{ width, maxWidth: '100%' }}
      >
        <div ref={hostRef} />
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default ThreadsView;
