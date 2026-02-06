import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { InstagramEmbed } from 'react-social-media-embed';
import { POST_WIDTHS } from '../sharedWidths';

export type InstagramViewProps = {
  instagramId?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
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
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
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
        key={`${instagramId}-${width}-${captioned}`}
        url={instagramId}
        width={width}
        captioned={captioned}
        linkText={linkText}
      />
    </SocialContentWrapper>
  ) : null;
};

export default InstagramView;
