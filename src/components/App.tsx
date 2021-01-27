import React, { useEffect, useReducer, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

export type IMovie = {
  Poster: string,
  Title: string,
  Year: string
}

interface IState {
  loading: boolean,
  movies?: IMovie[],
  errorMessage?: null|string
}

type IAction = {
  type: string,
  payload?: IMovie[],
  error?: string
}

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours

const initialState: IState = {
  loading: true,
  movies: [],
  errorMessage: null
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
} 

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {    
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.Search
      });
    });
  }, []);

  const search = (searchValue: string) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: jsonResponse.Error
        });
      }
    });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
      {loading && !errorMessage ? (
        <div className="loader">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>    
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <>
          <p className="App-intro">Некоторые популярные фильмы:</p>
          <div className="movies">
            {movies?.map((movie: IMovie, index: number) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))}
          </div>  
        </>
      )}
    </div>
  );
};

export default App;
