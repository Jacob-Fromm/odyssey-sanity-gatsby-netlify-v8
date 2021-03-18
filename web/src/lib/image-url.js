import clientConfig from '../../client-config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(clientConfig.sanity)

export function urlFor (source) {
  return builder.image(source)
}
