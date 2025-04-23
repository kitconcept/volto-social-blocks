import type { ConfigType } from '@plone/registry';
import installBlocks from './config/blocks';

const applyConfig = (config: ConfigType) => {
  installBlocks(config);
  return config;
};

export default applyConfig;
