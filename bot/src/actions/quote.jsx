
import { Reply, Text ,  RequestContext} from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  static contextType = RequestContext
  static async botonicInit({ input, session, params, lastRoutePath }) {

    //random quotes API
    const url = 'https://api.quotable.io/random'
    const res = await fetch(url, {
      url: url,
      method: 'GET',
      params: {},
    })
    session.resp = await res.json()
  }
  render() {
    return (
      <Text>
        {this.context.session.resp.content}
      </Text>
    )
  }
}

