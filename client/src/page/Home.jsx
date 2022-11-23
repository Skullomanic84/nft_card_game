import React from 'react';
import { PageHOC } from '../components';
import { useGlobalContext } from '../context';



const Home = () => {

  const {} = useGlobalContext();
  return (
    <div>
      <h1 className="text-white text-xl">Hello From Home</h1>
    </div>
  );
};

export default PageHOC(
  Home,
  <>
  Create<br /> a new Battle 
  </>,
  <>
  Create your own battle and wait for other players to join you.
  </>
);