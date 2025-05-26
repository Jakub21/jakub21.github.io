import * as oci from '../lib/oci/oci.js';


class Satellite extends oci.elm.Element {
  constructor(anchor, data) {
    super(anchor, {
      transform: new oci.geo.Transform({ox: data.orbitRadius}),
      shape: new oci.elm.polygon.Rectangle({x: 50, y: 50}),
      texture: new oci.tex.Texture([
        // new oci.tex.components.Outline(new oci.tex.styles.Color(255, 255, 255, 100)),
        new oci.tex.components.Fill(new oci.tex.styles.Image(data.image)),  
      ]),
      // joint: new oci.kine.Joint({enabled: true, target: 0.3 * (Math.random() - 0.5) + data.phase}),
      joint: new oci.kine.Joint({enabled: true, target: data.phase}),
    });
    this.joint.set(data.phase);
    this.data = data;
    this.name = data.name;
  }
  // draw(ctx) {
  //   this.joint.add(this.data.velocity / 5e3);
  //   // let offset = this.joint.offset % (2 * Math.PI);
  //   console.log(this.trnf.getRotation() % (2 * Math.PI));
  //   if (this.trnf.getRotation() % (2 * Math.PI) > Math.PI) {
  //     this.joint.add(0.05);
  //   }
  //   super.draw(ctx);
  // }
}


export default class AnchoredSatellite extends oci.elm.Element {
  constructor(scene, data={}) {
    // data = {
    //   ...data,
    //   orbitRadius: data.radius,
    //   velocity: data.velocity,
    //   phase: data.phase,
    // }
    super(scene, {
      // transform: new oci.geo.Transform({ax: center.x, ay: center.y}),
      shape: new oci.elm.elliptic.Circle({radius: data.orbitRadius}),
      texture: new oci.tex.Texture([
        new oci.tex.components.Outline(new oci.tex.styles.Color(60, 60, 60, 100)),
      ]),
    });
    new Satellite(this, data);
    // this.rotationRate = 0.001;
  }
  draw(ctx) {
    // this.trnf.rotate(this.rotationRate);
    super.draw(ctx);
  }
}
