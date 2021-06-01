export function randomObject (_type) {
  var type = _type;
  var link = ' ';

  switch (type) {
    case 1:   link = 'resources/images/01_asteroid.png';
              break;
    case 2: 
              type = Math.floor(Math.random() * 8) + 1;
              link = 'resources/images/02_planet_0' + type + '.png';
              break;
    case 3:
              type = Math.floor(Math.random() * 3) + 1;
              link = 'resources/images/03_star_0' + type + '.png';
              break;
    case 4:
              link = 'resources/images/04_black_hole.png';
              break;                  
    default: 
              link = ' ';
    
  }
  return link;
}

export function clears (_number,_objects, _settings) {
    var number = _number;
    var objects = _objects;
    var settings = _settings;
    switch (number) {
      case '1':
        objects = JSON.parse(JSON.stringify(settings.scenes_None));
        break;
      case '2':
        objects = JSON.parse(JSON.stringify(settings.scenes_1NewtonLaw));
        break;
      case '3':
        objects = JSON.parse(JSON.stringify(settings.scenes_TwoObjects));
        break;
      case '4':
        objects = JSON.parse(JSON.stringify(settings.scenes_NBodyProblem));
        break;
      case '5':
        objects = JSON.parse(JSON.stringify(settings.scenes_SolarSystem));
        break;
    }
    return objects;
}

export function collision(_objectI, _objectJ) {
  var objectI = _objectI;
  var objectJ = _objectJ;
  var destroy = true;
  var sX = Math.pow(Math.abs(objectI.x - objectJ.x), 2);
  var sY = Math.pow(Math.abs(objectI.y - objectJ.y), 2);
  var h = Math.sqrt(sX + sY);
  var d = h - 0.15;
  if (d >= 0) { destroy = false; }
  return destroy;
}

