import { Badge, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { SearchInputStyled } from './SearchInputStyled'
import { useAppSelector } from '../../store/modules/types-hooks'

interface InputProps {
  value: string
  onChanges: any
}

const SearchInput: React.FC<InputProps> = ({ value, onChanges }) => {
  const [openx, setOpenx] = React.useState(false)
  const favoritos = useAppSelector((state) => state.likes.favoritos)
  const qtdLikes = useAppSelector((state) => state.likes.contador)

  function handleChange(event: any) {
    onChanges(event.target.value)
  }

  const handleClickOpen = () => {
    setOpenx(true)
  }

  /*   const handleClose = () => {
    setOpenx(false)
  } */

  return (
    <SearchInputStyled>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Busque seu herói favorito"
      />
      <Button
        variant="contained"
        sx={{ borderRadius: 3, fontFamily: 'Marvel', px: 2, py: 0.5 }}
      >
        <Typography>Meus Favoritos</Typography>
        <IconButton aria-label="add to favorites" onClick={handleClickOpen}>
          <Badge badgeContent={qtdLikes} color="secondary">
            <FavoriteIcon
              sx={{ fontSize: 30, color: 'white' }}
              className="animation"
            />
          </Badge>
        </IconButton>
      </Button>
    </SearchInputStyled>
  )
}

export default SearchInput
