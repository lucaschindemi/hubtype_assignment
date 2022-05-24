import Carousel from './actions/carousel'
import Quote from './actions/quote'
import Words from './actions/words'

export const routes = [

  {
    path: 'quote',
    request: request => request.lastRoutePath == 'carousel'
     || request.lastRoutePath == 'quote' || request.lastRoutePath == 'words',
    action: Quote,
  },

  {
    path: 'carousel',
    type: /^.*$/,
    action: Carousel,
  },

  {
    path: 'words',
    action: Words,
  },
]
