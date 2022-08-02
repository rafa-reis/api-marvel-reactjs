import { IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Characters, {
  ResponseData,
} from '../../components/characters/Characters'
import { CardItem, CardList } from '../../components/characters/CharactesStyled'
import Header from '../../components/header/Header'
import SearchInput from '../../components/search/SearchInput'
import api from '../../services/api'
import {
  selectAll,
  upsertOne,
} from '../../store/modules/Favorite/CharacterSlice'
import { adicionaUm, removeUm } from '../../store/modules/Likes/LikesSlice'
import { useAppDispatch, useAppSelector } from '../../store/modules/types-hooks'

export const Home: React.FC = () => {
  const [info, setInfo] = useState<ResponseData[]>()
  const [text, setText] = useState('')

  useEffect(() => {
    if (text) {
      api
        .get(`characters?nameStartsWith=${text}`)
        .then((response) => setInfo(response.data.data.results))
        .catch((erro) => console.log(erro))
    }
  }, [text])

  const dispatch = useAppDispatch()
  const charactersRedux = useAppSelector(selectAll)
  const charactersLoading = useAppSelector((state) => state.characters.loading)
  const ref = useRef(null)

  const handleFavorite = (
    id: any,
    favorite: boolean,
    character: ResponseData
  ) => {
    dispatch(upsertOne({ id, favorite: !favorite }))

    dispatch(favorite !== true ? adicionaUm(character) : removeUm(id))

    console.log(charactersRedux)
  }

  return (
    <>
      <Header />
      <SearchInput value={text} onChanges={(str: any) => setText(str)} />
      {info && (
        <CardList>
          {info.map((character) => (
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
                      <FavoriteBorderIcon color="error" />
                    ) : (
                      <FavoriteIcon color="error" />
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
          ))}
        </CardList>
      )}
      <Characters />
    </>
  )
}
