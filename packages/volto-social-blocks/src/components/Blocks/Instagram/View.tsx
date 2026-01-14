import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import InstagramView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const InstagramBlockView = (props: Props) => {
  const { data, className } = props;
  return <InstagramView {...(data as any)} className={className} />;
};

export default withBlockExtensions(InstagramBlockView as any);
