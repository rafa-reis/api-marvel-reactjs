import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import api from '../../services/api'
import {
  ButtonMore,
  CardItem,
  CardList,
  CharacterStyled,
} from './CharactesStyled'
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks'
import {
  getAll,
  selectAll,
  upsertOne,
} from '../../store/modules/Favorite/CharacterSlice'
import { adicionaUm, removeUm } from '../../store/modules/Likes/LikesSlice'

export interface ResponseData {
  id: string
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  favorite: boolean
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([])
  /* console.log('aqui characters ', characters) */

  const dispatch = useAppDispatch()
  const charactersRedux = useAppSelector(selectAll)
  const charactersLoading = useAppSelector((state) => state.characters.loading)

  const ref = useRef(null)

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => setCharacters(response.data.data.results))
      .catch((erro) => console.log(erro))
  }, [])

  const handleFavorite = (
    id: any,
    favorite: boolean,
    character: ResponseData
  ) => {
    dispatch(upsertOne({ id, favorite: !favorite }))

    dispatch(!favorite ? adicionaUm(character) : removeUm(id))

    console.log(charactersRedux)
    console.log(favorite)
  }

  /* useEffect(() => {
    dispatch(getAll())
  }, []) */

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length
      /* console.log('aqui o offset', offset) */
      const response = await api.get('characters', {
        params: {
          offset,
        },
      })
      setCharacters([...characters, ...response.data.data.results])
    } catch (erro) {
      console.log(erro)
    }
  }, [characters])

  return (
    <CharacterStyled>
      <CardList>
        {characters.map((character) => {
          return (
            <CardItem key={character.id} thumbnail={character.thumbnail}>
              <div id="img">
                <p className="favorite">
                  <IconButton
                    ref={ref}
                    aria-label="add to favorites"
                    onClick={() =>
                      handleFavorite(
                        character.id,
                        character.favorite,
                        character
                      )
                    }
                  >
                    {character.favorite ? (
                      <FavoriteIcon color="error" />
                    ) : (
                      <FavoriteBorderIcon color="error" />
                    )}
                  </IconButton>
                </p>
              </div>
              <h2>{character.name}</h2>
              <p>
                {character.description !== ''
                  ? `${character.description}`
                  : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, dolor! Sed itaque dolorum fugit aut nobis quidem alias facere nostrum illo laborum iure perspiciatis quos ullam, nihil necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, deleniti! `}
              </p>
            </CardItem>
          )
        })}
      </CardList>
      <ButtonMore onClick={handleMore}>Mais</ButtonMore>
    </CharacterStyled>
  )
}

export default Characters
