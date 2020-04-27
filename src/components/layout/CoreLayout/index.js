import React from 'react'
import PropTypes from 'prop-types'

import Menu from 'components/nav/Menu/Menu'
import Container from 'components/layout/Container'

import './CoreLayout.scss'

class CoreLayout extends React.Component {
  state = {
    showMenu: false,
  }

  setShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { showMenu } = this.state

    return (
      <div id='corelayout'>
        <nav className='layout-header'>
          <Menu visibility={showMenu} setVisibility={this.setShowMenu} />
        </nav>

        <Container showMenu={showMenu}>{this.props.children}</Container>

        <footer className='layout-footer'></footer>
      </div>
    )
  }
}

CoreLayout.defaultProps = {}

CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
