import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { FacebookEmbed } from 'react-social-media-embed';

const SIZES: Record<string, number> = {
  s: 350,
  m: 450,
  l: 500,
};

export type FacebookViewProps = {
  facebookId?: string;
  align?: string;
  size?: keyof typeof SIZES;
  className?: string;
};

const FacebookView = ({
  facebookId,
  align = 'center',
  size = 'l',
  className,
}: FacebookViewProps) => {
  const width = SIZES[size] ?? SIZES.l;
  const linkText = 'View post on Facebook';
  return facebookId ? (
    <SocialContentWrapper
      align={align}
      tool="facebook"
      url={facebookId}
      linkText={linkText}
      className={className}
    >
      <FacebookEmbed
        key={`${facebookId}-${width}`}
        url={facebookId}
        width={width}
        linkText={linkText}
      />
    </SocialContentWrapper>
  ) : null;
};

export default FacebookView;
