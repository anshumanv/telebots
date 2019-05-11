import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { array } from 'prop-types';

const Bots = (props: object) => {
  
  const [bots, updateBots] = useState([]);

  useEffect(() => {
    async function getBots() {
      const botsList = await axios.get(`https://telebot.glitch.me/`);
      const onlyBots = botsList.data.filter((bot: string[]) => bot.length > 1)
      console.log(onlyBots)
      updateBots(onlyBots);
    }
    getBots();
  }, [])
  
  return (
    <div className="bots-container">
      {bots.map((bot:any) => {
        return (
          <div className="card-container">
            <div className="header">
              <div className="name">{bot[0]}</div>
            </div>
            <div className="body">
              <div className="desc">{bot[1] || ""}</div>
              <div className="link">{bot[2] || ""}</div>
              <div className="maintainer">
                {bot[3] || ""}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Bots;
