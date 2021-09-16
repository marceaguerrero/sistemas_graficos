function OrbitalCameraControl(){

	 var previousClientX = 0;
	 var previousClientY = 0;
	 var radio = 5;
	 var alfa = 0;
	 var beta = Math.PI/2;
	 var factorVelocidad = 0.01;
 
	 var isMouseDown = false;
 
	 var mouse = {x: 0, y: 0};
 
	 viewMatrix = glMatrix.mat4.create();
	 glMatrix.mat4.identity(viewMatrix);
 
	 position = [0, 0, -0];
	 up_vector = [0, 1, 0];
	 target = [0, 0.5, 0];
 
	 this.getViewMatrix=function(){
		 return viewMatrix;
	   }
 
	 this.getPosition=function(){
		 return position;
	   }
 
	this.setEventListeners=function() {
		window.onkeydown = (event) => {
		  if (event.keyCode == 57) {
				radio -= factorVelocidad;
				this.update();
				}
		
		if (event.keyCode == 48) {
			radio += factorVelocidad;
			this.update();
			}
			};

		body = document.getElementsByTagName('body')[0]
		body.addEventListener('mousedown', function(event){	
		 //this.canvas.onmousedown(function(event){		
			 isMouseDown = true; 
			 //upd_some_values();
			 //this.update();	
			});
 
		body.addEventListener('mouseup', function(event){	
		 //this.canvas.onmouseup(function(event){
			 isMouseDown = false;		
			 //upd_some_values();
				 });
 
		body.addEventListener('mousemove', function(event){	
		 //this.canvas.onmousemove(function(event){ 
			 mouse.x = event.clientX || event.pageX; 
			 mouse.y = event.clientY || event.pageY ;
			 upd_some_values();
			 //console.log(mouse.x, mouse.y);
			 });
			}

	 upd_some_values=function() {
		var deltaX=0;
		var deltaY=0;

		if (previousClientX) deltaX = mouse.x - previousClientX;
		if (previousClientY) deltaY = mouse.y - previousClientY;

		previousClientX = mouse.x;
		previousClientY = mouse.y;

		alfa = alfa + deltaX * factorVelocidad;
		beta = beta + deltaY * factorVelocidad;

		if (beta<0) beta=0;
		if (beta>Math.PI) beta=Math.PI;
		}

	 this.update=function() {
		 var x = radio * Math.sin(beta) * Math.sin(alfa);
		 var y = radio * Math.cos(beta);
		 var z = radio * Math.sin(beta) * Math.cos(alfa);
 
		 position = [x, y, z];
 
		 glMatrix.mat4.lookAt(
		   viewMatrix,
		   position,
		   target,
		   up_vector
		 );
 
	   };


	   }
