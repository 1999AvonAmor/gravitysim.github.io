import Settings from "./settings.js"
import Canvas from "./canvas.js"
import Displaying from "./displaying.js"
import gravity from "./gravity.js";
import {clears, randomObject, collision} from "./functions.js";

const settings = new Settings();
const canvas = new Canvas();
const g = settings.g;
const dt = settings.dt;
const timeElement = settings.timeRange;
const gravityElement = settings.gravityRange;
const fixedElement = settings.fixedElement;
const pathsElement = settings.pathsElement;
const collisionElement = settings.collisionElement;
const objectElement = settings.objectElement;
const scenesElement = settings.scenesElement;
const scaleElement = settings.scaleElement
const cleanElement = settings.clearUniverse;
const canvasElement = canvas.canvasElement;
const width = (canvasElement.width = window.innerWidth);
const height = (canvasElement.height = window.innerHeight);
var fixed = settings.fixed;
var scale = settings.scale;

const model = new gravity({ g, dt, objects: settings.scenes_None});
model.objects = clears('1', model.objects, settings);

const updateModel = objects => {
objects.forEach( mass => (mass["Displaying"] = new Displaying(canvas.context, settings.chainlet)));};

updateModel(model.objects);

scenesElement.addEventListener("change", () => {
  var changeScene = scenesElement.value;
  model.objects = clears(changeScene, model.objects, settings);
  updateModel(model.objects); 
  }, false);

cleanElement.addEventListener('click', () => {
  model.objects = clears('1', model.objects, settings);
  updateModel(model.objects); 
  scenesElement.value = '1';      
  }, false);

canvasElement.addEventListener("mousedown", e => {
  settings.mousePX = e.clientX;
  settings.mousePY = e.clientY;
  settings.dragging = true;
  }, false);

canvasElement.addEventListener("mousemove", e => {
  settings.mouseX = e.clientX;
  settings.mouseY = e.clientY;
  }, false);

canvasElement.addEventListener("mouseup", e => {
  var index = objectElement.value;
  var names = ' ';
  var integer = 0;
  var imageClass = ' ';
  var x = (settings.mousePX - width / 2) / scale;
  var y = (settings.mousePY - height / 2) / scale;
  var sx = (e.clientX - settings.mousePX) / 100;
  var sy = (e.clientY - settings.mousePY) / 100;
  
  if(objectElement.selectedIndex == 1) { integer += 1; }
  if(objectElement.selectedIndex == 2) { integer += 2; }
  if(objectElement.selectedIndex == 3) { integer += 3; }
  if(objectElement.selectedIndex == 4) { integer += 4; }

  imageClass = randomObject(integer);
  switch (imageClass) {
    case 'resources/images/01_asteroid.png': names = 'Asteroid'; break;
    case 'resources/images/02_planet_01.png': names = 'Mercury'; break;
    case 'resources/images/02_planet_02.png': names = 'Venus'; break;
    case 'resources/images/02_planet_03.png': names = 'Earth'; break;
    case 'resources/images/02_planet_04.png': names = 'Mars'; break;
    case 'resources/images/02_planet_05.png': names = 'Jupiter'; break;
    case 'resources/images/02_planet_06.png': names = 'Saturn'; break;
    case 'resources/images/02_planet_07.png': names = 'Uranus'; break;
    case 'resources/images/02_planet_08.png': names = 'Neptune'; break;
    case 'resources/images/03_star_01.png': names = 'Sun'; break;
    case 'resources/images/03_star_02.png': names = 'Blue squence star'; break;
    case 'resources/images/03_star_03.png': names = 'Red Giant'; break;
    case 'resources/images/04_black_hole.png': names = 'Black Hole'; break;
    default: names = 'None';
  }
  if (fixedElement.checked) { fixed = true; } else { fixed = false; }

  model.objects.push({
    name: names,
    type: integer,
    class: imageClass,
    fixed,
    m: parseFloat(index),
    x,
    y,
    sx,
    sy,
    Displaying: new Displaying(canvas.context, settings.chainlet, settings.radius)
  });
  settings.dragging = false;
  }, false);

timeElement.addEventListener("input", function() {
  model.dt = settings.timeRange.value;
  settings.outTime.innerHTML = model.dt;
});

gravityElement.addEventListener("input", function() {
  model.g = settings.gravityRange.value;
  settings.outGravity.innerHTML = model.g;
});

scaleElement.addEventListener('change', function (e) {
scale = e.target.value;
var objectLength = model.objects.length;
for (let i = 0; i < objectLength; i++) {
  var objectI = model.objects[i];
  objectI.Displaying.scales();
}
})

const rendering = () => {
  
  var objectLength = model.objects.length;
  var img = new Image ();
  model.acceleration();
  model.position();
  
  img.src = 'resources/images/background.jpg';
  canvas.context.drawImage(img, 0, 0, width, height);
 
  for (let i = 0; i < objectLength; i++) {
    var destroy = false;
    var objectI = model.objects[i];
    var movable = model.objects[i].fixed;
    var enclass = model.objects[i].class;
    var x = width / 2 + objectI.x * scale;
    var y = height / 2 + objectI.y * scale;

    if (collisionElement.checked) {
      for (let j = 0; j <objectLength; j++) {
        if(i !== j) {
          var objectJ = model.objects[j];
          destroy = collision(objectI, objectJ);
          if (destroy) {
              model.objects.splice(i);
              model.objects.splice(j);
              break;
          }
        }
      }
    }
    if (destroy == true) { break; }
    if (pathsElement.checked) { objectI.Displaying.paths(x, y, movable); }
    objectI.Displaying.planets(x,y, enclass, scale);
    objectI.Displaying.information(model.objects[objectLength-1], width, height);
 }
  if (settings.dragging) {
    img.src = 'resources/images/course.png';
    canvas.context.stroke();
    canvas.context.beginPath();
    canvas.context.arc(settings.mousePX, settings.mousePY, 1, 0, 2 * Math.PI);
    for (let i = 1; i<10; i ++) {
    canvas.context.arc(settings.mouseX, settings.mouseY, 1*i, 0, 2 * Math.PI);
    canvas.context.fillStyle = `rgb(255, 255, 255)`;
    canvas.context.fill();
    }
    canvas.context.drawImage(img, settings.mouseX-25, settings.mouseY-25, 50, 50);
    canvas.context.fillStyle = `rgb(255, 255, 255)`;
  }  
  requestAnimationFrame(rendering);
};

rendering();
