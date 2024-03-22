import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Style.less';
import config from '@plone/volto/registry';

const SocialContentWrapper = ({
  align = 'center',
  tool,
  children,
  data,
  className,
}) => {
  const CheckPrivacyConsent = config.getComponent(
    'CheckPrivacyConsent',
  ).component;

  return (
    <div
      className={cx(
        'block socialcontent align',
        className,
        {
          center: !Boolean(align),
        },
        align,
      )}
    >
      {CheckPrivacyConsent ? (
        <CheckPrivacyConsent module={tool} data={data ?? {}}>
          {children}
        </CheckPrivacyConsent>
      ) : (
        <>{children}</>
      )}
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SocialContentWrapper;
