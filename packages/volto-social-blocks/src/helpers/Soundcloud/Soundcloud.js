const soundcloudPrefix = 'https://api.soundcloud.com';

export const extractSoundCloudId = (value) => {
  // Extract the api url from the iframe
  const pattern = /api\.soundcloud\.com\/([^"]*)/g;
  let match = pattern.exec(value);
  if (match) {
    return `${soundcloudPrefix}/${match[1]}`;
  }
  return '';
};

export const isValidSoundcloudId = (value) => {
  // Check if we have a value starting with the correct prefix
  return value ? value.startsWith(soundcloudPrefix) : false;
};
