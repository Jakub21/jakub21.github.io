import * as oci from '../lib/oci/oci.js';


class CloudsLayer extends oci.elm.Element {
  constructor(planet) {
    let x = Math.random() * Math.PI * 2;
    super(planet, {
      shape: new oci.elm.elliptic.Circle({radius: 645}),
      texture: new oci.tex.Texture([
        new oci.tex.components.Fill(new oci.tex.styles.Image('../img/clouds-sparse.png')),
      ]),
      joint: new oci.kine.Joint({enabled: true, target: x}),
    });
    this.planet = planet;
  }
  draw(ctx) {
    this.joint.add(this.planet.rotationRate * 2);
    super.draw(ctx);
  }
}

export default class Planet extends oci.elm.Element {
  constructor(parent) {
    const radius = 700;
    super(parent, {
      shape: new oci.elm.elliptic.Circle({radius: radius}),
      texture: new oci.tex.Texture([
        new oci.tex.components.Fill(new oci.tex.styles.Image('../img/earth_night_4.png')),
      ]),
    });
    this.radius = radius;
    this.rotationRate = 0.0001;
    this.trnf.rotate(Math.random() * Math.PI * 2);
    this.trnf.scale(0.85);
    new CloudsLayer(this);
  }
  draw(ctx) {
    this.trnf.rotate(this.rotationRate);
    super.draw(ctx);
  }
}
