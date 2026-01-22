import React from 'react';
import SocialContentWrapper from '@kitconcept/volto-social-blocks/components/SocialContentWrapper/SocialContentWrapper';
import { LinkedInEmbed } from 'react-social-media-embed';

const SIZES: Record<string, number> = {
  s: 350,
  m: 450,
  l: 800,
};

export type LinkedInViewProps = {
  postURL?: string;
  align?: string;
  size?: keyof typeof SIZES;
  className?: string;
};

const LinkedInView = ({
  postURL,
  align = 'center',
  size = 'l',
  className,
}: LinkedInViewProps) => {
  const width = SIZES[size] ?? SIZES.l;
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
