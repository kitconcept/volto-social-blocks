import React from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { buildTwitchEmbedUrl, extractTwitchEmbedInfo } from '../../../helpers';
import { MEDIA_WIDTHS } from '../sharedWidths';

export type TwitchViewProps = {
  twitchUrl?: string;
  showChat?: boolean;
  align?: string;
  size?: keyof typeof MEDIA_WIDTHS;
  className?: string;
};

const TwitchView = ({
  twitchUrl,
  showChat = false,
  align = 'center',
  size = 'l',
  className,
}: TwitchViewProps) => {
  const embedInfo = extractTwitchEmbedInfo(twitchUrl);
  const parent =
    typeof window !== 'undefined' ? window.location.hostname : undefined;
  const embedUrl = buildTwitchEmbedUrl(twitchUrl, parent);
  const width = MEDIA_WIDTHS[size] ?? MEDIA_WIDTHS.l;
  const linkText = 'Watch on Twitch';

  // Chat is only available for channels
  const showingChat = showChat && embedInfo.type === 'channel';

  return embedUrl ? (
    <SocialContentWrapper
      align={align}
      tool="twitch"
      url={twitchUrl || ''}
      linkText={linkText}
      className={className}
    >
      <div style={{ width, maxWidth: '100%' }}>
        <div
          style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
        >
          <iframe
            src={embedUrl}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
            allowFullScreen
            title={'Twitch Player'}
            loading={'lazy'}
          />
        </div>
        {showingChat && embedInfo.id && parent && (
          <div style={{ marginTop: '10px', width: '100%', height: '420px' }}>
            <iframe
              src={`https://www.twitch.tv/embed/${embedInfo.id}/chat?parent=${parent}`}
              style={{ width: '100%', height: '100%' }}
              title={'Twitch Chat'}
              loading={'lazy'}
            />
          </div>
        )}
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default TwitchView;
