import React, { useEffect } from 'react';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

export type FlickrViewProps = {
  flickrId?: string;
  align?: string;
  className?: string;
};

const FlickrView = ({
  flickrId,
  align = 'center',
  className,
}: FlickrViewProps) => {
  const linkText = 'View post on Flickr';

  const canParse =
    typeof window !== 'undefined' && typeof DOMParser !== 'undefined';
  const galleryData = canParse
    ? new DOMParser().parseFromString(flickrId ?? '', 'text/html')
    : undefined;

  const scriptSrc = '//embedr.flickr.com/assets/client-code.js';

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

  return flickrId ? (
    <SocialContentWrapper
      align={align}
      tool="flickr"
      url={flickrId}
      linkText={linkText}
      className={className}
    >
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
            alt={galleryData?.images?.[0]?.alt ?? ''}
          />
        </a>
      </figure>
    </SocialContentWrapper>
  ) : null;
};

export default FlickrView;
