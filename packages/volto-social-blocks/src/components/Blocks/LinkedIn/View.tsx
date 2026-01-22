import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import LinkedInView from './DefaultView';
import type { LinkedInBlockFormData } from './Data';
import type { BlockViewPropsWithData } from '../../../types/blocks';

type Props = BlockViewPropsWithData<LinkedInBlockFormData>;

const LinkedInBlockView = (props: Props) => {
  const { data, className } = props;
  return <LinkedInView {...data} className={className} />;
};

export default withBlockExtensions(LinkedInBlockView);
