export default class gravity {
    constructor(value) {
      this.g = value.g;
      this.dt = value.dt;
      this.objects = value.objects;
    }
  
    position() {
      var objectLength = this.objects.length;
      for (let i = 0; i < objectLength; i++) {
        var objectI = this.objects[i];
        if (this.objects[i].fixed == false) {
           objectI.sx += objectI.ax * this.dt;
           objectI.sy += objectI.ay * this.dt;
           objectI.x += objectI.sx * this.dt;
           objectI.y += objectI.sy * this.dt;
          } else 
          {
            objectI.x = objectI.x;
            objectI.y = objectI.y;
          } 
        }
        return this;
    }

   acceleration() {
      var objectLength = this.objects.length;
      for (let i = 0; i < objectLength; i++) {
        let ax = 0;
        let ay = 0;
        var objectI = this.objects[i];
        for (let j = 0; j < objectLength; j++) {
          if (i !== j) {
            var objectJ = this.objects[j];
            var dx = objectJ.x - objectI.x;
            var dy = objectJ.y - objectI.y;
            var range = Math.pow(dx,2) + Math.pow(dy,2);
            var f = (this.g * objectJ.m) / (range * Math.sqrt(range)); 
            ax = ax + dx * f;
            ay = ay + dy * f;
          }
        }
        objectI.ax = ax;
        objectI.ay = ay;
      }
      return this;
    }   
}
  