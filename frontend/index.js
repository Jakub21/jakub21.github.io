import Scene from './scene/scene.js';
import Dialog from './info/dialog.js';

window.onload = () => {

  // setup the popup dialog
  let dialog = new Dialog();
  dialog.load('welcome');

  // create a canvas
  let canvas = $.make('canvas #Canvas .fade-out');
  $.get('body').prepend(canvas);

  // setup the scene
  const scene = new Scene(canvas, dialog);
  scene.start();

  // reveal
  setTimeout(() => {
    canvas._s.remove('fade-out');
  }, 10);
  
  // setup dialog: close button
  // $.get('.close').on('click', (evt) => {
  //   $.get('#dialog').prop({hidden: true});
  // })
  // setup dialog: drag
  // $.get('#dialog')._s.set('transform', 'translate(1px, 1px)');
  // $.get('.topbar').on('mousemove', evt => {
  //   if (evt.buttons != 1) return;
  //   let current = $.get('#dialog')._s.get('transform');
  //   let delta = {x: parseInt(current.split('(')[1]), y: parseInt(current.split(',')[1])}
  //   delta.x += evt.movementX; delta.y += evt.movementY;
  //   $.get('#dialog')._s.set('transform', `translate(${delta.x}px, ${delta.y}px)`);
  // });

}
