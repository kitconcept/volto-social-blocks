import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SpotifyView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const SpotifyBlockView = (props: Props) => {
  const { data, className } = props;
  return <SpotifyView {...(data as any)} className={className} />;
};

export default withBlockExtensions(SpotifyBlockView as any);
