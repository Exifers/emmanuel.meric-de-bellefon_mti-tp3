import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginLayout from '../layouts/authentication/Login'

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
})

export const withLogin = WrappedComponent => connect(mapStateToProps)(class extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return (
        <LoginLayout {...this.props}>{this.props.children}</LoginLayout>
      )
    }
    return (
      <WrappedComponent {...this.props}>{this.props.children}</WrappedComponent>
    )
  }
})
