import React from 'react';
import PropTypes from 'prop-types';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { FacebookEmbed } from 'react-social-media-embed';

const SIZES = {
  s: 350,
  m: 450,
  l: 500,
};

const FacebookView = (props) => {
  const { facebookId, align, size, className } = props;
  const width = size ? SIZES[size] : SIZES['l'];
  const linkText = 'View post on Facebook';
  return facebookId ? (
    <SocialContentWrapper
      align={align}
      tool="facebook"
      url={facebookId}
      linkText={linkText}
      className={className}
    >
      <FacebookEmbed url={facebookId} width={width} linkText={linkText} />
    </SocialContentWrapper>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FacebookView.propTypes = {
  facebookId: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
FacebookView.defaultProps = {
  align: 'center',
  size: 'l',
};

export default FacebookView;
