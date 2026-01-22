import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import FacebookView from './DefaultView';
import type { FacebookBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<FacebookBlockFormData>;

const FacebookBlockView = (props: Props) => {
  const { data, className } = props;
  return <FacebookView {...data} className={className} />;
};

export default withBlockExtensions(FacebookBlockView);
