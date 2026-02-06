import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import AppleMusicView from './DefaultView';
import type { AppleMusicBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<AppleMusicBlockFormData>;

const AppleMusicBlockView = (props: Props) => {
  const { data, className } = props;
  return <AppleMusicView {...data} className={className} />;
};

export default withBlockExtensions(AppleMusicBlockView);
