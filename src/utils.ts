export const imageLoader = ({ src = '', width = 0, quality = 100 }) => {
  return `img/layout/${src}?w=${width}&q=${quality || 75}`
}
