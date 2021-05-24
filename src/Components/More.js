import React, {useState, useEffect} from 'react';
import {APIKey} from "../App";

export default function More({retrieveNews, setTitle, setSource, loadMore, title, setIsTopNews}) {

    let [sources, setSources] = useState([]);

    function retrieveSources() {
        let sourcesURL = `https://nomoreparties.co/news/v2/everything?apiKey=${APIKey}&language=en`;

        fetch(sourcesURL).then((res) => {
            return res.json();
        }).then((data) => {
            setSources(data.sources)
        });
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && title.trim()) {
            retrieveNews();
        }
    }

    useEffect(() => {
        retrieveSources()
    }, []);

    return (
      <section className="cover">
          <div className="cover__content">
              <h1 className="cover__title">Что в мире творится?</h1>
              <p className="cover__paragraph">Введите в поиске любую тему и узнайте актуальные новости</p>
          </div>
          <div className="form" noValidate>
              <input className="form__input" placeholder="Введите тему новости" required onKeyDown={handleKeyDown}
                     onChange={event => setTitle(event.target.value)}/>
                  <span className="form__error"></span>
                  <button type="submit" className="form__button" onClick={retrieveNews} disabled={!title || !title.trim()}>Искать</button>
          </div>
      </section>
    )
}