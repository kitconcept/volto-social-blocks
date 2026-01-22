import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { InstagramEmbed } from 'react-social-media-embed';

const SIZES: Record<string, number> = {
  s: 350,
  m: 450,
  l: 500,
};

export type InstagramViewProps = {
  instagramId?: string;
  align?: string;
  size?: keyof typeof SIZES;
  captioned?: boolean;
  className?: string;
};

const InstagramView = ({
  instagramId,
  align = 'center',
  size = 'l',
  captioned = true,
  className,
}: InstagramViewProps) => {
  const width = SIZES[size] ?? SIZES.l;
  const linkText = 'View post on instagram';
  return instagramId ? (
    <SocialContentWrapper
      align={align}
      tool="instagram"
      url={instagramId}
      linkText={linkText}
      className={className}
    >
      <InstagramEmbed
        url={instagramId}
        width={width}
        captioned={captioned}
        linkText={linkText}
      />
    </SocialContentWrapper>
  ) : null;
};

export default InstagramView;
