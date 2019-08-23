import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Icon, Typography } from '@material-ui/core'

import { setText } from '../actions'
import { ApplicationState } from '../reducer'

interface Props {
  text: string,
  dispatch: Dispatch
}

const HelloWorld = ({ text, dispatch }: Props) => {
  const toggleText = () => {
    const newText = text.length === 0 ? 'World' : ''

    dispatch(setText(newText))
  }

  return (
    <>
      <Typography variant='h1'>Hello {text}</Typography>
      <Button onClick={toggleText}>
        Click Me!
        <Icon>fingerprint</Icon>
      </Button>
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  text: state.text
})

export default connect(mapStateToProps)(HelloWorld)
