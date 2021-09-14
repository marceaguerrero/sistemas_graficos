function CameraControl(initialPos, canvas) {

    this.canvas = canvas;
    
    this.drone = new DroneCameraControl(initialPos);
    this.orbital = new OrbitalCameraControl(this.canvas);

    //empiezo con drone
    this.camera = this.drone;

    this.getViewMatrix= function() {
      this.camera.update();
      return this.camera.getViewMatrix();
      }

    this._addEventListeners=function(canvas) {
      window.addEventListener("keydown", (event) => {
        if (event.keyCode == 49) {
          // 1 para la Drone
          this.camera = this.drone;
          this.drone.update();
          this._addEventListeners(canvas); 
        }
        if (event.keyCode == 50) {
          // 2 para la Orbital
          this.camera = this.orbital;
          this.orbital.setEventListeners(canvas);
          this.orbital.update();
          this._addEventListeners(canvas);
  
        }

      });
    }}
