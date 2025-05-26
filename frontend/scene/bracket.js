import * as oci from '../lib/oci/oci.js';

export default class Bracket extends oci.elm.Element {
  constructor(parent, offset) {
    super(parent, {
      transform: new oci.geo.Transform({s: 0.5}),
      shape: new oci.elm.polygon.Rectangle({x: 164, y:115}),
      texture: new oci.tex.Texture([
        new oci.tex.components.Fill(new oci.tex.styles.Image('../img/bracket_amber.png')),
      ]),
      joint: new oci.kine.Joint({enabled: true, offset: -offset}),
      zIndex: 3,
    });
    this.rotationSpeed = 0.1;
    this.tex.hide(true);
    this.following = undefined;
  }
  draw(ctx) {
    if (this.following) {
      let anchor = this.following.parent.trnf.getPosition();
      let offset = this.following.trnf.getOffset().rotate(-this.following.trnf.getRotation());
      let position = anchor.add(offset);
      this.trnf.setPosition(position);
    }
    super.draw(ctx);
  }
  enabled(state) {
    this.tex.hide(!state);
  }
  follow(element) {
    this.following = element;
  }
  rotateLeft() {
    this.joint.add(-this.rotationSpeed);
  }
  rotateRight() {
    this.joint.add(this.rotationSpeed);
  }
}
