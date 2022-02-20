import React, { useState } from "react";
import "./Links.css";

function Links() {
  const [button, setButton] = useState(false);
  const file = require("../../assets/Git.pdf");

  console.log(file);

  let isSubscribe = button;

  console.log(isSubscribe);

  function subscribe(e) {
    e.preventDefault();
    window.open("https://instagram.com/mikie__mac?utm_medium=copy_link");
    setButton(true);
  }

  return (
    <div>
      <div>
        <h4>Что бы скачять пак подпишитесь на автора 🙏</h4>
        <p className="text">Скачивание станет доступно после подписки</p>
        <div className="buttons">
          <a href="" onClick={subscribe} className="subscribe-button grow">
            Подписаться
          </a>
          {!isSubscribe ? (
            <a className="download-button-disabled grow">Скачать</a>
          ) : (
            <a href={file} download className="download-button grow">
              Скачать
            </a>
          )}
        </div>

        <div class="tooltip sub-title">
          ПОДДЕРЖАТЬ АВТОРА
          <span class="tooltiptext">5375 4115 0274 8846 ❤️</span>
        </div>
      </div>
    </div>
  );
}

export default Links;
