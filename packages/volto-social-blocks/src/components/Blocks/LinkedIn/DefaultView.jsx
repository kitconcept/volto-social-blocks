import React from 'react';
import SocialContentWrapper from '@kitconcept/volto-social-blocks/components/SocialContentWrapper/SocialContentWrapper';
import { LinkedInEmbed } from 'react-social-media-embed';

const SIZES = {
  s: 350,
  m: 450,
  l: 800,
};

const LinkedInView = (props) => {
  const { postURL, align, size, className } = props;
  const width = size ? SIZES[size] : SIZES['l'];
  const linkText = 'View post on LinkedIn';
  return postURL ? (
    <SocialContentWrapper
      align={align}
      tool="linkedin"
      url={postURL}
      linkText={linkText}
      className={`${className} size-${width}`}
    >
      <LinkedInEmbed url={postURL} width={width} linkText={linkText} />
    </SocialContentWrapper>
  ) : null;
};

export default LinkedInView;
