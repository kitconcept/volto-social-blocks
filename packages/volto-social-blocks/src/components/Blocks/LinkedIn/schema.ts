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

  // Adds an empty `styles` object field under a "Styling" fieldset
  addStyling({ schema, intl });

  // Add styling controls
  schema.properties.styles.schema.properties.align = {
    widget: 'align',
    title: intl.formatMessage(messages.align),
    actions: ['left', 'center', 'right'],
  };
  schema.properties.styles.schema.properties.size = {
    title: intl.formatMessage(messages.size),
    widget: 'image_size',
  };

  // Add the fields to the "Styling" fieldset
  schema.properties.styles.schema.fieldsets[0].fields.push('align');
  schema.properties.styles.schema.fieldsets[0].fields.push('size');

  return schema;
};
