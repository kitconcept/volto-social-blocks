import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import MastodonView from './DefaultView';
import type { MastodonBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<MastodonBlockFormData>;

const MastodonBlockView = (props: Props) => {
  const { data, className } = props;
  return <MastodonView {...data} className={className} />;
};

export default withBlockExtensions(MastodonBlockView);
