/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
import 'regenerator-runtime';
import './style.css';
import $ from 'jquery';
import imageLogo from './assets/breakingnews.png';
import imageDev from './assets/person-icon.png';
import './component/news-list';

function main() {
  const baseUrl = 'https://api-berita-indonesia.vercel.app';

  const getBook = async (category = 'terbaru') => {
    try {
      const response = await fetch(`${baseUrl}/cnn/${category}`);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        const content = document.querySelector('news-list');
        content.news = responseJson.data.posts;
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#image1').setAttribute('src', imageLogo);
    document.querySelector('#image2').setAttribute('src', imageLogo);
    document.querySelector('#image3').setAttribute('src', imageDev);

    $('#terbaru').on('click', () => {
      getBook('terbaru');
    });

    $('#nasional').on('click', () => {
      getBook('nasional');
    });

    $('#teknologi').on('click', () => {
      getBook('teknologi');
    });

    $('#olahraga').on('click', () => {
      getBook('olahraga');
    });

    $('#hiburan').on('click', () => {
      getBook('hiburan');
    });

    getBook();
  });

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };
}

const menu = document.querySelector('#category');
window.onscroll = () => {
  const headerOffsetHeight = document.querySelector('header').offsetHeight + 30;

  if (window.scrollY > headerOffsetHeight - 1 && window.scrollY <= headerOffsetHeight) {
    //
  } else if (window.scrollY > headerOffsetHeight) {
    menu.style.setProperty('border-top-left-radius', '0px');
    menu.style.setProperty('border-top-right-radius', '0px');
    menu.style.setProperty('border-bottom-right-radius', '40px');
    menu.style.setProperty('width', '70%');
  } else {
    menu.style.setProperty('border-top-left-radius', '40px');
    menu.style.setProperty('border-top-right-radius', '40px');
    menu.style.setProperty('border-bottom-right-radius', '0px');
    menu.style.setProperty('width', '100%');
  }
};

main();
