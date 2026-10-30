import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AppleMusicBlockData from './AppleMusic/Data';
import BlueskyBlockData from './Bluesky/Data';
import FacebookBlockData from './Facebook/Data';
import FlickrBlockData from './Flickr/Data';
import InstagramBlockData from './Instagram/Data';
import LinkedInBlockData from './LinkedIn/Data';
import MastodonBlockData from './Mastodon/Data';
import PinterestBlockData from './Pinterest/Data';
import SoundcloudBlockData from './Soundcloud/Data';
import SpotifyBlockData from './Spotify/Data';
import ThreadsBlockData from './Threads/Data';
import TikTokBlockData from './TikTok/Data';
import TweetBlockData from './Tweet/Data';
import TwitchBlockData from './Twitch/Data';

const blockDataFormSpy = vi.hoisted(() => vi.fn());

vi.mock('@plone/volto/components/manage/Form', () => ({
  BlockDataForm: (props: Record<string, unknown>) => {
    blockDataFormSpy(props);
    return null;
  },
}));

const FORMS = [
  ['applemusicBlock', AppleMusicBlockData],
  ['blueskyBlock', BlueskyBlockData],
  ['facebookBlock', FacebookBlockData],
  ['flickrBlock', FlickrBlockData],
  ['instagramBlock', InstagramBlockData],
  ['linkedinBlock', LinkedInBlockData],
  ['mastodonBlock', MastodonBlockData],
  ['pinterestBlock', PinterestBlockData],
  ['soundcloudBlock', SoundcloudBlockData],
  ['spotifyBlock', SpotifyBlockData],
  ['threadsBlock', ThreadsBlockData],
  ['tiktokBlock', TikTokBlockData],
  ['tweetBlock', TweetBlockData],
  ['twitchBlock', TwitchBlockData],
] as const;

type Form = (typeof FORMS)[number][1];

/** Render a sidebar form and return the props it handed to `BlockDataForm`. */
function renderForm(Component: Form, props: Record<string, unknown>) {
  blockDataFormSpy.mockClear();
  const Form = Component as unknown as React.ComponentType<
    Record<string, unknown>
  >;
  render(
    <IntlProvider locale="en" messages={{}}>
      <Form {...props} />
    </IntlProvider>,
  );
  expect(blockDataFormSpy).toHaveBeenCalledTimes(1);
  return blockDataFormSpy.mock.calls[0][0] as Record<string, unknown>;
}

describe.each(FORMS)('%s sidebar form', (id, Component) => {
  let onChangeBlock: ReturnType<typeof vi.fn>;
  let blocksErrors: Record<string, unknown>;
  let blocksConfig: Record<string, unknown>;

  beforeEach(() => {
    onChangeBlock = vi.fn();
    blocksErrors = { [id]: { field: ['required'] } };
    blocksConfig = {
      [id]: { id, title: 'Block', blockSchema: undefined },
    };
  });

  const baseProps = () => ({
    data: { '@type': id },
    block: 'block-1',
    onChangeBlock,
    blocksErrors,
    blocksConfig,
    navRoot: { title: 'Root' },
    contentType: 'Document',
  });

  it('hands the block, change handler and form data to BlockDataForm', () => {
    const forwarded = renderForm(Component, baseProps());
    expect(forwarded.block).toBe('block-1');
    expect(forwarded.onChangeBlock).toBe(onChangeBlock);
    expect(forwarded.formData).toMatchObject({ '@type': id });
    expect(typeof forwarded.onChangeField).toBe('function');
  });

  it('passes the block errors to BlockDataForm', () => {
    const forwarded = renderForm(Component, baseProps());
    expect(forwarded.errors).toBe(blocksErrors);
  });

  it('passes the navigation root and content type to BlockDataForm', () => {
    const forwarded = renderForm(Component, baseProps());
    expect(forwarded.navRoot).toEqual({ title: 'Root' });
    expect(forwarded.contentType).toBe('Document');
  });

  it('passes the blocks configuration to BlockDataForm', () => {
    const forwarded = renderForm(Component, baseProps());
    expect(forwarded.blocksConfig).toBe(blocksConfig);
  });

  it('reads the schema from the block configuration', () => {
    const custom = {
      title: 'Customized',
      properties: {},
    };
    const forwarded = renderForm(Component, {
      ...baseProps(),
      blocksConfig: {
        [id]: { id, blockSchema: () => custom },
      },
    });
    expect(forwarded.schema).toBe(custom);
    expect(forwarded.title).toBe('Customized');
  });
});
