import React, { Component } from 'react'
import ManagementLayout from '../../layout/ManagementLayout';

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <ManagementLayout>

      </ManagementLayout>
    )
  }
}
