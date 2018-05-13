// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { withStyles } from 'material-ui/styles'
import styles from './styles'

// App Imports
import Header from '../Header'
import Footer from '../Footer'

// Component
class Layout extends PureComponent {
  render() {
    const { children, classes } = this.props

    return (
      <div className={classes.root}>
        <Header />

        { children }

        <Footer />
      </div>
    )
  }
}

// Component Properties
Layout.propTypes = {
  common: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

// Component State
function commonState(state) {
  return {
    common: state.common
  }
}

export default connect(commonState, {})(withStyles(styles)(Layout))
