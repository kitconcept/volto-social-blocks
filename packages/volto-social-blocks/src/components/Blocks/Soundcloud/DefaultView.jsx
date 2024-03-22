import React from 'react';
import PropTypes from 'prop-types';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

const SIZES = {
  s: 152,
  m: 352,
  l: 352,
};

const SoundcloudView = (props) => {
  const { soundcloudId, align, size, className } = props;
  const href = soundcloudId !== undefined ? soundcloudId : '';
  const height = size ? SIZES[size] : SIZES['l'];
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

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SoundcloudView.propTypes = {
  soundcloudId: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SoundcloudView.defaultProps = {
  align: 'center',
  size: 'l',
};

export default SoundcloudView;
