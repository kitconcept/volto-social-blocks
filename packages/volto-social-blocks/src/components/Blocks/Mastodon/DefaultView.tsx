import React, { useEffect } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { extractMastodonEmbedUrl } from '../../../helpers';

const WIDTHS: Record<string, number> = {
  s: 300,
  m: 400,
  l: 500,
};

export type MastodonViewProps = {
  mastodonUrl?: string;
  align?: string;
  size?: keyof typeof WIDTHS;
  className?: string;
};

const MastodonView = ({
  mastodonUrl,
  align = 'center',
  size = 'l',
  className,
}: MastodonViewProps) => {
  const embedUrl = extractMastodonEmbedUrl(mastodonUrl);
  const width = WIDTHS[size] ?? WIDTHS.l;
  const linkText = 'View post on Mastodon';

  useEffect(() => {
    if (!embedUrl) return;
    if (typeof document === 'undefined') return;

    try {
      const origin = new URL(embedUrl).origin;
      const scriptSrc = `${origin}/embed.js`;
      const existing = document.querySelector(`script[src="${scriptSrc}"]`);
      if (!existing) {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        document.body.appendChild(script);
      }
    } catch {}
  }, [embedUrl]);
  
  return embedUrl ? (
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
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <iframe
          src={embedUrl}
          width={'100%'}
          title={'Mastodon Post'}
          loading={'lazy'}
          style={{
            border: 'none',
            width: '100%',
            overflow: 'scroll',
            display: 'block',
          }}
          className="mastodon-embed"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
        />
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default MastodonView;
