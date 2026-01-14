import React from 'react';
import cx from 'classnames';
import './Style.less';
import config from '@plone/volto/registry';

export type SocialContentWrapperProps = {
  align?: string;
  tool: string;
  url?: string;
  linkText?: string;
  children: React.ReactNode;
  data?: Record<string, unknown>;
  className?: string;
};

const SocialContentWrapper = ({
  align = 'center',
  tool,
  children,
  data,
  className,
}: SocialContentWrapperProps) => {
  const CheckPrivacyConsent = config.getComponent('CheckPrivacyConsent')
    ?.component as React.ComponentType<{
    module: string;
    data: Record<string, unknown>;
    children: React.ReactNode;
  }>;

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

export default SocialContentWrapper;
