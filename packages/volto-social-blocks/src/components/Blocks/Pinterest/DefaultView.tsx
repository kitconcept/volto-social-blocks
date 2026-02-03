import React, { useEffect, useMemo, useRef } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { POST_WIDTHS } from '../sharedWidths';

export type PinterestViewProps = {
  pinterestUrl?: string;
  align?: string;
  size?: keyof typeof POST_WIDTHS;
  className?: string;
};

const PinterestView = ({
  pinterestUrl,
  align = 'center',
  size = 'l',
  className,
}: PinterestViewProps) => {
  const linkText = 'View pin on Pinterest';

  const embedRef = useRef<HTMLDivElement | null>(null);

  const pinWidth = useMemo(() => {
    // Pinterest widget supports small/medium/large presets
    if (size === 's') return 'small';
    if (size === 'm') return 'medium';
    return 'large';
  }, [size]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!pinterestUrl) return;

    const host = embedRef.current;
    if (!host) return;

    host.innerHTML = '';

    const anchor = document.createElement('a');
    anchor.setAttribute('data-pin-do', 'embedPin');
    anchor.setAttribute('data-pin-width', pinWidth);
    anchor.href = pinterestUrl;
    anchor.textContent = linkText;
    host.appendChild(anchor);

    const head = document.querySelector('head');
    if (!head) return;

    const SCRIPT_ID = 'volto-social-blocks-pinterest-embed';

    const build = () => {
      const pinUtils = (window as any)?.PinUtils;
      if (pinUtils?.build) pinUtils.build();
    };

    const existing = document.getElementById(
      SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (existing) {
      setTimeout(build, 0);
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = 'https://assets.pinterest.com/js/pinit.js';
    script.onload = build;
    head.appendChild(script);

    return () => {
      host.innerHTML = '';
    };
  }, [pinterestUrl, pinWidth]);

  return pinterestUrl ? (
    <SocialContentWrapper
      align={align}
      tool="pinterest"
      url={pinterestUrl}
      linkText={linkText}
      className={className}
    >
      <div className="social-embed-container" style={{ maxWidth: '100%' }}>
        <div ref={embedRef} />
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default PinterestView;
