export default class Canvas {
    constructor () {
           this.canvasElement = document.querySelector("#canvas");
           this.context = canvas.getContext("2d");
           this.imagePaths  = [
            'resources/images/01_asteroid.png',
            'resources/images/02_planet_01.png',
            'resources/images/02_planet_02.png',
            'resources/images/02_planet_03.png',
            'resources/images/02_planet_04.png',
            'resources/images/02_planet_05.png',
            'resources/images/02_planet_06.png',
            'resources/images/02_planet_07.png',
            'resources/images/02_planet_08.png',
            'resources/images/02_planet_09.png',
            'resources/images/02_planet_10.png',
            'resources/images/03_star_01.png',
            'resources/images/03_star_02.png',
            'resources/images/03_star_03.png',
            'resources/images/04_black_hole.png']; 
    }
}

