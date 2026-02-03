import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';
import { MEDIA_WIDTHS } from '../sharedWidths';

export type FlickrViewProps = {
  flickrId?: string;
  align?: string;
  size?: keyof typeof MEDIA_WIDTHS;
  className?: string;
};

const FlickrView = ({
  flickrId,
  align = 'center',
  size = 'l',
  className,
}: FlickrViewProps) => {
  const linkText = 'View post on Flickr';
  const width = MEDIA_WIDTHS[size] ?? MEDIA_WIDTHS.l;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const canParse =
    typeof window !== 'undefined' && typeof DOMParser !== 'undefined';
  const galleryData = canParse
    ? new DOMParser().parseFromString(flickrId ?? '', 'text/html')
    : undefined;

  const scriptSrc = '//embedr.flickr.com/assets/client-code.js';

  const embedAspectRatio = useMemo(() => {
    const img = galleryData?.images?.[0];
    if (!img) return 3 / 4;

    const widthAttr = Number(img.getAttribute?.('width') ?? img.width);
    const heightAttr = Number(img.getAttribute?.('height') ?? img.height);

    if (Number.isFinite(widthAttr) && Number.isFinite(heightAttr)) {
      if (widthAttr > 0 && heightAttr > 0) return heightAttr / widthAttr;
    }

    return 3 / 4;
  }, [galleryData]);

  const syncInjectedIframeSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = container.querySelector<HTMLIFrameElement>('iframe');
    if (!iframe) return;

    const containerWidth = container.clientWidth;
    if (!containerWidth) return;

    const newHeight = Math.round(containerWidth * embedAspectRatio);
    iframe.style.width = '100%';
    iframe.style.maxWidth = '100%';
    iframe.style.height = `${newHeight}px`;
    iframe.setAttribute('height', String(newHeight));
  }, [embedAspectRatio]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const head = document.querySelector('head');
    if (!head) return;

    const SCRIPT_ID = 'volto-social-blocks-flickr-embed';
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = scriptSrc;
    script.async = true;
    head.appendChild(script);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    syncInjectedIframeSize();

    const container = containerRef.current;
    if (!container) return;

    if (typeof ResizeObserver === 'undefined') {
      const onResize = () => syncInjectedIframeSize();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    const observer = new ResizeObserver(() => syncInjectedIframeSize());
    observer.observe(container);

    return () => observer.disconnect();
  }, [syncInjectedIframeSize, flickrId, width]);

  return flickrId ? (
    <SocialContentWrapper
      align={align}
      tool="flickr"
      url={flickrId}
      linkText={linkText}
      className={className}
    >
      <div ref={containerRef} style={{ width, maxWidth: '100%' }}>
        <figure className="flickr-content">
          <a
            data-flickr-embed={true}
            data-footer={galleryData?.links?.[0]?.dataset?.footer}
            data-header={galleryData?.links?.[0]?.dataset?.header}
            href={galleryData?.links?.[0]?.href ?? ''}
            title={galleryData?.links?.[0]?.title ?? ''}
          >
            <img
              src={galleryData?.images?.[0]?.src}
              width="100%"
              height="auto"
              alt={galleryData?.images?.[0]?.alt ?? ''}
              style={{ display: 'block' }}
            />
          </a>
        </figure>
      </div>
    </SocialContentWrapper>
  ) : null;
};

export default FlickrView;
