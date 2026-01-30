import React, { useEffect, useRef } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

import { POST_WIDTHS } from '../sharedWidths';

export type BlueskyViewProps = {
  blueskyUrl?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
  colorMode?: 'system' | 'light' | 'dark';
  className?: string;
};

type BlueskyOEmbed = {
  html?: string;
};

function extractAtUriFromOEmbedHtml(html: string): string | undefined {
  const match = html.match(/data-bluesky-uri="([^"]+)"/);
  return match?.[1];
}

type ResolveHandleResponse = {
  did?: string;
};

function parseProfilePostUrl(
  blueskyUrl: string,
): { profile: string; rkey: string } | undefined {
  const match = blueskyUrl.match(/\/profile\/([^/]+)\/post\/([^/?#]+)/i);
  if (!match) return undefined;
  return { profile: match[1], rkey: match[2] };
}

async function resolveAtUriFromUrl(
  blueskyUrl: string,
): Promise<string | undefined> {
  try {
    const res = await fetch(
      `https://embed.bsky.app/oembed?url=${encodeURIComponent(blueskyUrl)}`,
      { headers: { Accept: 'application/json' } },
    );

    if (res.ok) {
      const text = await res.text();
      const json = JSON.parse(text) as BlueskyOEmbed;
      const aturi = json?.html
        ? extractAtUriFromOEmbedHtml(json.html)
        : undefined;
      if (aturi) return aturi;
    }
  } catch (e) {}

  const parsed = parseProfilePostUrl(blueskyUrl);
  if (!parsed) return undefined;

  const { profile, rkey } = parsed;
  let did = profile;

  if (!did.toLowerCase().startsWith('did:')) {
    try {
      const res = await fetch(
        `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(
          profile,
        )}`,
        { headers: { Accept: 'application/json' } },
      );

      if (!res.ok) return undefined;
      const json = (await res.json()) as ResolveHandleResponse;
      if (!json?.did) return undefined;
      did = json.did;
    } catch (e) {
      return undefined;
    }
  }

  return `at://${did}/app.bsky.feed.post/${rkey}`;
}

function ensureBlueskyHeightListener() {
  const key = '__voltoSocialBlocksBlueskyListenerInstalled';
  const win = window as any;
  if (win[key]) return;
  win[key] = true;

  const EMBED_ORIGIN = 'https://embed.bsky.app';
  window.addEventListener('message', (event) => {
    if (event.origin !== EMBED_ORIGIN) return;
    const id = (event.data as any)?.id;
    if (!id) return;
    const iframe = document.querySelector(
      `[data-bluesky-id="${String(id)}"]`,
    ) as HTMLIFrameElement | null;
    if (!iframe) return;
    const height = (event.data as any)?.height;
    if (height) {
      iframe.style.height = `${String(height)}px`;
    }
  });
}

const BlueskyView = ({
  blueskyUrl,
  align = 'center',
  size = 'l',
  colorMode = 'system',
  className,
}: BlueskyViewProps) => {
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
  const linkText = 'View post on Bluesky';

  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!blueskyUrl) return;

    const host = hostRef.current;
    if (!host) return;

    const render = async () => {
      try {
        host.innerHTML = '';
        ensureBlueskyHeightListener();

        const aturi = await resolveAtUriFromUrl(blueskyUrl);
        if (!aturi) {
          const a = document.createElement('a');
          a.href = blueskyUrl;
          a.target = '_blank';
          a.rel = 'noreferrer noopener';
          a.textContent = linkText;
          host.appendChild(a);
          return;
        }

        const id = String(Math.random()).slice(2);
        const refUrl = `${window.location.origin}${window.location.pathname}`;

        const searchParams = new URLSearchParams();
        searchParams.set('id', id);
        if (refUrl.startsWith('http')) {
          searchParams.set('ref_url', encodeURIComponent(refUrl));
        }
        searchParams.set('colorMode', colorMode);

        const iframe = document.createElement('iframe');
        iframe.setAttribute('data-bluesky-id', id);
        iframe.title = 'Bluesky post';
        iframe.src = `https://embed.bsky.app/embed/${aturi.slice(
          'at://'.length,
        )}?${searchParams.toString()}`;
        iframe.width = '100%';
        iframe.style.border = 'none';
        iframe.style.display = 'block';
        iframe.style.flexGrow = '1';

        const container = document.createElement('div');
        container.style.maxWidth = `${width}px`;
        container.style.width = '100%';
        container.style.display = 'flex';
        container.appendChild(iframe);
        host.appendChild(container);
      } catch (e) {
        host.innerHTML = '';
        const a = document.createElement('a');
        a.href = blueskyUrl;
        a.target = '_blank';
        a.rel = 'noreferrer noopener';
        a.textContent = linkText;
        host.appendChild(a);
      }
    };

    void render();

    return () => {
      host.innerHTML = '';
    };
  }, [blueskyUrl, linkText, width, colorMode]);

  return blueskyUrl ? (
    <SocialContentWrapper
      align={align}
      tool="bluesky"
      url={blueskyUrl}
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

export default BlueskyView;
