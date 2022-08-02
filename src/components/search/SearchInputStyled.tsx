import * as React from 'react'
import styled from 'styled-components'

export const SearchInputStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 170px;

  input {
    width: 400px;
    height: 50px;
    border-radius: 5px;
    font-size: 22px;
    border: 0.5px solid lightgray;
    padding-left: 7px;
  }
  .animation {
    animation: pulsate-bck 0.5s ease-in-out infinite both;

    @keyframes pulsate-bck {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
`
