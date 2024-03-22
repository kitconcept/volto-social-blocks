import facebookSVG from './icons/facebook.svg';
import FacebookBlockView from './components/Blocks/Facebook/View';
import FacebookBlockEdit from './components/Blocks/Facebook/Edit';

import instagramSVG from './icons/instagram.svg';
import InstagramBlockView from './components/Blocks/Instagram/View';
import InstagramBlockEdit from './components/Blocks/Instagram/Edit';

import twitterSVG from './icons/twitter.svg';
import TweetBlockView from './components/Blocks/Tweet/View';
import TweetBlockEdit from './components/Blocks/Tweet/Edit';

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
};

const applyConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    ...blocks,
  };
  config.blocks.groupBlocksOrder = [...config.blocks.groupBlocksOrder, { id: 'social', title: 'Social' }];
  // Check for @kitconcept/volto-blocks-grid
  const gridBlock = config.blocks.blocksConfig.__grid;
  if (gridBlock !== undefined) {
    config.blocks.blocksConfig.__grid.gridAllowedBlocks = [...gridBlock.gridAllowedBlocks, 'facebookBlock', 'instagramBlock', 'tweetBlock'];
  }
  return config;
};

export default applyConfig;
