import { cloneDeep } from 'lodash';

import facebookSVG from './icons/facebook.svg';
import FacebookBlockView from './components/Blocks/Facebook/View';
import FacebookBlockEdit from './components/Blocks/Facebook/Edit';

import instagramSVG from './icons/instagram.svg';
import InstagramBlockView from './components/Blocks/Instagram/View';
import InstagramBlockEdit from './components/Blocks/Instagram/Edit';

import twitterSVG from './icons/twitter.svg';
import TweetBlockView from './components/Blocks/Tweet/View';
import TweetBlockEdit from './components/Blocks/Tweet/Edit';

import flickrSVG from './icons/flickr.svg';
import FlickrBlockView from './components/Blocks/Flickr/View';
import FlickrBlockEdit from './components/Blocks/Flickr/Edit';

import spotifySVG from './icons/spotify.svg';
import SpotifyBlockView from './components/Blocks/Spotify/View';
import SpotifyBlockEdit from './components/Blocks/Spotify/Edit';

import soundcloudSVG from './icons/soundcloud.svg';
import SoundcloudBlockView from './components/Blocks/Soundcloud/View';
import SoundcloudBlockEdit from './components/Blocks/Soundcloud/Edit';

const blocks = {
  facebookBlock: {
    id: 'facebookBlock',
    title: 'Facebook',
    icon: facebookSVG,
    group: 'social',
    view: FacebookBlockView,
    edit: FacebookBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  },
  instagramBlock: {
    id: 'instagramBlock',
    title: 'Instagram',
    icon: instagramSVG,
    group: 'social',
    view: InstagramBlockView,
    edit: InstagramBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  },
  tweetBlock: {
    id: 'tweetBlock',
    title: 'Tweet',
    icon: twitterSVG,
    group: 'social',
    view: TweetBlockView,
    edit: TweetBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    defaultLanguage: 'en',
    defaultTheme: 'light',
  },
  flickrBlock: {
    id: 'flickrBlock',
    title: 'Flickr',
    icon: flickrSVG,
    group: 'social',
    view: FlickrBlockView,
    edit: FlickrBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  },
  spotifyBlock: {
    id: 'spotifyBlock',
    title: 'Spotify',
    icon: spotifySVG,
    group: 'social',
    view: SpotifyBlockView,
    edit: SpotifyBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  },
  soundcloudBlock: {
    id: 'soundcloudBlock',
    title: 'Soundcloud',
    icon: soundcloudSVG,
    group: 'social',
    view: SoundcloudBlockView,
    edit: SoundcloudBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  },
};

const applyConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    ...blocks,
  };
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'social', title: 'Social' },
  ];

  // Array of local blocks ids
  const localBlocks = blocks.map((item) => item.id);

  // Add Blocks to gridBlock and accordionBlock
  // It's important to maintain the chain, and do not introduce pass by reference in
  // the internal `blocksConfig` object, so we clone the object to avoid this.
  ['__grid', 'gridBlock', 'accordion'].forEach((blockId) => {
    const block = config.blocks.blocksConfig[blockId];
    if (
      block !== undefined &&
      block.allowedBlocks !== undefined &&
      block.blocksConfig !== undefined
    ) {
      block.allowedBlocks = [...block.allowedBlocks, ...localBlocks];
      localBlocks.forEach((blockId) => {
        block.blocksConfig[blockId] = cloneDeep(
          config.blocks.blocksConfig[blockId],
        );
      });
    }
  });
  return config;
};

export default applyConfig;
