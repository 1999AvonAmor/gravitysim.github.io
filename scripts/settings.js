export default class Settings {
    constructor (value) {
        this.g = 50;
        this.dt = 0.0050; 
        this.scale = 100;
        this.chainlet = 300;
        this.count = 0;
        this.mousePX = 0;
        this.mousePY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.dragging = false;
        this.fixed = false;
        this.paths = true;

        this.objectElement = document.querySelector("#objected");
        this.scenesElement = document.querySelector("#scenes");
        this.fixedElement = document.querySelector("#fixed");
        this.timeRange = document.querySelector("#time");
        this.outTime = document.querySelector(".out_time");
        this.gravityRange = document.querySelector("#gravity");
        this.outGravity = document.querySelector(".out_gravity");
        this.pathsElement = document.querySelector("#paths");
        this.collisionElement = document.querySelector("#collision");
        this.scaleElement = document.querySelector(".panel_06");
        this.clearUniverse = document.querySelector("#clear_universe");

        this.scenes_None = [{
            name: 'None',
            type: 0,
            class: ' ',
            fixed: true,
            m: 0,
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
        }];

        this.scenes_1NewtonLaw = [{
            name: 'Asteroid',
            type: 1,
            class: 'resources/images/01_asteroid.png',
            fixed: false,
            m: 0.00001,
            x: -8,
            y: -0.25,
            sx: 4,
            sy: 0,
        }];

        this.scenes_TwoObjects = [{
            name: 'Blue squence star',
            type: 3,
            class: 'resources/images/03_star_03.png',
            fixed: false,
            m: 2, 
            x: -1,
            y: 0,
            sx: 0,
            sy: -4,
          },
          {
            name: 'Read Giant',
            type: 3,
            class: 'resources/images/03_star_02.png',
            fixed: false,
            m: 2,
            x: 1,
            y: 0,
            sx: 0,
            sy: 4,
        }];

        this.scenes_NBodyProblem = [{
            name: 'Jupiter',
            type: 1,
            class: 'resources/images/02_planet_01.png',
            fixed: false,
            m: 4, 
            x: 0,
            y: -3,
            sx: 0,
            sy: 0.25,
          },
          {
            name: 'Mars',
            type: 6,
            class: 'resources/images/02_planet_05.png',
            fixed: false,
            m: 10, 
            x: -3,
            y: 3,
            sx: 1,
            sy: -0.50,
          },
          {
            name: 'Neptune',
            type: 1,
            class: 'resources/images/02_planet_06.png',
            fixed: false,
            m: 1, 
            x: 3,
            y: 3,
            sx: -1,
            sy: -2,
        }];

        this.scenes_SolarSystem = [{
            name: 'Sun',
            type: 3,
            class: 'resources/images/03_star_01.png',
            fixed: true,
            m: 1,
            x: 0,
            y: 0,
            sx: 0,
            sy: 0,
          },
          {
            name: 'Mercury',
            type: 2,
            class: 'resources/images/02_planet_01.png',
            fixed: false,
            m: 0.0025,
            x: 0,
            y: 1,
            sx: 6,
            sy: 0,
          },
          {
            name: 'Venus',
            type: 2,
            class: 'resources/images/02_planet_02.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 1.6,
            sx: 5,
            sy: 0,
          },
          {
            name: 'Earth',
            type: 2,
            class: 'resources/images/02_planet_03.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 2,
            sx: 4.8,
            sy: 0,
          },
          {
            name: 'Mars',
            type: 2,
            class: 'resources/images/02_planet_04.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 2.35,
            sx: 4.50,
            sy: 0,
          },
          {
            name: 'Jupiter',
            type: 2,
            class: 'resources/images/02_planet_05.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 2.60,
            sx: 4.2,
            sy: 0,
          },
          {
            name: 'Saturn',
            type: 2,
            class: 'resources/images/02_planet_06.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 3.05,
            sx: 3.95,
            sy: 0,
          },
          {
            name: 'Uranus',
            type: 2,
            class: 'resources/images/02_planet_07.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 3.40,
            sx: 3.70,
            sy: 0,
          },
          {
            name: 'Neptune',
            type: 2,
            class: 'resources/images/02_planet_08.png',
            fixed: false,
            m: 0.00025,
            x: 0,
            y: 3.75,
            sx: 3.5,
            sy: 0,
          },
        ];

    }
}