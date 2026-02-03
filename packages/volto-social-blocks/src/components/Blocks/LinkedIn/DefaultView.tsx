import React from 'react';
import SocialContentWrapper from '@kitconcept/volto-social-blocks/components/SocialContentWrapper/SocialContentWrapper';
import { LinkedInEmbed } from 'react-social-media-embed';
import { POST_WIDTHS } from '../sharedWidths';

export type LinkedInViewProps = {
  postURL?: string;
  styles?: {
    align?: string;
    size?: keyof typeof POST_WIDTHS;
  };
  className?: string;
};

const LinkedInView = ({ postURL, styles, className }: LinkedInViewProps) => {
  const { align = 'center', size = 'l' } = styles || {};
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
  const linkText = 'View post on LinkedIn';
  return postURL ? (
    <SocialContentWrapper
      align={align}
      tool="linkedin"
      url={postURL}
      linkText={linkText}
      className={`${className ?? ''} size-${width}`}
    >
      <LinkedInEmbed url={postURL} width={width} linkText={linkText} />
    </SocialContentWrapper>
  ) : null;
};

export default LinkedInView;
