import React, { useEffect } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import {
  extractMastodonEmbedUrl,
  extractMastodonScriptUrl,
} from '../../../helpers';
import { POST_WIDTHS } from '../sharedWidths';

export type MastodonViewProps = {
  mastodonUrl?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
  className?: string;
};

const MastodonView = ({
  mastodonUrl,
  align = 'center',
  size = 'l',
  className,
}: MastodonViewProps) => {
  const embedUrl = extractMastodonEmbedUrl(mastodonUrl);
  const scriptUrl = extractMastodonScriptUrl(mastodonUrl);
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
  const linkText = 'View post on Mastodon';

  const height = Math.round(width * 1.25);

  useEffect(() => {
    if (!scriptUrl || typeof document === 'undefined') return;

    const existing = document.querySelector(`script[src="${scriptUrl}"]`);
    if (!existing) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [scriptUrl]);

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
          height,
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderRadius: '12px',
          overflow: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <iframe
          src={embedUrl}
          width={'100%'}
          height={'100%'}
          title={'Mastodon Post'}
          loading={'lazy'}
          style={{
            border: 'none',
            width: '100%',
            minHeight: '100%',
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
