import React from "react";

export default function LoaderSpinner() {
    return (
      <section className="search-result" id="preloader">
          <div className="preloader"></div>
          <h2 className="search-result__paragraph">Идет поиск новостей...</h2>
      </section>
    )
}