import { combineReducers } from '@reduxjs/toolkit'

import characters from './Favorite/CharacterSlice'

import likes from './Likes/LikesSlice'

export const rootReducer = combineReducers({
  characters,
  likes,
})
