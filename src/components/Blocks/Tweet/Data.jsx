import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { tweetSchema } from './schema';
import { extractTweetId } from '../../../helpers';
import { useIntl } from 'react-intl';

const TweetBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = tweetSchema({ ...props, intl });
  Object.keys(schema.properties).forEach((key) => {
    const field = schema.properties[key];
    const defaultValue = field.default;
    if (defaultValue !== undefined && data[field] === undefined) {
      data[field] = defaultValue;
    }
  });
  const onChangeField = (id, value) => {
    if (id === 'tweetId' && value !== '') {
      value = extractTweetId(value);
      if (!value) {
        return;
      }
    }
    onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return <BlockDataForm schema={schema} title={schema.title} onChangeField={onChangeField} formData={data} block={block} />;
};

export default TweetBlockData;
