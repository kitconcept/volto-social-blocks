import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { PlaceholderEmbed } from 'react-social-media-embed';
import './Style.less';

const checkConsent = (tool) => {
  // TODO: Check if we have consent to display this tool
  return true;
};

const SocialContentWrapper = ({
  align = 'center',
  tool,
  url,
  linkText,
  children,
}) => {
  console.log(children);
  const display = checkConsent(tool);
  return display ? (
    <div
      className={cx(
        'block socialcontent align',
        {
          center: !Boolean(align),
        },
        align,
      )}
    >
      { children }
    </div>
  ) : (
    <div
      className={cx(
        'block socialcontent align',
        {
          center: !Boolean(align),
        },
        align,
      )}
    >
      <PlaceholderEmbed linkText={linkText} url={url} />
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SocialContentWrapper.propTypes = {
  align: PropTypes.string,
  tool: PropTypes.string,
  url: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SocialContentWrapper;
