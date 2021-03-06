import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CopyButton extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)

    this.state = {
      tooltip: this.props.tooltip
    }
  }

  render () {
    return (
      <span
        title={this.state.tooltip}
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
      >
        Copy
      </span>
    )
  }

  onClick (e) {
    this.setState({ tooltip: 'Copied' })

    this.props.onCopyClick(e)
  }

  onMouseOver (e) {
    this.setState({ tooltip: this.props.tooltip })
  }
}

CopyButton.propTypes = {
  onCopyClick: PropTypes.func,
  tooltip: PropTypes.string
}
