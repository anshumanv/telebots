import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'card-vibes';
import { array } from 'prop-types';

import './style.scss';

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
    <div className="bots">
      {bots.map((bot:any) => {
        return (
          <Card className="bots__card">
            <div className="bots__card__header">
              <div className="bots__card__header__name">{bot[0]}</div>
            </div>
            <div className="body__card__body">
              <div className="body__card__body_desc">
                {bot[1] || ""}
              </div>
              <div className="body__card__body_link">
                {bot[2] || ""}
              </div>
              <div className="body__card__body_maintainer">
                {bot[3] || ""}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  )
}

export default Bots;
