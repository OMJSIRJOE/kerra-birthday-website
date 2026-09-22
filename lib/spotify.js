export function getSpotifyEmbedUrl(url) {
  if (!url || !url.includes("spotify.com")) return null;
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) {
      return `https://open.spotify.com/embed/${parts[0]}/${parts[1]}${parsed.search}`;
    }
  } catch {
    return null;
  }
  return null;
}
