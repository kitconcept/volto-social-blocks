import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import TwitchView from './DefaultView';
import type { TwitchBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<TwitchBlockFormData>;

const TwitchBlockView = (props: Props) => {
  const { data, className } = props;
  return <TwitchView {...data} className={className} />;
};

export default withBlockExtensions(TwitchBlockView);
