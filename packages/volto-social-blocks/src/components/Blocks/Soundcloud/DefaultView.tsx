import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { AUDIO_WIDTHS } from '../sharedWidths';

const SIZES: Record<string, number> = {
  s: 152,
  m: 352,
  l: 352,
};

type SoundcloudSize = keyof typeof SIZES;

export type SoundcloudViewProps = {
  soundcloudId?: string;
  align?: string;
  size?: SoundcloudSize;
  className?: string;
};

const SoundcloudView = ({
  soundcloudId,
  align = 'center',
  size = 'l',
  className,
}: SoundcloudViewProps) => {
  const href = soundcloudId !== undefined ? soundcloudId : '';
  const height = SIZES[size] ?? SIZES.l;
  const width = AUDIO_WIDTHS[size] ?? AUDIO_WIDTHS.l;
  const linkText = 'Listen to content on Soundcloud';
  return href ? (
    <SocialContentWrapper
      align={align}
      tool="soundcloud"
      url={href}
      linkText={linkText}
      className={className}
    >
      <div style={{ width, maxWidth: '100%' }}>
        <iframe
          key={`${href}-${height}`}
          style={{ width: '100%', border: 'none', display: 'block' }}
          height={height}
          src={`https://w.soundcloud.com/player/?url=${href}`}
          title={'Soundcloud Player'}
          loading={'lazy'}
        />
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default SoundcloudView;
