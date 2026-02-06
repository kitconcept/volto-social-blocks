import React from 'react';
import cx from 'classnames';
import './Style.less';

export type NonInteractiveWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

function NonInteractiveWrapper({
  children,
  className,
}: NonInteractiveWrapperProps) {
  return (
    <div className={cx('volto-social-blocks__nonInteractive', className)}>
      <div className="volto-social-blocks__nonInteractiveInner">{children}</div>
    </div>
  );
}

export default NonInteractiveWrapper;
