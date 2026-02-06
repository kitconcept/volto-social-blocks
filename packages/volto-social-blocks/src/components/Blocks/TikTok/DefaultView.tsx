import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { TikTokEmbed } from 'react-social-media-embed';

const SIZES: Record<string, number> = {
  s: 325,
  m: 450,
  l: 500,
};

export type TikTokViewProps = {
  tiktokUrl?: string;
  align?: string;
  size?: keyof typeof SIZES;
  className?: string;
};

const TikTokView = ({
  tiktokUrl,
  align = 'center',
  className,
}: TikTokViewProps) => {
  const width = SIZES.s;
  const linkText = 'View post on TikTok';

  return tiktokUrl ? (
    <SocialContentWrapper
      align={align}
      tool="tiktok"
      url={tiktokUrl}
      linkText={linkText}
      className={className}
    >
      <TikTokEmbed
        key={tiktokUrl}
        url={tiktokUrl}
        width={width}
        linkText={linkText}
        style={{ maxWidth: '100%' }}
      />
    </SocialContentWrapper>
  ) : null;
};

export default TikTokView;
