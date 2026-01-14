import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import messages from '../../../messages';

export const linkedinSchema = (props: any) => {
  const { intl } = props;
  const schema: any = {
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
