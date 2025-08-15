import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: '6d44812a205982ca2125', 
  cluster: 'mt1',   
  forceTLS: false,  
  encrypted: false, 
});

console.log('Écoute sur le canal assainissement...');

export default echo;
