function crearCuadrado(){
    vertices=[];
    vertices.push([0.0, 0.0, 0.0]);
    vertices.push([1.0, 0.0, 0.0]);        
    return vertices;
}

function crearCabina(){
    vertices=[];
    vertices.push([0.0, 0.0, 0.0]);
    vertices.push([1.0, 0.0, 0.0]);        
    vertices.push([2.0, 0.0, 0.0]);        
    vertices.push([0.0, 1.0, 0.0]);
    vertices.push([1.0, 1.0, 0.0]);        
    vertices.push([2.0, 1.0, 0.0]); 
    //vertices.push([0.0, 2.0, 0.0]);        
    vertices.push([1.0, 2.0, 0.0]);        
    vertices.push([2.0, 2.0, 0.0]);        
    return vertices;
}

function crearCirculo(radio, y){
    vertices=[];
    segmentosTotales=16;
    deltaAngulo=2*Math.PI/segmentosTotales;
    for (var ang=0; ang<2*Math.PI;ang=ang+deltaAngulo){
        x=Math.cos(ang)*radio;
        z=Math.sin(ang)*radio;
        vertices.push([x,y,z]);
    }
    return vertices;
}

function crearRecorridoCuadrado(x,y,z){
    P=vec3.create();
    T=vec3.create();
    N=vec3.create();
    B=vec3.create();
    P=vec3.fromValues(x, y, z);
    N=vec3.fromValues(0.0, 1.0, 0.0);
    T=vec3.fromValues(0.0, 0.0, 1.0);
    vec3.cross(B,N, T);
    matrizNivel=mat4.fromValues(N[0], N[1], N[2], 0.0, B[0], B[1], B[2], 0.0, T[0], T[1], T[2], 0.0, P[0], P[1], P[2], 1.0)   
    return matrizNivel;
}

function crearRecorridoCirculo(x,y,z){
    P=vec3.create();
    T=vec3.create();
    N=vec3.create();
    B=vec3.create();
    P=vec3.fromValues(x, y, z);
    N=vec3.fromValues(0.0, 0.0, 1.0);
    T=vec3.fromValues(0.0, 1.0, 0.0);
    vec3.cross(B,N, T);
    matrizNivel=mat4.fromValues(N[0], N[1], N[2], 0.0, B[0], B[1], B[2], 0.0, T[0], T[1], T[2], 0.0, P[0], P[1], P[2], 1.0)   
    return matrizNivel;
}
