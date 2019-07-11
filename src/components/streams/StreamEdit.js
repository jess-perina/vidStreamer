import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    console.log(this.props.stream)
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        {this.props.stream.title}
        <br />
        {this.props.stream.description}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)
