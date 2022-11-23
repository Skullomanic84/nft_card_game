import React from "react";
import { PageHOC } from "../components";

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello From CreateBattle</h1>
    </div>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Welcome to Avax Gods <br /> a web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate web3 Battle Card
    Game
  </>
);
