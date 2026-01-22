import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

const SIZES: Record<string, number> = {
  s: 152,
  m: 352,
  l: 352,
};

const STYLE: React.CSSProperties = {
  borderRadius: '12px',
};

export type SpotifyViewProps = {
  spotifyId?: string;
  align?: string;
  size?: keyof typeof SIZES;
  className?: string;
};

const SpotifyView = ({
  spotifyId,
  align = 'center',
  size = 'l',
  className,
}: SpotifyViewProps) => {
  const href =
    spotifyId !== undefined
      ? spotifyId.replace(
          'https://open.spotify.com/',
          'https://open.spotify.com/embed/',
        )
      : '';
  const height = SIZES[size] ?? SIZES.l;
  const linkText = 'Listen to content on Spotify';
  return href ? (
    <SocialContentWrapper
      align={align}
      tool="spotify"
      url={href}
      linkText={linkText}
      className={className}
    >
      <iframe
        style={STYLE}
        src={href}
        width={'100%'}
        height={height}
        frameBorder={'0'}
        allow={
          'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        }
        title={'Spotify Player'}
        loading={'lazy'}
      />
    </SocialContentWrapper>
  ) : null;
};

export default SpotifyView;
