function CameraControl(initialPos, canvas) {

    this.cual_camara = 1;
    this.canvas = canvas;
    
    this.drone = new DroneCameraControl(initialPos);
    this.orbital = new OrbitalCameraControl(this.canvas);

    //empiezo con drone
    this.camera = this.drone;

    this.getViewMatrix= function() {
      if (this.cual_camara == 1)
       {this.camera = this.drone;
        return this.drone.getViewMatrix();}
      else
        {this.camera = this.orbital;
         return this.orbital.getViewMatrix();}

      }

    this._addEventListeners=function() {
      window.addEventListener("keydown", (event) => {
        if (event.keyCode == 49) {
          // 1 para la Drone
          this.cual_camara = 1;
          this.camera = this.drone;
          this.getViewMatrix = this.drone.getViewMatrix();
          this.drone.update();
          this._addEventListeners(); 
        }
        if (event.keyCode == 50) {
          // 2 para la Orbital
          this.cual_camara = 2;
          this.camera = this.orbital;
          this.getViewMatrix = this.orbital.getViewMatrix();
          this.orbital.setEventListeners();
          this.orbital.update();
          this._addEventListeners();
  
        }

      });
    }}
