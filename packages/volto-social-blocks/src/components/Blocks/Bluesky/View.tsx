import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import BlueskyView from './DefaultView';
import type { BlueskyBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<BlueskyBlockFormData>;

const BlueskyBlockView = (props: Props) => {
  const { data, className } = props;
  return <BlueskyView {...data} className={className} />;
};

export default withBlockExtensions(BlueskyBlockView);
