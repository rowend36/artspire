export default function externalLink(url) {
  return url && (url.startsWith("http") ? url : "https://" + url);
}
