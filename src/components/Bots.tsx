import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import { array } from 'prop-types';

import BotCard from './BotCard';

import '../styles/bots.scss';

const Bots = () => {
  const [bots, updateBots] = useState([]);

  // Cool stuff
  useEffect(() => {
    async function getBots() {
      const botsList = await axios.get(`https://telebot.glitch.me/`); // Yeah this fetches bots from the sheet, correct!
      const onlyBots = botsList.data.filter((bot: string[]) => bot.length > 1);
      const sections = botsList.data.filter(
        (bot: string[]) => bot.length == 1
      );
      console.log(onlyBots, sections)
      updateBots(onlyBots);
    }
    getBots();
  }, [])
  
  return (
    <div>
      {bots.length ? (
        <div className="bots">
          {bots.map((bot: any) => {
            // if(bot.length == 1) return <h2>{bot[0]}<br /></h2>
            return (
              <BotCard key={bot[0]} bot={bot} />
            );
          })}
        </div>
      ) : (
        <div className="loader-wrap">
          <Loader type="Plane" color="#00BFFF" height="100" width="100" />
        </div>
      )}
    </div>
  );
}

export default Bots;
