import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'


class Landing extends Component {
  render() {
    return (
      <Template>
        <Button variant="contained">
          Hello World
        </Button>
      </Template>
    )
  }
}


export default Landing
