---
applyTo: '**/*.ts,**/*.tsx,**/*.js,**/*.jsx'
---

# Project coding standards for TypeScript, JavaScript and React

## Project Overview

This is `@kitconcept/volto-social-blocks`, a Volto addon that provides blocks for embedding content from various social media platforms in Plone sites.

### Current Blocks

- **Bluesky** - Embed Bluesky posts
- **Facebook** - Embed Facebook posts with privacy consent
- **Flickr** - Embed Flickr galleries
- **Instagram** - Embed Instagram posts
- **LinkedIn** - Embed LinkedIn posts
- **Pinterest** - Embed Pinterest pins
- **Soundcloud** - Embed Soundcloud tracks
- **Spotify** - Embed Spotify tracks and playlists
- **TikTok** - Embed TikTok videos
- **Tweet** - Embed tweets from X (formerly Twitter)

### Project Structure

- `packages/volto-social-blocks/src/components/Blocks/` - Block components organized by social platform
- `packages/volto-social-blocks/src/helpers/` - Validation and URL extraction utilities
- `packages/volto-social-blocks/src/config/blocks.ts` - Block registration and configuration
- `packages/volto-social-blocks/src/components/SocialContentWrapper/` - Privacy consent wrapper component

## TypeScript Guidelines

- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- Define proper types for block data, props, and schemas

## React Guidelines

- Use functional components with hooks
- Follow the React hooks rules (no conditional hooks)
- Use React.FC type for components with children
- Keep components small and focused
- Each block should have Edit and View (or DefaultView) components

## Volto Guidelines

- Always check [Volto documentation](https://6.docs.plone.org/volto/index.html) for best practices
- Consider @plone/volto to be 18.x or later
- Use `@plone/components` for common UI elements, and check the available components at the [Plone Components Storybook](https://plone-components.readthedocs.io/latest/?path=/docs/introduction--docs)
- For typing information always refer to `@plone/types` package
- Use Volto's built-in components and utilities when possible
- Follow the established pattern for social blocks in this project

## Social Block Patterns

When creating a new social media block, follow these patterns:

### File Structure

Each block should have:

- `Edit.tsx` - Edit component with URL/embed code input
- `View.tsx` or `DefaultView.tsx` - View component with iframe or embed display
- `schema.ts` - Block schema with field definitions
- `data.ts` - TypeScript type definitions for block data
- `DefaultView.stories.jsx` - Storybook stories for documentation

### Helper Functions

Create helper functions in `src/helpers/[Platform]/[Platform].ts`:

- URL validation functions (e.g., `isValidSpotifyId`)
- URL extraction/parsing functions (e.g., `extractTweetId`)
- Export all helpers in `src/helpers/index.ts`

### Privacy Consent

- Use `SocialContentWrapper` component to wrap embeds
- This provides GDPR-compliant privacy consent functionality
- The `CheckPrivacyConsent` component can be customized by implementers

### Block Registration

Register blocks in `src/config/blocks.ts`:

- Add to `BlocksConfigData` interface
- Configure in `install` function with proper icon, group, and category
- Use `group: 'social'` and `category: 'embed'`
- Set `sidebarTab: 1` for consistency

### Schema Patterns

Common schema fields:

- URL or embed code input field
- `align` - Alignment (center, left, right)
- `size` - Size options (s, m, l)
- `style` - Visual style options when applicable

## Internationalization (i18n)

- All code variables and identifiers must be in English
- All UI strings must be translatable using `react-intl`
- Use `defineMessages` and `useIntl` hooks
- No hardcoded text in components
- Add translations to `locales/` directory
- Run `make i18n` to update translation files

## Testing and Documentation

- Create Storybook stories for all visual components
- Stories should showcase different configurations
- Use meaningful arg types in stories
- Test blocks in both edit and view modes

## Loop Detection

- If repeating same pattern, STOP
- Reassess approach
- Check official documentation
- Check existing social blocks for patterns
- State: "We are in a loop, need different approach"

## No Shortcuts or Hacks

- Always use official APIs
- Follow framework best practices
- Follow established patterns in existing blocks
- No temporary workarounds
- No "quick fixes"
- Use proper TypeScript types

## Violations

If human says any of these, you have violated rules:

- "Have you checked docs?"
- "Are you guessing?"
- "Did that work?"
- "Are we in a loop?"
- "Look at the other blocks"

## Success Metrics

- Commands execute without error
- Features work as specified
- New blocks follow existing patterns
- Proper TypeScript types are used
- i18n is properly implemented
- Privacy consent wrapper is used
- System is maintainable
- Time invested yields results
- Human feels energized, not drained

## Failure Indicators

- Repeating same approaches
- Theoretical explanations without testing
- Claims of success without functionality
- Hours spent without progress
- Human dreading the next interaction
- Not following established block patterns
- Missing TypeScript types or i18n
