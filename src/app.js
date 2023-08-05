import * as PIXI from 'pixi.js';
import sample from './sample.png'

let app = new PIXI.Application({width: 640, height: 360});
let sprite = PIXI.Sprite.from(sample);
let elapsed = 0.0;

document.body.appendChild(app.view);

app.stage.addChild(sprite);

app.ticker.add((deltatime) => {
    elapsed += deltatime;

    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
})