import React from 'react';
import FlickrView from './DefaultView';
import Wrapper from '@plone/volto/storybook';

const withWrapper = (Story, { args }) => {
  return (
    <Wrapper anonymous>
      <div style={{ width: '100%', height: '100%' }}>
        <Story {...args} />
      </div>
    </Wrapper>
  );
};

export default {
  title: 'Public/Blocks/FlickrBlock',
  component: FlickrView,
  decorators: [withWrapper],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
# Flickr Block

Embed photos and albums from Flickr directly into your Plone pages.

## Features

- **Responsive sizes**: Three sizes available (small, medium, large)
- **Flexible alignment**: Left, center, or right alignment
- **Official Flickr embed**: Uses Flickr's native embed script
- **Support for photos and galleries**

## How to use

1. Add the Flickr block to your page
2. Paste the Flickr embed code (get it from Flickr's share menu)
3. Adjust size and alignment as needed
4. The photo/gallery will be automatically embedded
        `,
      },
    },
  },
  argTypes: {
    flickrId: {
      name: 'Flickr embed code',
      control: 'text',
    },
    align: {
      name: 'Alignment',
      control: 'select',
      options: ['center', 'left', 'right'],
    },
    size: {
      name: 'Size',
      control: 'select',
      options: ['s', 'm', 'l'],
    },
  },
  args: {
    flickrId:
      '<a data-flickr-embed="true" data-header="true" data-footer="true" href="https://www.flickr.com/photos/plone-foundation/albums/72177720303069181" title="Plone Conference 2022 Namur"><img src="https://live.staticflickr.com/65535/52443622430_c442b75502.jpg" width="500" height="375" alt="Plone Conference 2022 Namur"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
    align: 'center',
    size: 'l',
  },
};

export const Small = {
  args: {
    size: 's',
  },
};
export const Medium = {
  args: {
    size: 'm',
  },
};
export const Large = {
  args: {
    size: 'l',
  },
};
export const AlignLeft = {
  args: {
    align: 'left',
    size: 'l',
  },
};
export const AlignCenter = {
  args: {
    align: 'center',
    size: 'l',
  },
};
export const AlignRight = {
  args: {
    align: 'right',
    size: 'l',
  },
};
