import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Style.less';
import config from '@plone/volto/registry';

const CheckPrivacyConsent = config.getComponent('CheckPrivacyConsent')
  .component;

const SocialContentWrapper = ({ align = 'center', tool, children, data }) => {
  const SocialContentProviders = {
    twitter: {
      cookie: 'twitter',
      name: 'Twitter.com',
      website: 'https://twitter.com',
    },
    instagram: {
      cookie: 'instagram',
      name: 'Instagram.com',
      website: 'https://instagram.com',
    },
    facebook: {
      cookie: 'facebook',
      name: 'Facebook.com',
      website: 'https://facebook.com',
    },
  };

  return (
    <div
      className={cx(
        'block socialcontent align',
        {
          center: !Boolean(align),
        },
        align,
      )}
    >
      {CheckPrivacyConsent ? (
        <CheckPrivacyConsent
          module={SocialContentProviders[tool]}
          data={data ?? {}}
        >
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
