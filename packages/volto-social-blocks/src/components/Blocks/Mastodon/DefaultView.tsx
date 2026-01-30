import React, { useEffect } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { extractMastodonEmbedUrl } from '../../../helpers';

import { POST_WIDTHS } from '../sharedWidths';

type ColorMode = 'system' | 'light' | 'dark';

export type MastodonViewProps = {
  mastodonUrl?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
  colorMode?: ColorMode;
  className?: string;
};

function applyMastodonTheme(embedUrl: string, colorMode: ColorMode): string {
  if (colorMode === 'system') return embedUrl;
  try {
    const url = new URL(embedUrl);
    url.searchParams.set('theme', colorMode);
    return url.toString();
  } catch {
    return embedUrl;
  }
}

const MastodonView = ({
  mastodonUrl,
  align = 'center',
  size = 'l',
  colorMode = 'system',
  className,
}: MastodonViewProps) => {
  const embedUrl = extractMastodonEmbedUrl(mastodonUrl);
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
  const linkText = 'View post on Mastodon';

  const themedEmbedUrl = embedUrl
    ? applyMastodonTheme(embedUrl, colorMode)
    : undefined;

  const maxHeight = size === 's' ? 520 : size === 'm' ? 680 : 820;

  useEffect(() => {
    if (!themedEmbedUrl) return;
    if (typeof document === 'undefined') return;

    try {
      const origin = new URL(themedEmbedUrl).origin;
      const scriptSrc = `${origin}/embed.js`;
      const existing = document.querySelector(`script[src="${scriptSrc}"]`);
      if (!existing) {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        document.body.appendChild(script);
      }
    } catch {}
  }, [themedEmbedUrl]);

  return themedEmbedUrl ? (
    <SocialContentWrapper
      align={align}
      tool="mastodon"
      url={mastodonUrl || ''}
      linkText={linkText}
      className={className}
    >
      <div
        style={{
          width,
          maxWidth: '100%',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxHeight,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <iframe
            src={themedEmbedUrl}
            width={'100%'}
            title={'Mastodon Post'}
            loading={'lazy'}
            style={{
              border: 'none',
              width: '100%',
              display: 'block',
            }}
            className="mastodon-embed"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
          />
        </div>
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default MastodonView;
