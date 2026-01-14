import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import TweetView from './DefaultView';

type Props = {
  data: Record<string, unknown>;
  className?: string;
};

const TweetBlockView = (props: Props) => {
  const { data, className } = props;
  return <TweetView {...(data as any)} className={className} />;
};

export default withBlockExtensions(TweetBlockView as any);
