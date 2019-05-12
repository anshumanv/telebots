import React from 'react';
import { FaRedditAlien, FaGithub, FaFileExcel } from "react-icons/fa";

import '../styles/footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">🤖 telebots</div>
      <div className="footer__links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/anshumanv/telebots"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.reddit.com/r/TelegramBots/"
          title="Reddit"
        >
          <FaRedditAlien />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1uQP3f2bWuPapTn_1FUcL67jW9MwLzSjysji39pmyUxY/"
          title="Bots Sheet"
        >
          <FaFileExcel />
        </a>
      </div>
    </div>
  );
}

export default Footer;
