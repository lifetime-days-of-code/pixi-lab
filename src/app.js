import * as PIXI from 'pixi.js';
import sample from './sample.png'

let app = new PIXI.Application({width: 640, height: 360});

document.body.appendChild(app.view);
let sprite = PIXI.Sprite.from(sample);
app.stage.addChild(sprite);
