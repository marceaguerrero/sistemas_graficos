function crearGeometriaPasto(texturePasto){
    pasto = new Objeto3D(1,1);
    pasto.initBuffers(2, 2,'cuadrado');
    pasto.setPosicion(-2.,0.,-14.);
    pasto.setRotacion(0.,Math.PI/2,0.);
    pasto.setTextura(texturePasto);    
    pasto.setShader(shaderProgram);
}

function crearGeometriaTobogan(){
    vert_tob = [];

    vert_tob.push([-1.0, 0.0, -1.0]);
    vert_tob.push([0.0, 0.0, -1.0]);
    vert_tob.push([1.0, 0.0, 0.0]);
    vert_tob.push([2.0, 0.0, 1.0]);
    vert_tob.push([3.0, 0.0, 2.0]);
    vert_tob.push([3.0, 0.0, 4.0]);
    vert_tob.push([4.0, 0.0, 5.0]);

    //obtengo la bezier cubica con esos vertices
    var bezier= [];
    //SI AUMENTO EL SEGUNDO PARAMETRO SALE MAS TIPO SONRISA
    bezier = devuelvoCurvaBezier(vert_tob, 10);

    tobogan = new Objeto3D(2,2);
    tobogan.initBuffers(2, 2,'tobogan', bezier);
    tobogan.setPosicion(5.,3.,12.);
    tobogan.setEscala(0.1,1.,0.1);
    //asi queda en el piso

    tobogan_inc = new Objeto3D(2,2);
    tobogan_inc.initBuffers(2, 2,'tobogan', bezier);
    //tobogan_inc.setPosicion(5.,3.,12.);
    //tobogan_inc.setEscala(0.1,1.,0.1);
    //asi queda en el piso
    tobogan.setRotacion(0.,Math.PI/2,Math.PI*5/4,0.);
    tobogan.agregarHijo(tobogan_inc);
    tobogan_inc.setRotacion(0.,Math.PI/2,Math.PI/2,Math.PI*5/4);

}

function crearGeometriaEdificio(){
    var rect_invi =[];

    //TIPO PISO 1
    piso1 = new Objeto3D();
    piso1.setAncho(2);
    piso1.setLargo(2);
    piso1.setTextura('textureColumna');
    edif_vent1 = new Objeto3D();
    edif_vent1.setAncho(2);
    edif_vent1.setLargo(2);
    edif_vent1.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent1.setPosicion(0., 0., 15.);
    rect_invi.push([0.0, 0.0, 13.]);
    edif_vent2 = new Objeto3D();
    edif_vent2.setAncho(2);
    edif_vent2.setLargo(2);
    edif_vent2.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent1.agregarHijo(edif_vent2);
    edif_vent2.setPosicion(1., 0., 0.);
    rect_invi.push([1.0, 0.0, 13.]);
    edif_vent3 = new Objeto3D();
    edif_vent3.setAncho(2);
    edif_vent3.setLargo(2);
    edif_vent3.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent1.agregarHijo(edif_vent3);
    edif_vent3.setPosicion(2., 0., 0.);
    rect_invi.push([2.0, 0.0, 13.]);
    //giro para el otro lado
    edif_vent8 = new Objeto3D();
    edif_vent8.setAncho(2);
    edif_vent8.setLargo(2);
    edif_vent8.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent3.agregarHijo(edif_vent8);
    edif_vent8.setPosicion(1.,0.,0.);
    edif_vent8.setRotacion(0.,0.,Math.PI/2);
    rect_invi.push([5.0, 0.0, 15.]);
    edif_vent9 = new Objeto3D();
    edif_vent9.setAncho(2);
    edif_vent9.setLargo(2);
    edif_vent9.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent8.agregarHijo(edif_vent9);
    edif_vent9.setPosicion(1., 0., 0.);
    rect_invi.push([5.0, 0.0, 16.]);
    edif_vent10 = new Objeto3D();
    edif_vent10.setAncho(2);
    edif_vent10.setLargo(2);
    edif_vent10.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent8.agregarHijo(edif_vent10);
    edif_vent10.setPosicion(2., 0., 0.);
    rect_invi.push([5.0, 0.0, 17.]);
    edif_vent11 = new Objeto3D();
    edif_vent11.setAncho(2);
    edif_vent11.setLargo(2);
    edif_vent11.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent8.agregarHijo(edif_vent11);
    edif_vent11.setPosicion(3., 0., 0.);
    rect_invi.push([5.0, 0.0, 18.]);
    //cierro las ventanas
    edif_vent12 = new Objeto3D();
    edif_vent12.setAncho(2);
    edif_vent12.setLargo(2);
    edif_vent12.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent12.setRotacion(0.,0.,Math.PI/2);
    edif_vent12.setPosicion(1.,0.,0.);
    edif_vent11.agregarHijo(edif_vent12);
    edif_vent13 = new Objeto3D();
    edif_vent13.setAncho(2);
    edif_vent13.setLargo(2);
    edif_vent13.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent12.agregarHijo(edif_vent13);
    edif_vent13.setPosicion(1., 0., 0.);
    edif_vent14 = new Objeto3D();
    edif_vent14.setAncho(2);
    edif_vent14.setLargo(2);
    edif_vent14.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent12.agregarHijo(edif_vent14);
    edif_vent14.setPosicion(2., 0., 0.);
    rect_invi.push([3.0, 0.0, 21.]);
    rect_invi.push([2.0, 0.0, 21.]);
    rect_invi.push([1.0, 0.0, 21.]);
    //giro
    edif_vent4 = new Objeto3D();
    edif_vent4.setAncho(2);
    edif_vent4.setLargo(2);
    edif_vent4.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent1.agregarHijo(edif_vent4);
    edif_vent4.setRotacion(0.,0.,Math.PI/2);
    edif_vent5 = new Objeto3D();
    edif_vent5.setAncho(2);
    edif_vent5.setLargo(2);
    edif_vent5.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent4.agregarHijo(edif_vent5);
    edif_vent5.setPosicion(1., 0., 0.);
    edif_vent6 = new Objeto3D();
    edif_vent6.setAncho(2);
    edif_vent6.setLargo(2);
    edif_vent6.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent4.agregarHijo(edif_vent6);
    edif_vent6.setPosicion(2., 0., 0.);
    edif_vent7 = new Objeto3D();
    edif_vent7.setAncho(2);
    edif_vent7.setLargo(2);
    edif_vent7.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif_vent4.agregarHijo(edif_vent7);
    edif_vent7.setPosicion(3., 0., 0.);
    rect_invi.push([-2.0, 0.0, 19.]);
    rect_invi.push([-2.0, 0.0, 18.]);
    rect_invi.push([-2.0, 0.0, 17.]);
    rect_invi.push([-2.0, 0.0, 16.]);
    rect_invi.push([0.0, 0.0, 13.]);
    rect_invi.push([0.0, 0.0, 13.]);

    edif_vent1.setEscala(0.5,0.5,0.5);
    piso1.agregarHijo(edif_vent1);

    //envio los vertices del rectangulo invisible para obtener los nuevos con ruido Perlin
    var pto_ruido = []
    //console.log(rect_invi);
    pto_ruido = getPerlin(rect_invi, 16);
    //console.log(pto_ruido);

    //obtengo la bspline cuadratica con esos vertices ruidosos
    var bspline = [];
    bspline = devuelvoCurvaBspline(pto_ruido, 14);
    losa_piso1 = new Objeto3D(2,2);
    losa_piso1.initBuffers(4, 4,'losa', bspline);
    losa_piso1.setRotacion(Math.PI*5/6.,0., Math.PI/4.);
    losa_piso1.setPosicion(-5.5,0.,9.);
    losa_piso1.setEscala(0.45,0.6,0.45);
    piso1.agregarHijo(losa_piso1);
    tapa1_losa_piso1 = new Objeto3D(3,3);
    tapa1_losa_piso1.initBuffers(2, 2,'tapa');
    losa_piso1.agregarHijo(tapa1_losa_piso1);
    tapa2_losa_piso1 = new Objeto3D(3,3);
    tapa2_losa_piso1.initBuffers(2, 2,'tapa');
    tapa2_losa_piso1.setPosicion(0.,0.3,0.);
    losa_piso1.agregarHijo(tapa2_losa_piso1);

    //columnas
    //saco el punto medio para ubicar la columna
    var punto={
        "x":0.,
        "y":0.,
        "z":0.
        }		
    var cant=0;
    for (i=0; i< bspline.length; i++){
        punto.x+=bspline[i].x;
        punto.y+=bspline[i].y;
        punto.z+=bspline[i].z;
        cant++;
    }
    punto.x=punto.x/cant;
    punto.y=punto.y/cant;
    punto.z=punto.z/cant;

    losa_piso1_col1 = new Objeto3D(8,8);
    losa_piso1_col1.initBuffers(11, 16,'circulo');
    losa_piso1_col1.setPosicion(punto.x+2.4, punto.y-2.7, punto.z+2.4);
    losa_piso1_col1.setEscala(0.2,0.18,0.2);
    losa_piso1.agregarHijo(losa_piso1_col1);
    losa_piso1_col2 = new Objeto3D(8,8);
    losa_piso1_col2.initBuffers(11, 16,'circulo');
    losa_piso1_col2.setPosicion(punto.x-1.4, punto.y-2.7, punto.z-1.4);
    losa_piso1_col2.setEscala(0.2,0.18,0.2);
    losa_piso1.agregarHijo(losa_piso1_col2);
    losa_piso1_col3 = new Objeto3D(8,8);
    losa_piso1_col3.initBuffers(11, 16,'circulo');
    losa_piso1_col3.setPosicion(punto.x+2.4, punto.y-2.7, punto.z-1.4);
    losa_piso1_col3.setEscala(0.2,0.18,0.2);
    losa_piso1.agregarHijo(losa_piso1_col3);
    losa_piso1_col4 = new Objeto3D(8,8);
    losa_piso1_col4.initBuffers(11, 16,'circulo');
    losa_piso1_col4.setPosicion(punto.x-1.4, punto.y-2.7, punto.z+2.4);
    losa_piso1_col4.setEscala(0.2,0.18,0.2);
    losa_piso1.agregarHijo(losa_piso1_col4);

    //ascensor
    ascen1_piso1 = new Objeto3D(1,1);
    ascen1_piso1.initBuffers(2, 2,'cuadrado');
    ascen2_piso1 = new Objeto3D(1,1);
    ascen2_piso1.initBuffers(2, 2,'cuadrado');
    ascen3_piso1 = new Objeto3D(1,1);
    ascen3_piso1.initBuffers(2, 2,'cuadrado');
    ascen4_piso1 = new Objeto3D(1,1);
    ascen4_piso1.initBuffers(2, 2,'cuadrado');
    ascen1_piso1.agregarHijo(ascen2_piso1);
    ascen1_piso1.agregarHijo(ascen3_piso1);
    ascen1_piso1.agregarHijo(ascen4_piso1);
    ascen1_piso1.setEscala(0.5, 0.5, 0.5);
    ascen1_piso1.setPosicion(0.3, 0.3, 14.5);
    ascen2_piso1.setRotacion(0.,0.,Math.PI/2);
    ascen3_piso1.setPosicion(0.,0.,-1.);
    ascen4_piso1.setRotacion(0., 0.,-Math.PI/2);
    ascen4_piso1.setPosicion(1.,0.,-1.);
    piso1.agregarHijo(ascen1_piso1);


    //TIPO PISO 2
    rect_invi = [];
    piso2 = new Objeto3D();
    piso2.setAncho(2);
    piso2.setLargo(2);
    piso2.setTextura('textureMadera');
    edif2_vent1 = new Objeto3D();
    edif2_vent1.setAncho(2);
    edif2_vent1.setLargo(2);
    edif2_vent1.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent1.setPosicion(0.25, 0., 14.8);
    rect_invi.push([0.0, 0.0, 13.]);
    edif2_vent2 = new Objeto3D();
    edif2_vent2.setAncho(2);
    edif2_vent2.setLargo(2);
    edif2_vent2.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent1.agregarHijo(edif2_vent2);
    edif2_vent2.setPosicion(1., 0., 0.);
    rect_invi.push([1.0, 0.0, 13.]);
    //giro para el otro lado
    edif2_vent8 = new Objeto3D();
    edif2_vent8.setAncho(2);
    edif2_vent8.setLargo(2);
    edif2_vent8.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent2.agregarHijo(edif2_vent8);
    edif2_vent8.setPosicion(1.,0.,0.);
    edif2_vent8.setRotacion(0.,0.,Math.PI/2);
    rect_invi.push([5.0, 0.0, 15.]);
    edif2_vent9 = new Objeto3D();
    edif2_vent9.setAncho(2);
    edif2_vent9.setLargo(2);
    edif2_vent9.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent8.agregarHijo(edif2_vent9);
    edif2_vent9.setPosicion(1., 0., 0.);
    rect_invi.push([5.0, 0.0, 16.]);
    edif2_vent10 = new Objeto3D();
    edif2_vent10.setAncho(2);
    edif2_vent10.setLargo(2);
    edif2_vent10.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent8.agregarHijo(edif2_vent10);
    edif2_vent10.setPosicion(2., 0., 0.);
    rect_invi.push([5.0, 0.0, 17.]);
    //cierro las ventanas
    edif2_vent12 = new Objeto3D();
    edif2_vent12.setAncho(2);
    edif2_vent12.setLargo(2);
    edif2_vent12.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent12.setRotacion(0.,0.,Math.PI/2);
    edif2_vent12.setPosicion(1.,0.,0.);
    edif2_vent10.agregarHijo(edif2_vent12);
    edif2_vent13 = new Objeto3D();
    edif2_vent13.setAncho(2);
    edif2_vent13.setLargo(2);
    edif2_vent13.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent12.agregarHijo(edif2_vent13);
    edif2_vent13.setPosicion(1., 0., 0.);
    rect_invi.push([2.0, 0.0, 21.]);
    rect_invi.push([1.0, 0.0, 21.]);
    //giro
    edif2_vent4 = new Objeto3D();
    edif2_vent4.setAncho(2);
    edif2_vent4.setLargo(2);
    edif2_vent4.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent1.agregarHijo(edif2_vent4);
    edif2_vent4.setRotacion(0.,0.,Math.PI/2);
    edif2_vent5 = new Objeto3D();
    edif2_vent5.setAncho(2);
    edif2_vent5.setLargo(2);
    edif2_vent5.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent4.agregarHijo(edif2_vent5);
    edif2_vent5.setPosicion(1., 0., 0.);
    edif2_vent6 = new Objeto3D();
    edif2_vent6.setAncho(2);
    edif2_vent6.setLargo(2);
    edif2_vent6.initBuffers(anchoVidrio, altoVidrio-1.,'cuadrado');
    edif2_vent4.agregarHijo(edif2_vent6);
    edif2_vent6.setPosicion(2., 0., 0.);
    rect_invi.push([-2.0, 0.0, 18.]);
    rect_invi.push([-2.0, 0.0, 17.]);
    rect_invi.push([-2.0, 0.0, 16.]);
    rect_invi.push([0.0, 0.0, 13.]);
    rect_invi.push([0.0, 0.0, 13.]);

    edif2_vent1.setEscala(0.5,0.5,0.5);
    piso2.agregarHijo(edif2_vent1);

    //envio los vertices del rectangulo invisible para obtener los nuevos con ruido Perlin
    var pto_ruido = []
    //console.log(rect_invi);
    pto_ruido = getPerlin(rect_invi, 12);
    //console.log(pto_ruido);

    //obtengo la bspline cuadratica con esos vertices ruidosos
    var bspline = [];
    bspline = devuelvoCurvaBspline(pto_ruido, 10);
    
    //construyo la losa con esos vertices
    losa_piso2 = new Objeto3D(2,2);
    losa_piso2.initBuffers(2, 2,'losa', bspline);
    losa_piso2.setRotacion(Math.PI*5/6.,0., Math.PI/4.);
    losa_piso2.setPosicion(-5.5,0.,9.);
    losa_piso2.setEscala(0.45,0.6,0.45);
    //losa_piso1.setPosicion(10.,10.,10.);
    piso2.agregarHijo(losa_piso2);
    tapa1_losa_piso2 = new Objeto3D(3,3);
    tapa1_losa_piso2.initBuffers(2, 2,'tapa');
    losa_piso2.agregarHijo(tapa1_losa_piso2);
    tapa2_losa_piso2 = new Objeto3D(3,3);
    tapa2_losa_piso2.initBuffers(2, 2,'tapa');
    tapa2_losa_piso2.setPosicion(0.,0.1,0.);
    losa_piso2.agregarHijo(tapa2_losa_piso2);

        //columnas
    //saco el punto medio para ubicar la columna
    var punto={
        "x":0.,
        "y":0.,
        "z":0.
        }		
    var cant=0;
    for (i=0; i< bspline.length; i++){
        punto.x+=bspline[i].x;
        punto.y+=bspline[i].y;
        punto.z+=bspline[i].z;
        cant++;
    }
    punto.x=punto.x/cant;
    punto.y=punto.y/cant;
    punto.z=punto.z/cant;

    losa_piso2_col1 = new Objeto3D(8,8);
    losa_piso2_col1.initBuffers(11, 16,'circulo');
    losa_piso2_col1.setPosicion(punto.x+2., punto.y-2.7, punto.z+2.3);
    losa_piso2_col1.setEscala(0.2,0.18,0.2);
    losa_piso2.agregarHijo(losa_piso2_col1);
    losa_piso2_col2 = new Objeto3D(8,8);
    losa_piso2_col2.initBuffers(11, 16,'circulo');
    losa_piso2_col2.setPosicion(punto.x-1., punto.y-2.7, punto.z-1.3);
    losa_piso2_col2.setEscala(0.2,0.18,0.2);
    losa_piso2.agregarHijo(losa_piso2_col2);
    losa_piso2_col3 = new Objeto3D(8,8);
    losa_piso2_col3.initBuffers(11, 16,'circulo');
    losa_piso2_col3.setPosicion(punto.x+2., punto.y-2.7, punto.z-1.);
    losa_piso2_col3.setEscala(0.2,0.18,0.2);
    losa_piso2.agregarHijo(losa_piso2_col3);
    losa_piso2_col4 = new Objeto3D(8,8);
    losa_piso2_col4.initBuffers(11, 16,'circulo');
    losa_piso2_col4.setPosicion(punto.x-2., punto.y-2.7, punto.z+2.);
    losa_piso2_col4.setEscala(0.2,0.18,0.2);
    losa_piso2.agregarHijo(losa_piso2_col4);

    //ascensor
    ascen1_piso2 = new Objeto3D(1,1);
    ascen1_piso2.initBuffers(2, 2,'cuadrado');
    ascen2_piso2 = new Objeto3D(1,1);
    ascen2_piso2.initBuffers(2, 2,'cuadrado');
    ascen3_piso2 = new Objeto3D(1,1);
    ascen3_piso2.initBuffers(2, 2,'cuadrado');
    ascen4_piso2 = new Objeto3D(1,1);
    ascen4_piso2.initBuffers(2, 2,'cuadrado');
    ascen1_piso2.agregarHijo(ascen2_piso2);
    ascen1_piso2.agregarHijo(ascen3_piso2);
    ascen1_piso2.agregarHijo(ascen4_piso2);
    ascen1_piso2.setEscala(0.5, 0.5, 0.5);
    ascen1_piso2.setPosicion(0.3, 0.3, 14.5);
    ascen2_piso2.setRotacion(0.,0.,Math.PI/2);
    ascen3_piso2.setPosicion(0.,0.,-1.);
    ascen4_piso2.setRotacion(0., 0.,-Math.PI/2);
    ascen4_piso2.setPosicion(1.,0.,-1.);
    piso2.agregarHijo(ascen1_piso2);
    

    //tapa final del edificio
    tapa_edif = new Objeto3D(2,2);
    tapa_edif.initBuffers(2, 2,'losa', bspline);
    tapa_edif.setRotacion(Math.PI*5/6.,0., Math.PI/4.);
    tapa_edif.setPosicion(-5.5,6.,9.);
    tapa_edif.setEscala(0.45,0.6,0.45);
    tapa_edif.setTextura('textureLosa');
    //losa_piso1.setPosicion(10.,10.,10.);
    //piso2.agregarHijo(losa_piso2);
    tapa1_tapa_edif = new Objeto3D(3,3);
    tapa1_tapa_edif.initBuffers(2, 2,'tapa');
    tapa_edif.agregarHijo(tapa1_tapa_edif);
    tapa2_tapa_edif = new Objeto3D(3,3);
    tapa2_tapa_edif.initBuffers(2, 2,'tapa');
    tapa2_tapa_edif.setPosicion(0.,0.1,0.);
    tapa_edif.agregarHijo(tapa2_tapa_edif);

}


function crearGeometriaGrua(textureGrua, textureMadera){
    // GRUA
    // pieza A
    //ancho, largo
    grua_A1 = new Objeto3D(1,1);
    grua_A1.initBuffers(3, 2,'cuadrado');
    grua_A1.setTextura(textureGrua);
    grua_A1.setShader(shaderProgram);
    grua_A2 = new Objeto3D(1,1);
    grua_A2.initBuffers(3, 2,'cuadrado');
    grua_A2.setTextura(textureGrua);
    grua_A2.setShader(shaderProgram);
    grua_A3 = new Objeto3D(1,1);
    grua_A3.initBuffers(3, 2,'cuadrado');
    grua_A3.setTextura(textureGrua);
    grua_A3.setShader(shaderProgram);
    grua_A4 = new Objeto3D(1,1);
    grua_A4.initBuffers(3, 2,'cuadrado');
    grua_A4.setTextura(textureGrua);
    grua_A4.setShader(shaderProgram);
    grua_A1.agregarHijo(grua_A2);
    grua_A1.agregarHijo(grua_A3);
    grua_A1.agregarHijo(grua_A4);
    grua_A2.setRotacion(0.,0.,Math.PI/2);
    grua_A3.setPosicion(0.,0.,-1.);
    grua_A4.setRotacion(0., 0.,-Math.PI/2);
    grua_A4.setPosicion(1.,0.,-1.);

    // pieza B
    grua_B1 = new Objeto3D(1,1);
    grua_B1.initBuffers(4, 2,'cuadrado');
    grua_B1.setTextura(textureGrua);
    grua_B1.setShader(shaderProgram);
    grua_B2 = new Objeto3D(1,1);
    grua_B2.initBuffers(4, 2,'cuadrado');
    grua_B2.setTextura(textureGrua);
    grua_B2.setShader(shaderProgram);
    grua_B3 = new Objeto3D(1,1);
    grua_B3.initBuffers(4, 2,'cuadrado');
    grua_B3.setTextura(textureGrua);
    grua_B3.setShader(shaderProgram);
    grua_B4 = new Objeto3D(1,1);
    grua_B4.initBuffers(4, 2,'cuadrado');
    grua_B4.setTextura(textureGrua);
    grua_B4.setShader(shaderProgram);
    grua_B1.agregarHijo(grua_B2);
    grua_B1.agregarHijo(grua_B3);
    grua_B1.agregarHijo(grua_B4);
    grua_A1.agregarHijo(grua_B1);
    //muevo los hijos
    grua_B2.setPosicion(1.,0.,1.);
    grua_B2.setRotacion(0.,0., Math.PI/2.0);
    grua_B3.setPosicion(0.,0.,1.);
    grua_B4.setRotacion(0.,0.,-Math.PI/2.0);
    //se aplica a todos porque es el padre
    grua_B1.setPosicion(0.75,3.,-0.25);
    grua_B1.setEscala(-0.5,-0.5,-0.5);

    // pieza C es un circulo / cilindro
    grua_C1 = new Objeto3D(8,8);
    grua_C1.initBuffers(11, 16,'circulo');
    grua_C1.setEscala(0.5,0.1,0.5);
    grua_A1.agregarHijo(grua_C1);
    grua_C1.setPosicion(0.5,1.35,-0.5);
    grua_C1.setRotacion(Math.PI,0.,0.);
    grua_C1.setTextura(textureGrua);
    grua_C1.setShader(colorShader);

    // pieza D es la cabina
    grua_D1 = new Objeto3D(2,2);
    grua_D1.initBuffers(3, 3,'cabina');
    grua_D1.setTextura(textureGrua);
    grua_D1.setShader(shaderProgram);
    grua_D2 = new Objeto3D(2,2);
    grua_D2.initBuffers(3, 3,'cabina');
    grua_D2.setTextura(textureGrua);
    grua_D2.setShader(shaderProgram);
    grua_D3 = new Objeto3D(2,2);
    grua_D3.initBuffers(3, 2,'cuadrado');
    grua_D3.setTextura(textureGrua);
    grua_D3.setShader(shaderProgram);
    grua_D4 = new Objeto3D(2,2);
    grua_D4.initBuffers(3, 2,'cuadrado');
    grua_D4.setTextura(textureGrua);
    grua_D4.setShader(shaderProgram);
    grua_C1.agregarHijo(grua_D1);
    grua_C1.agregarHijo(grua_D2);
    grua_C1.agregarHijo(grua_D3);
    grua_C1.agregarHijo(grua_D4);

    grua_D4.setPosicion(0.7,25.,0.35);
    grua_D4.setRotacion(0.,0.,Math.PI/2);
    grua_D4.setEscala(0.7,1.0,0.5);
    grua_D3.setPosicion(-1.3,29.,0.35);
    grua_D3.setRotacion(0.,-Math.PI/2,Math.PI/2);
    grua_D3.setEscala(4.,0.35,1.);
    //cara de atras
    grua_D2.setEscala(1.,2.,0.);
    grua_D2.setRotacion(Math.PI/2,0., Math.PI);
    grua_D2.setPosicion(0.7,25.,-0.35);
    //cara de atras
    grua_D1.setEscala(1.,2.,0.);
    grua_D1.setRotacion(Math.PI/2,0., Math.PI);
    grua_D1.setPosicion(0.7,25.,0.35);

    //pieza E - es la barra acostada
    grua_E1 = new Objeto3D(2,2);
    grua_E1.initBuffers(2,2,'cuadrado');
    grua_C1.agregarHijo(grua_E1);
    grua_E1.setPosicion(0.,25.5,0.);
    grua_E1.setEscala(10,1,1.);
    grua_E1.setTextura(textureGrua);
    grua_E1.setShader(colorShader);

    //pieza F0 va a ser el contenedor para F y G, ya que como van con distintas escalas necesito que no se molesten
    //voy a hacerla tipo cilindro así se parece a la imagen original
    //F0 va a depender de la pieza C1 porque al rotar, necesito que se mueva también
    grua_F0 = new Objeto3D(1,1);
    grua_F0.initBuffers(1, 1,'circulo');
    grua_F0.setPosicion(5.,5.,5.);
    grua_F0.setEscala(0.3,-0.1,0.3);
    grua_F0.setRotacion(0.,Math.PI/2,0.);
    grua_F0.setTextura(textureMadera);
    grua_C1.agregarHijo(grua_F0);
    grua_F0.setShader(shaderProgram);

    //pieza F - cables
    grua_F1 = new Objeto3D(1,1);
    grua_F1.initBuffers(45, 2,'cuadrado');
    grua_F1.setPosicion(9.,3.75,0.);
    grua_F1.setEscala(0.,0.5,2.);
    grua_C1.agregarHijo(grua_F1);
    grua_F1.setTextura(textureGrua);
    grua_F1.setShader(colorShader);

    //F2, F3 y G0 no pueden depender de F1 porque cuando expandis el cable, cambias la escala y los afectas
    //por eso, dependen de F1a
    grua_F2 = new Objeto3D(2,2);
    grua_F2.initBuffers(4, 2,'cuadrado');
    grua_F2.setTextura(textureGrua);
    grua_F2.setShader(colorShader);
    grua_F3 = new Objeto3D(2,2);
    grua_F3.initBuffers(4, 2,'cuadrado');
    grua_F3.setTextura(textureGrua);
    grua_F3.setShader(colorShader);
    grua_F0.agregarHijo(grua_F2);
    grua_F0.agregarHijo(grua_F3);

    grua_F2.setPosicion(13.2,50.,4.);
    grua_F2.setRotacion(0.,0., -Math.PI/4);
    grua_F2.setEscala(2.,0.05,1.);

    grua_F3.setPosicion(13.2,50.,4.);
    grua_F3.setRotacion(0.,0., -Math.PI*3/4);
    grua_F3.setEscala(2.,0.05,1.);

    //pieza G - plataforma
    grua_G1 = new Objeto3D(2,2);
    grua_G1.initBuffers(3, 2,'cuadrado');
    grua_G1.setPosicion(11.,40.,5.5); //z es el alto, y profundidad, x es x esta cambiado porque depende de F0
    grua_G1.setEscala(4.,8.,8.);
    grua_G1.setTextura (textureMadera);
    grua_G1.setShader(shaderProgram);
    grua_F0.agregarHijo(grua_G1);

    //bajo toda la escena -1 en y y en -1 en x
    grua_A1.setPosicion(-2.,0.,0.);


}

//funciones para la grua
function expandirGrua(altura)
{
    if (altura < 0.08)
        grua_B1.setPosicion(0.75,altura + 3.,-0.25);
    grua_C1.setPosicion(0.5,altura+0.65,-0.5);
}

//NO ANDA!
function expandirCable(altura)
{
    //pongo 20 por poner un valor y probar
    grua_F1.setPosicion(0.,20.,0.);
    grua_F1.setEscala(0.,-altura,0.);
}

function rotacionCabina(alpha)
{   //rotación original
    grua_C1.setRotacion(0.,0.,alpha);
}

function cambiarVentanas(ancho, largo){

    if (ancho < 0)
        {ancho = ancho * (-1);}
    ancho = ancho - 2.5;

    if (largo < 0)
        {largo = largo * (-1);}
    largo = largo - 2.5;

    edif_vent1.setEscala(ancho, largo, 1.);
    
    edif2_vent1.setEscala(ancho, largo, 1.);

}
