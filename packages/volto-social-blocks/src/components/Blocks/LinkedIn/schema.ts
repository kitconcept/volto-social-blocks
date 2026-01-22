import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import type { JSONSchema } from '@plone/types';
import messages from '../../../messages';
import type { BlockSchemaProps } from '@plone/types';

export const linkedinSchema = (props: BlockSchemaProps): JSONSchema => {
  const { intl } = props;
  const schema: JSONSchema = {
    title: intl.formatMessage(messages.linkedinBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['postURL'],
      },
    ],

    properties: {
      postURL: {
        title: intl.formatMessage(messages.postURL),
      },
    },
    required: ['postURL'],
  };

  addStyling({ schema, intl });
  return schema;
};
