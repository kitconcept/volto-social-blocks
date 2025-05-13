import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import messages from '@kitconcept/volto-social-blocks/messages';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import { linkedinSchema } from './schema';
import linkedinSVG from '@kitconcept/volto-social-blocks/icons/linkedin.svg';
import { useIntl } from 'react-intl';

const LinkedInBlockData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;

  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(linkedinSchema({ ...props, intl }), props)
    : linkedinSchema({ ...props, intl });
  return (
    <BlockDataForm
      schema={schema}
      icon={<Icon size="24px" name={linkedinSVG} />}
      title={intl.formatMessage(messages.linkedinBlock)}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default LinkedInBlockData;
