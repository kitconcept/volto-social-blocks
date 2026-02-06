import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { XEmbed } from 'react-social-media-embed';

const SIZES: Record<string, number> = {
  s: 300,
  m: 400,
  l: 500,
};

export type TweetViewProps = {
  tweetId?: string;
  align?: string;
  size?: keyof typeof SIZES;
  theme?: string;
  lang?: string;
  dnt?: boolean;
  className?: string;
};

const TweetView = ({
  tweetId,
  align = 'center',
  size = 'l',
  theme = 'light',
  lang = 'en',
  dnt = true,
  className,
}: TweetViewProps) => {
  const url = `https://twitter.com/twitter/status/${tweetId}`;
  const width = SIZES[size] ?? SIZES.l;
  const options = {
    options: {
      theme,
      lang,
      dnt,
    },
  };
  const linkText = 'View post on Twitter';
  const embedKey = `${tweetId}-${theme}-${lang}-${dnt}-${width}`;

  return tweetId ? (
    <SocialContentWrapper
      align={align}
      tool="twitter"
      url={url}
      linkText={linkText}
      className={className}
    >
      <XEmbed
        key={embedKey}
        url={url}
        width={width}
        linkText={linkText}
        twitterTweetEmbedProps={options}
      />
    </SocialContentWrapper>
  ) : null;
};

export default TweetView;
