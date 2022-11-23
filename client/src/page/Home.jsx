import React, { useState } from 'react';
import { PageHOC, CustomInput } from '../components';
import { useGlobalContext } from '../context';



const Home = () => {

  const { contracts, walletAddress, } = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  return (
    <div className='flex flex-col'>
      <CustomInput 
      label="Name"
      placeholder="Enter your name"
      value={playerName}
      handleValueChange={setPlayerName}/>

      <CustomButton
      title="Register"
      handleClick={() =>{}}
      restType="mt-6" />

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