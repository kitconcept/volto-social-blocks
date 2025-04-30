export const extractLinkedInPostURL = (value) => {
  const regex = [
    /(?:(?:https):\/\/)?(?:www.)?(?:linkedin.com)\/embed\/feed\/update\/([^?]+)\??/gim,
  ];
  let match;
  for (const re of regex) {
    match = re.exec(value);
    if (match) {
      return `https://www.linkedin.com/embed/feed/update/${match[match.length - 1]}`;
    }
  }
  return null;
};

export const isValidLinkedInPostURL = (value) => {
  const url = extractLinkedInPostURL(value);
  return url === null ? false : true;
};
