

/*

    Tareas:
    ------

    1) Modificar a función "generarSuperficie" para que tenga en cuenta los parametros filas y columnas al llenar el indexBuffer
       Con esta modificación deberían poder generarse planos de N filas por M columnas

    2) Modificar la funcion "dibujarMalla" para que use la primitiva "triangle_strip"

    3) Crear nuevos tipos funciones constructoras de superficies

        3a) Crear la función constructora "Esfera" que reciba como parámetro el radio

        3b) Crear la función constructora "TuboSenoidal" que reciba como parámetro la amplitud de onda, longitud de onda, radio del tubo y altura.
        (Ver imagenes JPG adjuntas)
        
        
    Entrega:
    -------

    - Agregar una variable global que permita elegir facilmente que tipo de primitiva se desea visualizar [plano,esfera,tubosenoidal]
    
*/


var superficie3D;
var mallaDeTriangulos;

var filas=80; //toma 1 fila mas
var columnas=80; //toma 1 columna mas



function crearGeometria(){
        
    superficie3D=new TuboSenoidal(0.2, 5, 1, 2);
    //superficie3D=new Esfera(1);
    //superficie3D=new Plano(2,2);
    mallaDeTriangulos=generarSuperficie(superficie3D,filas,columnas);
    
}

function dibujarGeometria(){

    dibujarMalla(mallaDeTriangulos);

}


function TuboSenoidal(amplitud_onda, long_onda, radio_inicial, altura){

    this.getPosicion=function(u,v){

        radio=radio_inicial+Math.sin(v*Math.PI*5)*amplitud_onda
        var x = Math.sin(u*Math.PI*2);
        var y = v*altura;
        var z = Math.cos(u*Math.PI*2);
        return [x*radio,y,z*radio];
    }

    this.getNormal=function(u,v){
        return [0,1,0];
    }


    this.getCoordenadasTextura=function(u,v){
        return [u,v];
    }
}

function Esfera(radio){

    this.getPosicion=function(u,v){

        var x = Math.sin(v * Math.PI*2) * Math.cos(u * Math.PI*2); 
        var y = Math.cos(v * Math.PI*2);   
        var z = Math.sin(v * Math.PI*2) * Math.sin(u * Math.PI*2); 
        return [x*radio,y*radio,z*radio];
    }

    this.getNormal=function(u,v){
        return [0,radio,0];
    }

    this.getCoordenadasTextura=function(u,v){
        return [u,v];
    }
}

function Plano(ancho,largo){

    this.getPosicion=function(u,v){

        var x=(u-0.5)*ancho;
        var z=(v-0.5)*largo;
        return [x,0,z];
    }

    this.getNormal=function(u,v){
        return [0,1,0];
    }

    this.getCoordenadasTextura=function(u,v){
        return [u,v];
    }
}




function generarSuperficie(superficie,filas,columnas){
    
    positionBuffer = [];
    normalBuffer = [];
    uvBuffer = [];

    for (var i=0; i <= filas; i++) {
        for (var j=0; j <= columnas; j++) {

            var u=j/columnas;
            var v=i/filas;

            var pos=superficie.getPosicion(u,v);

            positionBuffer.push(pos[0]);
            positionBuffer.push(pos[1]);
            positionBuffer.push(pos[2]);

            var nrm=superficie.getNormal(u,v);

            normalBuffer.push(nrm[0]);
            normalBuffer.push(nrm[1]);
            normalBuffer.push(nrm[2]);

            var uvs=superficie.getCoordenadasTextura(u,v);

            uvBuffer.push(uvs[0]);
            uvBuffer.push(uvs[1]);

        }
    }

    // Buffer de indices de los triángulos
    
    //indexBuffer=[0,1,2,2,1,3]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
    //console.log(indexBuffer);
    indexBuffer=[];  
    valor = 0;
    for(i=1;i<=filas;i++)
    {
        valor = valor + 1;       
        for (var j=1; j <= columnas; j++) {
            indexBuffer.push(valor-1);
            indexBuffer.push(valor);
            indexBuffer.push(valor + columnas);
            indexBuffer.push(valor-1);
            indexBuffer.push(valor + columnas);
            indexBuffer.push(valor + columnas + 1);
            valor = valor + 1;       
            console.log(indexBuffer);
        }
        indexBuffer.push(columnas*i + (i-1));
        indexBuffer.push(valor + columnas );
               
        console.log(indexBuffer);
    }
        //F 1 C 2
    //indexBuffer=[0,1,3,1,3,4,1,4,2,4,2,5]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
    //F 1 C 3
    //indexBuffer=[0,1,4,1,4,5,1,5,2,5,2,6,2,6,3,6,3,7]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
    //F 1 C 4
    //indexBuffer=[0,1,5,1,5,6,1,6,2,6,2,7,2,7,3,7,3,8,3,8,4,8,4,9]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
    //F 2 C 2
    //indexBuffer=[0,1,3,   1,3, 4,1,4,2,    4,2,  5,5,3,  3,6,4,6,   4,7,4,7,   5,7,5,8 ]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
    //indexBuffer=  [0,1,3,0, 1,3, 4,1,4,2,1,  4,2, 5,5,3,  3,6,4,  7, 6,4,7,4,7,5, 8, 7,5,8 ]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
    //indexBuffer=[0,1,3,0,3,4,1,4,2,1,2,5,5,3,  3,6,4,6,4,7,4,7,5,7,5,8,6 ]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!
        //F 1 C 2
    //indexBuffer=[0,1,3,0,3,4,1,2,4,1,4,5,2]; // Estos valores iniciales harcodeados solo dibujan 2 triangulos, REMOVER ESTA LINEA!

    //f1 c 3
    //indexBuffer=[0,1,4,0,4,5,1,2,5,1,5,6,2,3,6,2,6,7,3]
    //console.log(indexBuffer);

    console.log(positionBuffer);


    // Creación e Inicialización de los buffers

    webgl_position_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, webgl_position_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positionBuffer), gl.STATIC_DRAW);
    webgl_position_buffer.itemSize = 3;
    webgl_position_buffer.numItems = positionBuffer.length / 3;

    webgl_normal_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, webgl_normal_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalBuffer), gl.STATIC_DRAW);
    webgl_normal_buffer.itemSize = 3;
    webgl_normal_buffer.numItems = normalBuffer.length / 3;

    webgl_uvs_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, webgl_uvs_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvBuffer), gl.STATIC_DRAW);
    webgl_uvs_buffer.itemSize = 2;
    webgl_uvs_buffer.numItems = uvBuffer.length / 2;


    webgl_index_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webgl_index_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexBuffer), gl.STATIC_DRAW);
    webgl_index_buffer.itemSize = 1;
    webgl_index_buffer.numItems = indexBuffer.length;

    return {
        webgl_position_buffer,
        webgl_normal_buffer,
        webgl_uvs_buffer,
        webgl_index_buffer
    }
}

function dibujarMalla(mallaDeTriangulos){
    
    // Se configuran los buffers que alimentaron el pipeline
    gl.bindBuffer(gl.ARRAY_BUFFER, mallaDeTriangulos.webgl_position_buffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, mallaDeTriangulos.webgl_position_buffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, mallaDeTriangulos.webgl_uvs_buffer);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, mallaDeTriangulos.webgl_uvs_buffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, mallaDeTriangulos.webgl_normal_buffer);
    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, mallaDeTriangulos.webgl_normal_buffer.itemSize, gl.FLOAT, false, 0, 0);
       
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mallaDeTriangulos.webgl_index_buffer);


    if (modo!="wireframe"){
        gl.uniform1i(shaderProgram.useLightingUniform,(lighting=="true"));                    
        /*
            Aqui es necesario modificar la primitiva por triangle_strip
        */
        gl.drawElements(gl.TRIANGLE_STRIP, mallaDeTriangulos.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
    }
    
    if (modo!="smooth") {
        gl.uniform1i(shaderProgram.useLightingUniform,false);
        gl.drawElements(gl.LINE_STRIP, mallaDeTriangulos.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
    }
 
}

