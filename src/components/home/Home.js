import React from 'react';
import '../home/home.css';
import News from '../news/News';

const Home = (props) => {
  return (
    <div>
      <News />
      <h2>{props.name ? `Wellcome - ${props.name}` : 'Login Please'}</h2>
    </div>
  );
};

export default Home;
