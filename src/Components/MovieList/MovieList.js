import React from 'react'
import Movie from '../Movie/Movie'
import './movieList.css'

const MovieList = ({movies}) => {
  return (
    <div className='movieList'>
      {movies.length? movies.map((el) =>(<Movie key={el.id} el={el}/>)):<h2>! لا يوجد أفلام  لعرضها </h2>}
    </div>
  )
}

export default MovieList