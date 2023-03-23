import React from 'react';
import PropTypes from 'prop-types';
import SocialContentWrapper from '../../SocialContentWrapper/SocialContentWrapper';

const FlickrView = (props) => {
  const { flickrId, align } = props;
  const linkText = 'View post on Flickr';
  const parser = __CLIENT__ ? new DOMParser() : undefined;
  const galleryData = parser?.parseFromString(flickrId, 'text/html');
  const scriptSrc = '//embedr.flickr.com/assets/client-code.js';

  React.useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');

    script.setAttribute('src', scriptSrc);
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [scriptSrc]);

  return (
    flickrId && (
      <SocialContentWrapper
        align={align}
        tool="flickr"
        url={flickrId}
        linkText={linkText}
      >
        <figure className="flickr-content">
          <a
            data-flickr-embed={true}
            data-footer={galleryData?.links[0].dataset.footer}
            data-header={galleryData?.links[0].dataset.header}
            href={galleryData?.links[0].href ?? ''}
            title={galleryData?.links[0].title}
          >
            <img
              src={galleryData?.images[0].src}
              width="100%"
              alt={galleryData?.images[0].alt ?? ''}
            />
          </a>
        </figure>
      </SocialContentWrapper>
    )
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FlickrView.propTypes = {
  flickrId: PropTypes.string.isRequired,
  align: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
FlickrView.defaultProps = {
  align: 'center',
};

export default FlickrView;
