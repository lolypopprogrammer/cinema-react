import React from 'react';

interface IProps {
  title: string
}

const Header = (props: IProps) => {
  return (
    <header className="App-header">
      <h2>{props.title}</h2>
    </header>
  );
}

export default Header;