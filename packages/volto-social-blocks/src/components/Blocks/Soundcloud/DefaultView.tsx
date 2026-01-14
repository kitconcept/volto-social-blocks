import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

const SIZES: Record<string, number> = {
  s: 152,
  m: 352,
  l: 352,
};

export type SoundcloudViewProps = {
  soundcloudId?: string;
  align?: string;
  size?: keyof typeof SIZES;
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
  const linkText = 'Listen to content on Soundcloud';
  return href ? (
    <SocialContentWrapper
      align={align}
      tool="soundcloud"
      url={href}
      linkText={linkText}
      className={className}
    >
      <iframe
        height={height}
        frameBorder={'0'}
        src={`https://w.soundcloud.com/player/?url=${href}`}
        title={'Soundcloud Player'}
        loading={'lazy'}
      />
    </SocialContentWrapper>
  ) : null;
};

export default SoundcloudView;
