import React from 'react'
import PropTypes from 'prop-types'

import Container from 'components/layout/Container'

import './Menu.scss'

class Menu extends React.Component {
  render() {
    const { visibility, setVisibility } = this.props

    return (
      <>
        <div className='menubar'>
          <Container>
            <span id='roundButton' onClick={setVisibility}>
              <svg width='30' height='30'>
                <path d='M0,5 30,5' stroke='#fff' strokeWidth='5' />
                <path d='M0,14 30,14' stroke='#fff' strokeWidth='5' />
                <path d='M0,23 30,23' stroke='#fff' strokeWidth='5' />
              </svg>
            </span>
          </Container>
        </div>

        <div id='flyoutMenu' className={visibility ? 'show' : 'hide'}>
          <div className='lf'>
            <h2>
              <p href='#'>หน้าหลัก</p>
            </h2>
            <h2>
              <p href='#'>โปรไฟล์</p>
            </h2>
            <h2>
              <p href='#'>เช็คอิน</p>
            </h2>
            <h2>
              <p href='#'>ออกจากระบบ</p>
            </h2>
          </div>
        </div>
      </>
    )
  }
}

Menu.defaultProps = {
  visibility: false,
  setVisibility: () => {},
}

Menu.propTypes = {
  visibility: PropTypes.bool,
  setVisibility: PropTypes.func,
}

export default Menu
