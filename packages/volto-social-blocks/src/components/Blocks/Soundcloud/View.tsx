import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SoundcloudView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const SoundcloudBlockView = (props: Props) => {
  const { data, className } = props;
  return <SoundcloudView {...(data as any)} className={className} />;
};

export default withBlockExtensions(SoundcloudBlockView as any);
