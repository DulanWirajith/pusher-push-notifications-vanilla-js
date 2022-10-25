window.onload = () => {
  'use strict';

  if ('serviceWorkerContainer' in navigator) {
    navigator.serviceWorkerContainer
             .register('https://dulanwirajith.github.io/pusher-push-notifications-vanilla-js/sw.js');
  }
}
