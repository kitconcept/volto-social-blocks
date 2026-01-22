export function extractTweetId(value?: string): string | undefined {
  if (!value) return undefined;

  const regexes = [/\/status\/(\d+)/i, /^(\d+)$/];
  for (const re of regexes) {
    const match = re.exec(value);
    if (match) {
      return match[match.length - 1];
    }
  }

  return undefined;
}

export function isValidTweetId(value?: string): boolean {
  return extractTweetId(value) !== undefined;
}
