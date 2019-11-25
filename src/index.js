import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
<<<<<<< HEAD
import registerServiceWorker from './sw';
=======
>>>>>>> d249bf853685ae0946aad1ed5d9e6920448a30d3

connect.send('VKWebAppInit');
<<<<<<< HEAD

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
registerServiceWorker();

=======
>>>>>>> d249bf853685ae0946aad1ed5d9e6920448a30d3
ReactDOM.render(<App />, document.getElementById('root'));
