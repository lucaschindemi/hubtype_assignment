
import { Reply, Text ,  RequestContext} from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  static contextType = RequestContext
  static botonicInit({ input, session, params, lastRoutePath }) {
    //get house words
    session.resp = params.words
  }
  render() {
    return (
      <Text>
        {this.context.session.resp}
      </Text>
    )
  }
}
