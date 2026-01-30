import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { FacebookEmbed } from 'react-social-media-embed';

import { POST_WIDTHS } from '../sharedWidths';

export type FacebookViewProps = {
  facebookId?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
  className?: string;
};

const FacebookView = ({
  facebookId,
  align = 'center',
  size = 'l',
  className,
}: FacebookViewProps) => {
  const width = POST_WIDTHS[size] ?? POST_WIDTHS.l;
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
