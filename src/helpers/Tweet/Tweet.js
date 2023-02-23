export const extractTweetId = (value) => {
  const regex = [/\/status\/(\d+)/g, /^(\d+)$/g];
  let match;
  for (const re of regex) {
    match = re.exec(value);
    if (match) {
      return match[match.length - 1];
    }
  }
};
