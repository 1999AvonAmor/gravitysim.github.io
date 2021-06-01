export default class Displaying {
    constructor(_context, _chainlet) {
      this.context = _context;
      this.chainlet = _chainlet;
      this.positioning = [];
      this.line = 0.75;
    }
    
    savePositioning(_x, _y) {
      var x = _x;
      var y = _y;
      this.positioning.push({x,y});
      if (this.positioning.length > this.chainlet) {
        this.positioning.shift();
      }
    }
    scales() {
      this.positioning = [];
     }
    
    paths(_x, _y, _movable) {
      var x = _x;
      var y = _y;
      var movable = _movable;
      this.savePositioning(x, y);
      var positioningLenght = this.positioning.length;
      for (let i = 0; i < positioningLenght; i++) {
        if (movable == false) {
          this.context.beginPath();
          this.context.arc(this.positioning[i].x, this.positioning[i].y, this.line, 0, 2 * Math.PI);
          this.context.fillStyle = `rgb(255, 255, 255)`;
          this.context.fill();
        }
      }
    }

    planets (_x,_y, _class, _scale) {
        var x = _x;
        var y = _y;
        var scale = _scale;
        var classes = _class;
        this.img = new Image ();
        this.img.src = classes;
        this.savePositioning(x, y);
        var positioningLenght = this.positioning.length;
        for (let i = 0; i < positioningLenght; i++) {  
          if (i === positioningLenght - 1) {   
            this.context.beginPath();
            this.context.drawImage(this.img,this.positioning[i].x-scale/2, this.positioning[i].y-scale/2, scale, scale);
        }
      }
    }

    information (_class, _width, _height) {
        var classes = _class;
        var width = _width;
        var height = _height;
        this.context.font = "14px Gill Sans, sans-serif";
        this.context.fillText("speed y : " + Math.ceil((classes.sy)*1000)/1000, width-200, height-15);
        this.context.fillText("speed x : " + Math.ceil((classes.sx)*1000)/1000, width-350, height-15);
        this.context.fillText("position y : " + Math.ceil((classes.y)*1000)/1000, width-500, height-15);
        this.context.fillText("position x : " + Math.ceil((classes.x)*1000)/1000, width-650, height-15);
        this.context.fillText("fixed : " + classes.fixed, width-750, height-15);
        this.context.fillText("name : " + classes.name, width-925, height-15);
        this.context.fill();
    }     
} 

    