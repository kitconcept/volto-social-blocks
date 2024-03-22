import React from 'react';
import PropTypes from 'prop-types';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

const SIZES = {
  s: 152,
  m: 352,
  l: 352,
};

const STYLE = {
  borderRadius: '12px',
};

const SpotifyView = (props) => {
  const { spotifyId, align, size, className } = props;
  const href =
    spotifyId !== undefined
      ? spotifyId.replace(
          'https://open.spotify.com/',
          'https://open.spotify.com/embed/',
        )
      : '';
  const height = size ? SIZES[size] : SIZES['l'];
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

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SpotifyView.propTypes = {
  spotifyId: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SpotifyView.defaultProps = {
  align: 'center',
  size: 'l',
};

export default SpotifyView;
