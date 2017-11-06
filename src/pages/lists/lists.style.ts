import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 120px;
`

export const Loading = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  color: #ddd;
`

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 15px;
`

export const ListViewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  color: #178b67;
`

export const ListRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ListDescription = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 2px;
`

export const Link = styled.a`

`

export const ListTitle = styled.a`
  text-decoration: none;
  color: #167082;
  transition: color .1s;
  &:hover {
    color: #298da0;
  }
`

export const ListDomain = styled.div`
  margin-left: 8px;
  font-size: 12px;
  color: #666;
`