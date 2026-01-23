import type { ConfigType } from '@plone/registry';

import cloneDeep from 'lodash/cloneDeep';

// LinkedIn
import linkedinSVG from '../icons/linkedin.svg';
import { linkedinSchema } from '../components/Blocks/LinkedIn/schema';
import LinkedInBlockView from '../components/Blocks/LinkedIn/View';
import LinkedInBlockEdit from '../components/Blocks/LinkedIn/Edit';

// Facebook
import facebookSVG from '../icons/facebook.svg';
import { facebookSchema } from '../components/Blocks/Facebook/schema';
import FacebookBlockView from '../components/Blocks/Facebook/View';
import FacebookBlockEdit from '../components/Blocks/Facebook/Edit';

// Instagram
import instagramSVG from '../icons/instagram.svg';
import { instagramSchema } from '../components/Blocks/Instagram/schema';
import InstagramBlockView from '../components/Blocks/Instagram/View';
import InstagramBlockEdit from '../components/Blocks/Instagram/Edit';

// Twitter
import twitterSVG from '../icons/twitter.svg';
import { tweetSchema } from '../components/Blocks/Tweet/schema';
import TweetBlockView from '../components/Blocks/Tweet/View';
import TweetBlockEdit from '../components/Blocks/Tweet/Edit';

// Flickr
import flickrSVG from '../icons/flickr.svg';
import { flickrSchema } from '../components/Blocks/Flickr/schema';
import FlickrBlockView from '../components/Blocks/Flickr/View';
import FlickrBlockEdit from '../components/Blocks/Flickr/Edit';

// Spotify
import spotifySVG from '../icons/spotify.svg';
import { spotifySchema } from '../components/Blocks/Spotify/schema';
import SpotifyBlockView from '../components/Blocks/Spotify/View';
import SpotifyBlockEdit from '../components/Blocks/Spotify/Edit';

// Soundcloud
import soundcloudSVG from '../icons/soundcloud.svg';
import { soundcloudSchema } from '../components/Blocks/Soundcloud/schema';
import SoundcloudBlockView from '../components/Blocks/Soundcloud/View';
import SoundcloudBlockEdit from '../components/Blocks/Soundcloud/Edit';

// TikTok
import tiktokSVG from '../icons/tiktok.svg';
import { tiktokSchema } from '../components/Blocks/TikTok/schema';
import TikTokBlockView from '../components/Blocks/TikTok/View';
import TikTokBlockEdit from '../components/Blocks/TikTok/Edit';

// Pinterest
import pinterestSVG from '../icons/pinterest.svg';
import { pinterestSchema } from '../components/Blocks/Pinterest/schema';
import PinterestBlockView from '../components/Blocks/Pinterest/View';
import PinterestBlockEdit from '../components/Blocks/Pinterest/Edit';

declare module '@plone/types' {
  export interface BlocksConfigData {
    facebookBlock: BlockConfigBase;
    flickrBlock: BlockConfigBase;
    linkedinBlock: BlockConfigBase;
    instagramBlock: BlockConfigBase;
    pinterestBlock: BlockConfigBase;
    soundcloudBlock: BlockConfigBase;
    spotifyBlock: BlockConfigBase;
    tiktokBlock: BlockConfigBase;
    tweetBlock: BlockConfigBase;
  }
  export interface BlockConfigBase {
    defaultLanguage?: string;
    defaultTheme?: string;
  }
}

function installGroupBlocksOrder(config: ConfigType) {
  // Blocks Groups
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'social', title: 'Social' },
  ];
  return config;
}

function addBlocksToOtherBlocks(config: ConfigType) {
  // Array of local blocks ids
  const localBlocks = [
    'facebookBlock',
    'flickrBlock',
    'instagramBlock',
    'linkedinBlock',
    'pinterestBlock',
    'soundcloudBlock',
    'spotifyBlock',
    'tiktokBlock',
    'tweetBlock',
  ];

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
}

export default function install(config: ConfigType) {
  installGroupBlocksOrder(config);
  // Blocks
  config.blocks.blocksConfig.facebookBlock = {
    id: 'facebookBlock',
    title: 'Facebook',
    icon: facebookSVG,
    group: 'social',
    category: 'embed',
    blockSchema: facebookSchema,
    view: FacebookBlockView,
    edit: FacebookBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.flickrBlock = {
    id: 'flickrBlock',
    title: 'Flickr',
    icon: flickrSVG,
    group: 'social',
    category: 'embed',
    blockSchema: flickrSchema,
    view: FlickrBlockView,
    edit: FlickrBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.instagramBlock = {
    id: 'instagramBlock',
    title: 'Instagram',
    icon: instagramSVG,
    group: 'social',
    category: 'embed',
    blockSchema: instagramSchema,
    view: InstagramBlockView,
    edit: InstagramBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.linkedinBlock = {
    id: 'linkedinBlock',
    title: 'LinkedIn',
    icon: linkedinSVG,
    group: 'social',
    category: 'embed',
    blockSchema: linkedinSchema,
    view: LinkedInBlockView,
    edit: LinkedInBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.spotifyBlock = {
    id: 'spotifyBlock',
    title: 'Spotify',
    icon: spotifySVG,
    group: 'social',
    category: 'embed',
    blockSchema: spotifySchema,
    view: SpotifyBlockView,
    edit: SpotifyBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.soundcloudBlock = {
    id: 'soundcloudBlock',
    title: 'Soundcloud',
    icon: soundcloudSVG,
    group: 'social',
    category: 'embed',
    blockSchema: soundcloudSchema,
    view: SoundcloudBlockView,
    edit: SoundcloudBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.tiktokBlock = {
    id: 'tiktokBlock',
    title: 'TikTok',
    icon: tiktokSVG,
    group: 'social',
    category: 'embed',
    blockSchema: tiktokSchema,
    view: TikTokBlockView,
    edit: TikTokBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.pinterestBlock = {
    id: 'pinterestBlock',
    title: 'Pinterest',
    icon: pinterestSVG,
    group: 'social',
    category: 'embed',
    blockSchema: pinterestSchema,
    view: PinterestBlockView,
    edit: PinterestBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.tweetBlock = {
    id: 'tweetBlock',
    title: 'Tweet',
    icon: twitterSVG,
    group: 'social',
    category: 'embed',
    blockSchema: tweetSchema,
    view: TweetBlockView,
    edit: TweetBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    defaultLanguage: 'en',
    defaultTheme: 'light',
  };
  addBlocksToOtherBlocks(config);
  return config;
}
