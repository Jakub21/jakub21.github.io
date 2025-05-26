import * as oci from '../lib/oci/oci.js';
import Root from './root.js';
import Planet from './planet.js';
import AnchoredSatellite from './satellite.js';
import AnchoredAstronaut from './astronaut.js';
import Bracket from './bracket.js';

export default class Scene extends oci.core.CanvasInterface {
  constructor(canvas, dialog) {
    super(canvas.elm);
    this.dialog = dialog;

    this.OFFSET = -1.3;

    this.rootElement = new Root(this, this.OFFSET);
    
    new Planet(this.rootElement);
    new AnchoredSatellite(this.rootElement, {
      name: 'shp_js',
      image: '../img/sat_1.png',
      orbitRadius: 1210, velocity: .7, phase: 4.2,
    });
    new AnchoredSatellite(this.rootElement, {
      name: 'shp_py',
      image: '../img/sat_2.png',
      orbitRadius: 1140, velocity: .85, phase: 3.8,
    });
    new AnchoredSatellite(this.rootElement, {
      name: 'domi',
      image: '../img/sat_5.png',
      orbitRadius: 1100, velocity: .9, phase: 3.3,
    });

    new AnchoredAstronaut(this.rootElement, {
      name: 'welcome',
      image: '../img/astronaut-small.png',
      orbitRadius: 620, velocity: .9,
    });

    this.bracket = new Bracket(this.rootElement, this.OFFSET);
    
    let kb = new $.Keyboard($.get('body'));
    kb.bind(['ArrowLeft'], (evt) => {
      this.rotateLeft();
    });
    kb.bind(['ArrowRight'], (evt) => {
      this.rotateRight();
    });
    canvas.on('wheel', evt => {
      if (evt.wheelDelta < 0) {
        this.rotateLeft();
      } else {
        this.rotateRight();
      }
    })
    kb.bind(['ArrowUp'], (evt) => {
      this.rootElement.zoomIn();
    });
    kb.bind(['ArrowDown'], (evt) => {
      this.rootElement.zoomOut();
    });
    canvas.on('mousemove', evt => {
      this.mouse = new oci.geo.Vector(evt.clientX, evt.clientY);
    })
    canvas.on('click', evt => {
      if (!this.intersected) return;
      this.dialog.load(this.intersected.name);
    })

    let view = new $.DomiObject(window);
    view.on('resize', () => {
      this.rootElement.setViewportSize(window.innerWidth, window.innerHeight);
    });

    this.mouse = new oci.geo.Vector(0, 0);
    this.intersected = false;
  }
  start() {
    let nextFrame = (delta) => {
      this.checkHover();
      this.update();
      requestAnimationFrame(nextFrame);
    }
    requestAnimationFrame(nextFrame);
  }
  checkHover() {
    let elements = this.elements.getWholeTree();
    let canvas = new $.DomiObject(this.canvas);
    let intersected = false;
    for (let elm of elements) {
      if (elm.intersects(this.mouse) && ['AstronautRoot', 'Satellite'].includes(elm.constructor.name)) {
        intersected = elm;
        break;
      }
    }
    if (!intersected && this.intersected) {
      this.bracket.enabled(false);
      canvas._s.remove('pointing');
    }
    if (intersected && !this.intersected) {
      this.bracket.enabled(true);
      this.bracket.follow(intersected);
      canvas._s.add('pointing');
    }
    this.intersected = intersected;
  }
  rotateLeft() {
    this.rootElement.rotateLeft();
    this.bracket.rotateRight();
  }
  rotateRight() {
    this.rootElement.rotateRight();
    this.bracket.rotateLeft();
  }
}
