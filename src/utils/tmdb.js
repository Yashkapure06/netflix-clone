// import path from 'path';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const ImageSizes = {
  poster: 'w500',
  card: 'w300',
  backdrop: 'w1280',
};

export function generateImageUrl(imagePath, size) {
  return `${IMAGE_BASE_URL}/${size}${imagePath}`;
  // return path.join(IMAGE_BASE_URL, size, imagePath);
}

export function filterPreferredResults(results) {
  return results.filter((o) => ['movie', 'tv'].includes(o.media_type));
}
