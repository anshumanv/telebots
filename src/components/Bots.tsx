import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'card-vibes';
import { FaReddit, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import Loader from "react-loader-spinner";

import { array } from 'prop-types';

import '../styles/bots.scss';

const Bots = (props: object) => {
  
  const [bots, updateBots] = useState([]);

  // Cool stuff
  useEffect(() => {
    async function getBots() {
      const botsList = await axios.get(`https://telebot.glitch.me/`); // Yeah this fetches bots from the sheet, correct!
      const onlyBots = botsList.data.filter((bot: string[]) => bot.length > 1)
      console.log(onlyBots)
      updateBots(onlyBots);
    }
    getBots();
  }, [])
  
  return (
    <div>
      {bots.length ? (
        <div className="bots">
          {bots.map((bot: any) => {
            return (
              <Card
                className="bots__card"
                // style={{ background: "#282c34", color: "white" }}
              >
                <div className="bots__card__header">
                  <h2 className="bots__card__header__name">{bot[0]}</h2>
                </div>
                <div className="bots__card__body">
                  <div className="bots__card__body__desc">
                    <p>{bot[1] || ""}</p>
                  </div>
                  <div className="bots__card__body__link">
                    👉 &nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={bot[2] || ""}
                      title={`Use ${bot[0]} here`}
                    >
                      <FaTelegramPlane />
                    </a>
                  </div>
                  <div className="bots__card__body__maintainer">
                    Maintainer:
                    <span>
                      <FaReddit />
                    </span>
                    <span>
                      <FaTelegram />
                    </span>
                    {/* {bot[3] || ""} */}
                  </div>
                </div>
              </Card>
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
