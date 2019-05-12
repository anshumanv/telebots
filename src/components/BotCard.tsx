import React from 'react';
import Card from "card-vibes";
import { FaReddit, FaTelegram, FaTelegramPlane, FaGlobe } from "react-icons/fa";


export interface Props {
  bot: string[]
}

const BotCard = ({ bot }: Props) => {

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
          Maintainer(s):
          {bot[3] !== "-" && bot[3] !== "Unknown" && (
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://reddit.com/user${bot[3]}`}
                title={`${bot[3]}`}
              >
                <FaReddit />
              </a>
            </span>
          )}
          {bot[4] && bot[4] !== "-" && (
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={bot[4] || ""}
                title={`https://telegram.me/${bot[4]}`}
              >
                <FaTelegram />
              </a>
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

export default BotCard;
