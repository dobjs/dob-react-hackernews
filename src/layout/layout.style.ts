import styled from 'styled-components'

export const Container = styled.div`

`

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 100;
  height: 48px;
  padding: 0 100px;
  box-sizing: border-box;
  background-image: linear-gradient(120deg, #155799, #159957);
  a {
    color: white;
    text-decoration: none;
    margin: 0 .4rem;
    height: 100%;
    display: flex;
    align-items: center;
    border-top: 4px solid transparent;

    &.active {
      border-top: 4px solid white;
    }
  }
`

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`

export const NavRight = styled.div`
  display: flex;
`

export const Logo = styled.img`
  height: 30px;
  margin-right: .4rem;
`