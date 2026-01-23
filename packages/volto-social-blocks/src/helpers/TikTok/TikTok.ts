export function isValidTikTokUrl(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;

  const re =
    /^(?:https?:\/\/)?(?:(?:www|m)\.)?(?:tiktok\.com\/(?:@[^\s/]+\/video\/\d+|t\/[^\s/]+)|vm\.tiktok\.com\/[^\s/]+|vt\.tiktok\.com\/[^\s/]+)/i;

  return re.test(value.trim());
}
