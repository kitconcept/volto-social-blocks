import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import SoundcloudView from './DefaultView';
import type { SoundcloudBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<SoundcloudBlockFormData>;

const SoundcloudBlockView = (props: Props) => {
  const { data, className } = props;
  return <SoundcloudView {...data} className={className} />;
};

export default withBlockExtensions(SoundcloudBlockView);
