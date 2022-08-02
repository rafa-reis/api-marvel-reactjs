import React from 'react'
import styled from 'styled-components'

interface ThumbnailData {
  thumbnail: {
    path: string
    extension: string
  }
}

export const CharacterStyled = styled.main`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`
const urlImg = (props: ThumbnailData) =>
  `${props.thumbnail.path}.${props.thumbnail.extension}`

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardItem = styled.div`
  background-color: #ee171f;
  color: white;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  h2 {
    text-transform: uppercase;
    padding: 8px;
    text-align: justify;
    background-color: #202020;
    color: #f1f1f1;
  }

  .favorite {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-self: center;
    position: relative;
    top: 0;
    left: 250px;
    background-color: #202020;
    width: 50px;
    height: 50px;
    border-radius: 0 0 0 10px;
  }

  p {
    padding: 8px;
    text-align: justify;
  }

  div#img {
    height: 400px;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: all 1s;
  }

  &:hover {
    div#img {
      height: 200px;
    }

    background: #ee171f;
  }
`

export const ButtonMore = styled.div`
  background-color: #f1f1f1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  cursor: pointer;
  margin: 20px auto;
  border-radius: 5px;
  padding: 0 80px;

  &:hover {
    background: #ee171f;
    color: white;
  }
`
