window.onload = () => {
  'use strict';

  if ('serviceWorkerContainer' in navigator) {
    navigator.serviceWorkerContainer
             .register('./sw.js');
  }
}
