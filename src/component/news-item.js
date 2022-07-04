/* eslint-disable no-underscore-dangle */
class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set news(news) {
    this._news = news;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            .card {
              background-color: #FFF8CD;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              border-radius: 40px;
              margin-top: 20px;
              padding: 20px;
              width: 100%;
            }

            section > img {
              border-top-left-radius: 40px;
              border-top-right-radius: 40px;
            }
          
            section p {
                margin: 0px 0px 10px 0px;
            }

            .fit-image {
              width: 100%;
              max-height: 300px;
              object-fit: cover;
              object-position: center;
            }
          
            .title {
                font-size: 2em;
            }
        </style>
        <article class="card">
          <section>
              <img src="${this._news.thumbnail}" alt="${this._news.title}" class="fit-image">
              <p class="title">${this._news.title}</p>
              <p>Waktu: ${this._news.pubDate}</p>
          </section>
          <hr>
          <section>
              <p>${this._news.description} <a href="${this._news.link}" target="_blank"><b> ....(Baca Selengkapnya)</b></a></p>
          </section>
        </article>
        `;
  }
}

customElements.define('news-item', NewsItem);
