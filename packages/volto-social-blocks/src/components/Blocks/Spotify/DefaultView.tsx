import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { AUDIO_WIDTHS } from '../sharedWidths';

type ColorMode = 'system' | 'light' | 'dark';

const SIZES: Record<string, number> = {
  s: 152,
  m: 352,
  l: 352,
};

type SpotifySize = keyof typeof SIZES;

const STYLE: React.CSSProperties = {
  border: 'none',
  borderRadius: '12px',
};

export type SpotifyViewProps = {
  spotifyId?: string;
  align?: string;
  size?: SpotifySize;
  colorMode?: ColorMode;
  className?: string;
};

function applySpotifyTheme(embedUrl: string, colorMode: ColorMode): string {
  if (colorMode === 'system') return embedUrl;
  try {
    const url = new URL(embedUrl);
    // Spotify theme: 0 = dark, 1 = light
    url.searchParams.set('theme', colorMode === 'dark' ? '0' : '1');
    return url.toString();
  } catch {
    return embedUrl;
  }
}

const SpotifyView = ({
  spotifyId,
  align = 'center',
  size = 'l',
  colorMode = 'system',
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
  const width = AUDIO_WIDTHS[size] ?? AUDIO_WIDTHS.l;
  const themedHref = href ? applySpotifyTheme(href, colorMode) : '';
  const linkText = 'Listen to content on Spotify';
  return themedHref ? (
    <SocialContentWrapper
      align={align}
      tool="spotify"
      url={themedHref}
      linkText={linkText}
      className={className}
    >
      <div style={{ width, maxWidth: '100%' }}>
        <iframe
          key={`${themedHref}-${height}`}
          style={{ ...STYLE, display: 'block', width: '100%' }}
          src={themedHref}
          width={'100%'}
          height={height}
          allow={
            'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          }
          title={'Spotify Player'}
          loading={'lazy'}
        />
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default SpotifyView;
