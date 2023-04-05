import React from 'react';
import PropTypes from 'prop-types';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { InstagramEmbed } from 'react-social-media-embed';

const SIZES = {
  s: 350,
  m: 450,
  l: 500,
};

const InstagramView = (props) => {
  const { instagramId, align, size, captioned, className } = props;
  const width = size ? SIZES[size] : SIZES['l'];
  const linkText = 'View post on instagram';
  return instagramId ? (
    <SocialContentWrapper
      align={align}
      tool="instagram"
      url={instagramId}
      linkText={linkText}
      className={className}
    >
      <InstagramEmbed
        url={instagramId}
        width={width}
        captioned={captioned}
        linkText={linkText}
      />
    </SocialContentWrapper>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
InstagramView.propTypes = {
  instagramId: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
  captioned: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
InstagramView.defaultProps = {
  align: 'center',
  size: 'l',
  captioned: true,
};

export default InstagramView;
