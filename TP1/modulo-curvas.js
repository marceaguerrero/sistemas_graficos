
    //Bspline
    function Base0Bspline(u) { return 0.5*(1-u)*(1-u);}   // 0.5*(1-u)^2
    function Base1Bspline(u) { return 0.5+u*(1-u);} 		// 0.5+ u*(1-u)
    function Base2Bspline(u) { return 0.5*u*u; } 			// 0.5*u^2			 
    // bases derivadas
    function Base0derBspline(u) { return -1+u;}  	//
    function Base1derBspline(u) { return  1-2*u;} 
    function Base2derBspline(u) { return  u;}		

    //Bezier
    function Base0Bezier(u) { return (1-u)*(1-u)*(1-u);}   // 0.5*(1-u)^2
    function Base1Bezier(u) { return 3*(1-u)*(1-u)*u;} 		// 0.5+ u*(1-u)
    function Base2Bezier(u) { return 3*(1-u)*u*u; } 			// 0.5*u^2			 
    function Base3Bezier(u) { return u*u*u; } 			// 0.5*u^2			 
    // bases derivadas
    function Base0derBezier(u) { return -3*u*u+6*u-3;}  	//
    function Base1derBezier(u) { return  9*u*u-12*u+3;} 
    function Base2derBezier(u) { return  -9*u*u+6*u;}		
    function Base3derBezier(u) { return  3*u*u;}		

    function curvaCuadraticaBspline (u,puntosDeControl){
		var p0=puntosDeControl[0];
		var p1=puntosDeControl[1];
		var p2=puntosDeControl[2];
        var punto={
            "x":0.,
            "y":0.,
            "z":0.
          }				
        punto.x=Base0Bspline(u)*p0[0]+Base1Bspline(u)*p1[0]+Base2Bspline(u)*p2[0];
		punto.y=Base0Bspline(u)*p0[1]+Base1Bspline(u)*p1[1]+Base2Bspline(u)*p2[1];
		punto.z=Base0Bspline(u)*p0[2]+Base1Bspline(u)*p1[2]+Base2Bspline(u)*p2[2];
		return punto;
	}

    function curvaCubicaBezier (u,puntosDeControl){
		var p0=puntosDeControl[0];
		var p1=puntosDeControl[1];
		var p2=puntosDeControl[2];
		var p3=puntosDeControl[2];
        var punto={
            "x":0.,
            "y":0.,
            "z":0.
          }				
        punto.x=Base0Bezier(u)*p0[0]+Base1Bezier(u)*p1[0]+Base2Bezier(u)*p2[0]+Base3Bezier(u)*p3[0];
		punto.y=Base0Bezier(u)*p0[1]+Base1Bezier(u)*p1[1]+Base2Bezier(u)*p2[1]+Base3Bezier(u)*p3[1];
		punto.z=Base0Bezier(u)*p0[2]+Base1Bezier(u)*p1[2]+Base2Bezier(u)*p2[2]+Base3Bezier(u)*p3[2];
		return punto;
	}


	function curvaCuadraticaDerivadaPrimeraBspline (u,puntosDeControl){
		var p0=puntosDeControl[0];
		var p1=puntosDeControl[1];
		var p2=puntosDeControl[2];		
        var punto={
            "x":0.,
            "y":0.,
            "z":0.
          }				
        punto.x=Base0derBspline(u)*p0[0]+Base1derBspline(u)*p1[0]+Base2derBspline(u)*p2[0];
		punto.y=Base0derBspline(u)*p0[1]+Base1derBspline(u)*p1[1]+Base2derBspline(u)*p2[1];
		punto.z=Base0derBspline(u)*p0[2]+Base1derBspline(u)*p1[2]+Base2derBspline(u)*p2[2];
		return punto;
	}	

    function curvaCubicaDerivadaPrimeraBezier (u,puntosDeControl){
		var p0=puntosDeControl[0];
		var p1=puntosDeControl[1];
		var p2=puntosDeControl[2];		
		var p3=puntosDeControl[2];		
        var punto={
            "x":0.,
            "y":0.,
            "z":0.
          }				
        punto.x=Base0derBezier(u)*p0[0]+Base1derBezier(u)*p1[0]+Base2derBezier(u)*p2[0]+Base3derBezier(u)*p3[0];
		punto.y=Base0derBezier(u)*p0[1]+Base1derBezier(u)*p1[1]+Base2derBezier(u)*p2[1]+Base3derBezier(u)*p3[1];
		punto.z=Base0derBezier(u)*p0[2]+Base1derBezier(u)*p1[2]+Base2derBezier(u)*p2[2]+Base3derBezier(u)*p3[2];
		return punto;
	}	

    function devuelvoCurvaBspline(puntosDeControl, tamanio){
        var resultado=[];
        //u = [0., 0.25, 0.5, 0.75, 1.];
        var deltaU=0.01; // es el paso de avance sobre la curva cuanto mas chico mayor es el detalle
        // u=0.05 son 20 segmentos (0.05=1/20)
        var primer_punto;
        //tamanio = puntosDeControl.lenght();
        for(n=0;n<tamanio/3;n++)
            {
            var tramo=[];
            tramo.push(puntosDeControl[n*3]);
            tramo.push(puntosDeControl[n*3 + 1]);
            tramo.push(puntosDeControl[n*3 + 2]);
            if (puntosDeControl[n*3 + 2])
                for (var u=0;u<1.001;u=u+deltaU){
                    resultado.push(curvaCuadraticaBspline(u,tramo));

                    if (!primer_punto)
                    //guardo el primero
                        { primero = curvaCuadraticaBspline(u,tramo);
                          primer_punto = 1.;}
                    }
            }
        //el ultimo tiene que ser igual al primero
        resultado.push(primero);
        //console.log(resultado);
        return resultado;
    }

    function devuelvoCurvaBezier(puntosDeControl, tamanio){
        var resultado=[];
        //u = [0., 0.25, 0.5, 0.75, 1.];
        var deltaU=0.01; // es el paso de avance sobre la curva cuanto mas chico mayor es el detalle
        // u=0.05 son 20 segmentos (0.05=1/20)
        var primer_punto;
        //tamanio = puntosDeControl.lenght();
        for(n=0;n<tamanio/4;n++)
            {
            var tramo=[];
            tramo.push(puntosDeControl[n*3]);
            tramo.push(puntosDeControl[n*3 + 1]);
            tramo.push(puntosDeControl[n*3 + 2]);
            tramo.push(puntosDeControl[n*3 + 3]);
            if (puntosDeControl[n*3 + 3])
                for (var u=0;u<1.001;u=u+deltaU){
                    resultado.push(curvaCubicaBezier(u,tramo));

                    if (!primer_punto)
                    //guardo el primero
                        { primero = curvaCubicaBezier(u,tramo);
                          primer_punto = 1.;}
                    }
            }
        //el ultimo tiene que ser igual al primero
        //resultado.push(primero);
        //console.log(resultado);
        return resultado;
    }
