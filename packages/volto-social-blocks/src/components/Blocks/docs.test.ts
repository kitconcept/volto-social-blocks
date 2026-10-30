import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createIntl } from 'react-intl';
import type { JSONSchema } from '@plone/types';
import { appleMusicSchema } from './AppleMusic/schema';
import { blueskySchema } from './Bluesky/schema';
import { facebookSchema } from './Facebook/schema';
import { flickrSchema } from './Flickr/schema';
import { instagramSchema } from './Instagram/schema';
import { linkedinSchema } from './LinkedIn/schema';
import { mastodonSchema } from './Mastodon/schema';
import { pinterestSchema } from './Pinterest/schema';
import { soundcloudSchema } from './Soundcloud/schema';
import { spotifySchema } from './Spotify/schema';
import { threadsSchema } from './Threads/schema';
import { tiktokSchema } from './TikTok/schema';
import { tweetSchema } from './Tweet/schema';
import { twitchSchema } from './Twitch/schema';

type SchemaFn = (args: unknown) => JSONSchema;

const SCHEMAS: Record<string, SchemaFn> = {
  appleMusicSchema,
  blueskySchema,
  facebookSchema,
  flickrSchema,
  instagramSchema,
  linkedinSchema,
  mastodonSchema,
  pinterestSchema,
  soundcloudSchema,
  spotifySchema,
  threadsSchema,
  tiktokSchema,
  tweetSchema,
  twitchSchema,
} as unknown as Record<string, SchemaFn>;

const blocksDir = path.dirname(fileURLToPath(import.meta.url));

const FRONTMATTER = /^---\n([\s\S]*?)\n---\n/;

type Doc = { frontmatter: string; markdown: string };

/**
 * The blocks the add-on registers, read from its install function. The
 * install module itself is not imported here: it needs a dependency the
 * package does not declare, so the registry is read as text.
 */
function registeredBlocks() {
  const source = readFileSync(
    path.join(blocksDir, '..', '..', 'config', 'blocks.ts'),
    'utf8',
  );
  return [
    ...source.matchAll(
      /blocksConfig\.(\w+) = \{\s*id: '(\w+)',[\s\S]*?blockSchema: (\w+),/g,
    ),
  ].map(([, key, id, schemaName]) => ({ key, id, schemaName }));
}

/** Read every `docs.block.md` of the add-on, keyed by the block it names. */
function readAllDocs(): Record<string, Doc[]> {
  const docs: Record<string, Doc[]> = {};
  const files = readdirSync(blocksDir, { recursive: true }) as string[];
  for (const file of files.filter((f) => f.endsWith('.block.md'))) {
    const text = readFileSync(path.join(blocksDir, file), 'utf8');
    const frontmatter = text.match(FRONTMATTER)?.[1] ?? '';
    const markdown = text.replace(FRONTMATTER, '').trim();
    const id = frontmatter.match(/^block: (.+)$/m)?.[1] ?? '';
    docs[id] = [...(docs[id] ?? []), { frontmatter, markdown }];
  }
  return docs;
}

/** Resolve a block's schema with the arguments `@blocks-schema` passes. */
function resolveSchema(schemaFn: SchemaFn, id: string): JSONSchema {
  const intl = createIntl({ locale: 'en', messages: {}, onError: () => {} });
  const data = { '@type': id };
  return schemaFn({ data, intl, props: { data } });
}

const blocks = registeredBlocks();
const docs = readAllDocs();

describe('registry', () => {
  it('registers the fourteen social blocks, each with a known schema', () => {
    expect(blocks).toHaveLength(14);
    for (const block of blocks) {
      expect(SCHEMAS[block.schemaName]).toBeTypeOf('function');
      expect(block.key).toBe(block.id);
    }
  });
});

describe.each(blocks)('$id docs', ({ id, schemaName }) => {
  const docList = docs[id] ?? [];
  const doc = docList[0];
  const markdown = doc?.markdown ?? '';
  const schema = resolveSchema(SCHEMAS[schemaName], id);
  const examples = [...markdown.matchAll(/```json\n([\s\S]*?)\n```/g)].map(
    ([, json]) => JSON.parse(json),
  );

  it('has exactly one docs file, naming the registry key', () => {
    expect(docList).toHaveLength(1);
    expect(doc.frontmatter).toBe(`block: ${id}`);
  });

  it('opens with a one-paragraph summary', () => {
    const first = markdown.split(/\n\s*\n/)[0];
    expect(first).not.toMatch(/^#/);
    expect(first.length).toBeGreaterThan(40);
  });

  it('nests its headings below the one the endpoint adds', () => {
    expect(markdown).not.toMatch(/^#{1,2} /m);
  });

  it('explains every field of the schema', () => {
    for (const field of Object.keys(schema.properties ?? {})) {
      expect(markdown).toContain(`- \`${field}\`: `);
    }
  });

  it('has a minimal example and examples that use the fields', () => {
    expect(examples).toContainEqual(expect.objectContaining({ '@type': id }));
    const used = examples.flatMap((example) => Object.keys(example));
    for (const field of Object.keys(schema.properties ?? {})) {
      expect(used).toContain(field);
    }
  });

  it('only has examples that are data for this block', () => {
    const known = ['@type', ...Object.keys(schema.properties ?? {})];
    for (const example of examples) {
      expect(example['@type']).toBe(id);
      for (const field of Object.keys(example)) {
        expect(known).toContain(field);
      }
    }
  });
});
