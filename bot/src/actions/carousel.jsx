import {
  Button,
  Carousel,
  Element,
  Pic,
  RequestContext,
  Subtitle,
  Text,
  Title,
  Reply,
} from '@botonic/react'
import fetch from 'isomorphic-fetch'
import React from 'react'

export default class extends React.Component {
  static contextType = RequestContext
  static async botonicInit({ input, session, params, lastRoutePath }) {
    // GoT API get houses with words
    const url = 'https://www.anapioficeandfire.com/api/houses?hasWords=true'
    const res = await fetch(url, {
      url: url,
      method: 'GET',
      params: {},
    })
    session.resp = await res.json()
  }
  
  render() {
    return (
      <div>
      <Text>GoT dynamic Carousel</Text>
      <Carousel>
        {this.context.session.resp.map((e, i) => (
          <Element key={e.name}>
            <Title>{e.name}</Title>
            <Button path={"words?words=" + e.words}>Show House Words</Button>
          </Element>
        ))}
      </Carousel>
      </div>
    )
    
  }
}
