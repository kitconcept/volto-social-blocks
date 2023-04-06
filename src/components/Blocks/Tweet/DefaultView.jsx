import React from 'react';
import PropTypes from 'prop-types';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { TwitterEmbed } from 'react-social-media-embed';

const SIZES = {
  s: 300,
  m: 400,
  l: 500,
};

const TweetView = (props) => {
  const { tweetId, align, size, theme, lang, dnt, className } = props;
  const url = `https://twitter.com/twitter/status/${tweetId}`;
  const width = size ? SIZES[size] : SIZES['l'];
  const options = {
    options: {
      theme: theme,
      lang: lang,
      dnt: dnt,
    },
  };
  const linkText = 'View post on Twitter';
  return tweetId ? (
    <SocialContentWrapper
      align={align}
      tool="twitter"
      url={url}
      linkText={linkText}
      className={className}
    >
      <TwitterEmbed
        url={url}
        width={width}
        linkText={linkText}
        twitterTweetEmbedProps={options}
      />
    </SocialContentWrapper>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TweetView.propTypes = {
  tweetId: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  lang: PropTypes.string,
  dnt: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
TweetView.defaultProps = {
  align: 'center',
  size: 'l',
  theme: 'light',
  lang: 'en',
  dnt: true,
};

export default TweetView;
