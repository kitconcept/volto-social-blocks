import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import LinkedInView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const LinkedInBlockView = (props: Props) => {
  const { data, className } = props;
  return <LinkedInView {...(data as any)} className={className} />;
};

export default withBlockExtensions(LinkedInBlockView as any);
