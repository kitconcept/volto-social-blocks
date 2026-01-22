import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SpotifyView from './DefaultView';
import type { SpotifyBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<SpotifyBlockFormData>;

const SpotifyBlockView = (props: Props) => {
  const { data, className } = props;
  return <SpotifyView {...data} className={className} />;
};

export default withBlockExtensions(SpotifyBlockView);
