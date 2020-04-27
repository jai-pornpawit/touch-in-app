import React from 'react'
import styles from 'styled-components'

const ContainerComp = styles.div`
  max-width: 95%;
  width: 100%;
  margin: auto;
  transition: padding-left 0.3s ease-in;
  padding: 5px;

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 10px;
    padding-left: ${(props) => (props.showMenu ? 'calc(20% + 10px)' : '10px')};
  }
`

const Container = ({ showMenu, children }) => {
  return <ContainerComp showMenu={showMenu}>{children}</ContainerComp>
}

export default Container
