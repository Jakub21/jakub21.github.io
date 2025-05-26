import * as oci from '../lib/oci/oci.js';


export default class Root extends oci.elm.Element {
    constructor(parent, offset) {
        super(parent, {
            shape: new oci.elm.polygon.Rectangle({x: 4000, y: 4000}),
            texture: new oci.tex.Texture([
                // new oci.tex.components.Outline(new oci.tex.styles.Color(255, 0, 0, 127), 2),
                new oci.tex.components.Fill(new oci.tex.styles.Image('../img/starfield_huge.jpg')),
            ]),
            joint: new oci.kine.Joint({enabled: true, offset}),
        });
        this.rotationSpeed = 0.1;
        this.setViewportSize(window.innerWidth, window.innerHeight);
    }
    rotateLeft() {
        this.joint.add(-this.rotationSpeed);
    }
    rotateRight() {
        this.joint.add(this.rotationSpeed);
    }
    zoomIn() {
        this.trnf.scaleAdd(0.1);
    }
    zoomOut() {
        if (this.trnf._scale > 0.15) {
            this.trnf.scaleAdd(-0.1);
        }
    }
    setViewportSize(x, y) {
        let offset = new oci.geo.Vector((x*0.3)-500, y-1080);
        this.trnf.setPosition(new oci.geo.Vector(1600, 1080).add(offset));
    }
}
