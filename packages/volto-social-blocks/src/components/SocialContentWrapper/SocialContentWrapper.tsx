import React from 'react';
import cx from 'classnames';
import './Style.less';
import { getRegistryComponent } from '../../helpers/registry';

export type PrivacyConsentComponentProps = {
  module: string;
  data: Record<string, unknown>;
  children: React.ReactNode;
};

export type SocialContentWrapperProps = {
  align?: string;
  tool: string;
  url?: string;
  linkText?: string;
  children: React.ReactNode;
  data?: Record<string, unknown>;
  className?: string;
};

function SocialContentWrapper({
  align = 'center',
  tool,
  url,
  linkText,
  children,
  data,
  className,
}: SocialContentWrapperProps) {
  const CheckPrivacyConsent:
    | React.ComponentType<PrivacyConsentComponentProps>
    | undefined = getRegistryComponent('CheckPrivacyConsent');

  const privacyConsentData: Record<string, unknown> = {
    ...(data ?? {}),
    ...(url ? { url } : {}),
    ...(linkText ? { linkText } : {}),
  };

  const wrappedChildren = (
    <div className="social-embed-container">{children}</div>
  );

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
        <CheckPrivacyConsent module={tool} data={privacyConsentData}>
          {wrappedChildren}
        </CheckPrivacyConsent>
      ) : (
        <>{wrappedChildren}</>
      )}
    </div>
  );
}

export default SocialContentWrapper;
