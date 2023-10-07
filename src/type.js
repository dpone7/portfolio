'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 150,
})
  .pause(1000)
  .move(null, { to: 'END' })
  .delete()
  .type('UI Developer')
  .delete()
  .go();
