import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { useNavigate } from 'react-router-dom';


const GlobalContext = createContext();


export const GlobalContextProvider = ({ children }) =>{

  //interact and connect with the smart contract
  const [walletAddress, setWallAddress] = useState('');
  const updateCurrentWalletAddress = async () =>{
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    console.log(accounts);
  };

  useEffect(() => {
    updateCurrentWalletAddress();
  }, []);

  useEffect(() => {
    const setSmartContractAndProvider = async () => {
      const web3Modal = new Web3Modal();
      const connect = await web3Modal.connect();
      const newProvider = new ethers.providers.web3Provider(connection);
      const signer = newProvider.signer();
      const newContract = new ethers.Contract();  

    }

    setSmartContractAndProvider();
  }, []);
  
  

  return (
    <GlobalContext.Provider value={{}}>

      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);