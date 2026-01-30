import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { extractAppleMusicEmbedUrl } from '../../../helpers';

const WIDTHS: Record<string, number> = {
  s: 420,
  m: 640,
  l: 960,
};

export type AppleMusicViewProps = {
  appleMusicUrl?: string;
  align?: string;
  size?: keyof typeof WIDTHS;
  className?: string;
};

const AppleMusicView = ({
  appleMusicUrl,
  align = 'center',
  size = 'l',
  className,
}: AppleMusicViewProps) => {
  const embedUrl = extractAppleMusicEmbedUrl(appleMusicUrl);
  const width = WIDTHS[size] ?? WIDTHS.l;
  const linkText = 'Listen on Apple Music/Podcasts';
  
  return embedUrl ? (
    <SocialContentWrapper
      align={align}
      tool="apple-music"
      url={appleMusicUrl || ''}
      linkText={linkText}
      className={className}
    >
      <div style={{ width, maxWidth: '100%' }}>
        <iframe
          src={embedUrl}
          width={'100%'}
          allow={'autoplay *; encrypted-media *; fullscreen *; clipboard-write'}
          title={'Apple Music/Podcasts Player'}
          loading={'lazy'}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          style={{
            border: 'none',
            borderRadius: '12px',
            display: 'block',
          }}
        />
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default AppleMusicView;
