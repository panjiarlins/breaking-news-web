/* eslint-disable no-underscore-dangle */
import './news-item';

class NewsList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set news(news) {
    this._news = news;
    this.render();
    console.log(news);
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._news.forEach((i) => {
      const newsItemElement = document.createElement('news-item');
      newsItemElement.news = i;
      this.shadowDOM.appendChild(newsItemElement);
    });
  }
}

customElements.define('news-list', NewsList);
