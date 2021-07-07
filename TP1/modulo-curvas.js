    // Definimos las Bases de Berstein, dependen de u
    function Base0(u) { return 0.5*(1-u)*(1-u);}   // 0.5*(1-u)^2
    function Base1(u) { return 0.5+u*(1-u);} 		// 0.5+ u*(1-u)
    function Base2(u) { return 0.5*u*u; } 			// 0.5*u^2			 
    // bases derivadas
    function Base0der(u) { return -1+u;}  	//
    function Base1der(u) { return  1-2*u;} 
    function Base2der(u) { return  u;}		

	function curvaCuadratica (u,puntosDeControl){
		var p0=puntosDeControl[0];
		var p1=puntosDeControl[1];
		var p2=puntosDeControl[2];
        var punto={
            "x":0.,
            "y":0.,
            "z":0.
          }				
		punto.x=Base0(u)*p0[0]+Base1(u)*p1[0]+Base2(u)*p2[0];
		punto.y=Base0(u)*p0[1]+Base1(u)*p1[1]+Base2(u)*p2[1];
		punto.z=Base0(u)*p0[2]+Base1(u)*p1[2]+Base2(u)*p2[2];
		return punto;
	}

	function curvaCuadraticaDerivadaPrimera (u,puntosDeControl){
		var p0=puntosDeControl[0];
		var p1=puntosDeControl[1];
		var p2=puntosDeControl[2];		
        var punto={
            "x":0.,
            "y":0.,
            "z":0.
          }				
        punto.x=Base0der(u)*p0[0]+Base1der(u)*p1[0]+Base2der(u)*p2[0];
		punto.y=Base0der(u)*p0[1]+Base1der(u)*p1[1]+Base2der(u)*p2[1];
		punto.z=Base0der(u)*p0[2]+Base1der(u)*p1[2]+Base2der(u)*p2[2];
		return punto;
	}	

    function devuelvoCurva(puntosDeControl, tamanio){
        var resultado=[];
        u = [0., 0.25, 0.5, 0.75, 1.];
        //tamanio = puntosDeControl.lenght();
        for(n=0;n<tamanio/3;n++)
            {
            var tramo=[];
            tramo.push(puntosDeControl[n*3]);
            tramo.push(puntosDeControl[n*3 + 1]);
            tramo.push(puntosDeControl[n*3 + 2]);
            for(i=0.;i<5;i++)
                {resultado.push(curvaCuadratica (u[i],puntosDeControl));}
            }
        return resultado;
    }
