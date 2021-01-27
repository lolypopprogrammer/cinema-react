import React, { useState } from 'react';
import { words } from "../bin/book";
import { random } from "../utils/random";

interface IProps {
  search: Function
}

const Search = (props: IProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  
  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.search(searchValue);
    // resetInputField();
  }

  const randomWordSearch = (e: React.MouseEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const searchValue = words[random(0, words.length)]; 
    setSearchValue(searchValue);
    props.search(searchValue);
  }

  const handleAnimating = (): void => {
    const animationFrame = document.querySelectorAll('.animation');
    animationFrame?.forEach((el) => el.classList.toggle('animating'));
  }

  return (
    <form className="search">
        <div className="animated-input">
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            onFocus={handleAnimating}
            onBlur={handleAnimating}
            type="text"
            className="enter-field"
          />
          <div className="animation"></div>
          <div className="revert animation"></div>
        </div>
        <input onClick={callSearchFunction} type="submit" value="ПОИСК" />
        <input onClick={randomWordSearch} type="submit" value="Мне повезет!" />
      </form>
  );
}

export default Search;