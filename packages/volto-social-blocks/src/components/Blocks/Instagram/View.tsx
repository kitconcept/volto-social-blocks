import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import InstagramView from './DefaultView';
import type { InstagramBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<InstagramBlockFormData>;

const InstagramBlockView = (props: Props) => {
  const { data, className } = props;
  return <InstagramView {...data} className={className} />;
};

export default withBlockExtensions(InstagramBlockView);
