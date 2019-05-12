import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import { array } from 'prop-types';

import BotCard from './BotCard';

import '../styles/bots.scss';

const Bots = () => {
  const [bots, updateBots] = useState({});

  // Cool stuff
  useEffect(() => {
    async function getBots() {
      const botsList = await axios.get(`https://telebot.glitch.me/`); // Yeah this fetches bots from the sheet, correct!
      let sortedBots: any = {}, lastBot: string = '';
      botsList.data.forEach((bot: string[]) => {
        if(bot.length === 1) {
          sortedBots[bot[0]] = [];
          lastBot = bot[0];
        }
        else {
          sortedBots[lastBot].push(bot);
        }
      })
      updateBots(sortedBots);
      console.log(sortedBots)
    }
    getBots();
  }, [])
  
  return (
    <div>
      {Object.keys(bots).length ? (
        <div>
          {
            Object.keys(bots).map((key: string) => {
              return (
                <div className="section" key={key}>
                  <h2 className="section__title">{key}</h2>
                  <div className="bots">
                    {bots[key].map((bot: any) => {
                      return <BotCard key={bot[0]} bot={bot} />;
                    })}
                  </div>
                </div>
              );
            })
          }
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
