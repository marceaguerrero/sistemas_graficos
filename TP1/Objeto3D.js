class Objeto3D {


    constructor(){
        var positionBuffer ;
        var normalBuffer;
        var uvBuffer ;
        var indexBuffer ;
        positionBuffer = [];
        normalBuffer = [];
        uvBuffer = [];
        indexBuffer = [];
        mat4=glMatrix.mat4;
        mat3=glMatrix.mat3;
        vec3=glMatrix.vec3;
        vec4=glMatrix.vec4;
        this.ancho;
        this.largo;
        this.matrizModelado=mat4.create();
        mat4.identity(this.matrizModelado);
        this.normalMatrix = mat3.create();
        this.posicion=vec3.create();
        this.rotacion=vec3.create();
        //this.rotacion=[0.,0.,0.];

        this.escala=vec3.create();
        this.hijos=[];

        this.webgl_position_buffer = null;
        this.webgl_normal_buffer = null;
        this.webgl_texture_coord_buffer = null;
        this.webgl_index_buffer = null;

        this.agregarHijo=function(h) {this.hijos.push(h)}
        //this.quitarHijo=function(h) { … }

        this.setAncho=function(x) {
            this.ancho = x;
            }

        this.setLargo=function(x) {
            this.largo = x;
            }
    
        this.setPosicion=function(x,y,z) {
            this.posicion = [x,y,z];
            }

        this.setRotacion=function(angulo, x,y,z) {
            //guardo el ángulo en cada posicion
            this.rotacion = [x,y,z];
            }

        this.setEscala=function(x,y,z) {
            //guardo la escala
            this.escala = [x,y,z];
            }

        //agrego esto pero no lo uso, hasta deberia evaluar si va
        this.getPosicion=function(u,v){
            var x=(u-0.5)*this.ancho;
            var z=(v-0.5)*this.largo;
            return [x,z,0];
        }
        //agrego esto pero no lo uso, hasta deberia evaluar si va
        this.getNormal=function(u,v){
            return [0,1,0];
        }
        //agrego esto pero no lo uso, hasta deberia evaluar si va
        this.getCoordenadasTextura=function(i,j, filas, columnas){
            return [1.0/filas * i,1.0/columnas * j];
        }

        this.setMatrixUniforms=function() {
            gl.uniformMatrix4fv(shaderProgram.mMatrixUniform, false, this.matrizModelado);
            gl.uniformMatrix4fv(shaderProgram.vMatrixUniform, false, matrizVista);
            gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, matrizProyeccion);

            mat3.fromMat4(this.normalMatrix,this.matrizModelado); // normalMatrix= (inversa(traspuesta(matrizModelado)));

            mat3.invert(this.normalMatrix, this.normalMatrix);
            mat3.transpose(this.normalMatrix, this.normalMatrix);

            gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, this.normalMatrix);
            }

        this.initBuffers = function(filas,columnas, tipo, losa){

            var matIdentidad = [];
            var mat = mat3.create();
            mat3.identity(mat);
            matIdentidad.push(mat);
            if (tipo == 'cuadrado')
                {vertices = crearCuadrado();
                //uso dos niveles
                for (j=0; j<filas; j++){
                    y = j*1.0;
                    matrizNivel = crearRecorridoCuadrado(0.0, y, 0.0);
                    var translado;
                    translado = vec3.create();
                    translado = vec3.fromValues(matrizNivel[12],matrizNivel[13],matrizNivel[14]);
                    //guardo en el position buffer los vertices
                    for (i=0; i< vertices.length; i++){
                        var pos = vec3.create();
                        vec3.copy(pos,vertices[i]);
                        vec3.add(pos,translado, pos);
                        positionBuffer.push(pos[0]);
                        positionBuffer.push(pos[1]);
                        positionBuffer.push(pos[2]);

                        var u=j/columnas;
                        var v=i/filas;
                        var nrm=this.getNormal(u,v);
                        normalBuffer.push(nrm[0]);
                        normalBuffer.push(nrm[1]);
                        normalBuffer.push(nrm[2]);
                        var uvs=this.getCoordenadasTextura(i,j, filas, columnas);
                        uvBuffer.push(uvs[0]);
                        uvBuffer.push(0.2);
                        uvBuffer.push(uvs[1]);
                        var u = (i / (filas - 1));
                        var v = (j / (columnas - 1));
                        uvBuffer.push(v);
                        uvBuffer.push(u);
                    }
                }
                }
            if (tipo == 'circulo')
                {
                var radio;
                radio = 0.25;
                var y = 15.;
                vertices = crearCirculo(radio, y);
                //uso dos niveles
                for (j=0; j<filas; j++){
                    y = j*1.0;
                    matrizNivel = crearRecorridoCirculo(0.0, y, 0.0);
                    translado = vec3.create();
                    translado = vec3.fromValues(matrizNivel[12],matrizNivel[13],matrizNivel[14]);
                    //guardo en el position buffer los vertices
                    for (i=0; i< columnas; i++){
                        var pos = vec3.create();
                        vec3.copy(pos,vertices[i]);
                        vec3.add(pos,translado, pos);

                        positionBuffer.push(pos[0] );
                        positionBuffer.push(pos[1] );
                        positionBuffer.push(pos[2] );

                        var u=j/columnas;
                        var v=i/filas;
                        var nrm=this.getNormal(u,v);
                        normalBuffer.push(nrm[0]);
                        normalBuffer.push(nrm[1]);
                        normalBuffer.push(nrm[2]);
                        var uvs=this.getCoordenadasTextura(i,j, filas, columnas);
                        uvBuffer.push(uvs[0]);
                        uvBuffer.push(0.2);
                        uvBuffer.push(uvs[1]);
                        var u = (i / (filas - 1));
                        var v = (j / (columnas - 1));
                        uvBuffer.push(v);
                        uvBuffer.push(u);
                    }
                }
                }

                if (tipo == 'cabina')
                {vertices = crearCabina();
                //uso dos niveles
                for (j=0; j<filas; j++){
                    y = j*1.0;
                    //if (tipo == 'cuadrado')
                    matrizNivel = crearRecorridoCuadrado(0.0, y, 0.0);
                    translado = vec3.create();
                    translado = vec3.fromValues(matrizNivel[12],matrizNivel[13],matrizNivel[14]);
                    //guardo en el position buffer los vertices
                    for (i=0; i< vertices.length; i++){
                        var pos = vec3.create();
                        vec3.copy(pos,vertices[i]);
                        vec3.add(pos,translado, pos);
                        positionBuffer.push(pos[0]);
                        positionBuffer.push(pos[1]);
                        positionBuffer.push(pos[2]);

                        var u=j/columnas;
                        var v=i/filas;
                        var nrm=this.getNormal(u,v);
                        normalBuffer.push(nrm[0]);
                        normalBuffer.push(nrm[1]);
                        normalBuffer.push(nrm[2]);
                        var uvs=this.getCoordenadasTextura(i,j, filas, columnas);
                        uvBuffer.push(uvs[0]);
                        uvBuffer.push(0.2);
                        uvBuffer.push(uvs[1]);
                        var u = (i / (filas - 1));
                        var v = (j / (columnas - 1));
                        uvBuffer.push(v);
                        uvBuffer.push(u);
                    
                }
                }}

                if (tipo == 'losa')
                {
                //no lo estoy usando
                /*var centro={
                    "x":0.,
                    "y":0.,
                    "z":0.
                    }		
                centro = losa[losa.length-1];
                console.log(centro);
                */
                vertices = losa;
                //le saco el centro
                vertices.pop();
                //a partir de 4 dibuja bien el borde
                //filas = 4;
                //console.log(vertices);
                for (j=0; j<filas; j++){
                    //si lo multiplico por j tiene altura
                    y = 0.1*j;
                    matrizNivel = crearRecorridoLosa(0., y, 0.);
                    translado = vec3.create();
                    translado = vec3.fromValues(matrizNivel[12],matrizNivel[13],matrizNivel[14]);
                    for (i=0; i< vertices.length; i++){
                        var que;
                        var onda;
                        var che;
                        que = vertices[i].x;
                        onda = vertices[i].y;
                        che = vertices[i].z;
                        pos = vec3.create();
                        pos = vec3.fromValues(que,onda,che);
                        vec3.add(pos,translado, pos);
                        positionBuffer.push(pos[0]);
                        positionBuffer.push(pos[1]);
                        positionBuffer.push(pos[2]);

                        var u=j/columnas;
                        var v=i/filas;
                        var nrm=this.getNormal(u,v);
                        normalBuffer.push(nrm[0]);
                        normalBuffer.push(nrm[1]);
                        normalBuffer.push(nrm[2]);
                        var uvs=this.getCoordenadasTextura(i,j, filas, columnas);
                        uvBuffer.push(uvs[0]);
                        uvBuffer.push(0.2);
                        uvBuffer.push(uvs[1]);
                        var u = (i / (filas - 1));
                        var v = (j / (columnas - 1));
                        uvBuffer.push(v);
                        uvBuffer.push(u);
                    }
                }
                //console.log(positionBuffer);
                columnas = vertices.length;
                }
               if (tipo == 'tapa')
               {
               var punto={
                    "x":0.,
                    "y":0.,
                    "z":0.
                    }		
                var cant=0;
                for (i=0; i< vertices.length; i++){
                    punto.x+=vertices[i].x;
                    punto.y+=vertices[i].y;
                    punto.z+=vertices[i].z;
                    cant++;
                }
                punto.x=punto.x/cant;
                punto.y=punto.y/cant;
                punto.z=punto.z/cant;

                //  lleno el buffer de posiciones de la tapa
                for (i=0; i< vertices.length; i++){
                    positionBuffer.push(punto.x);
                    positionBuffer.push(punto.y);
                    positionBuffer.push(punto.z);
                    positionBuffer.push(vertices[i].x);
                    positionBuffer.push(vertices[i].y);
                    positionBuffer.push(vertices[i].z);

                    var u=j/columnas;
                    var v=i/filas;
                    var nrm=this.getNormal(u,v);
                    normalBuffer.push(nrm[0]);
                    normalBuffer.push(nrm[1]);
                    normalBuffer.push(nrm[2]);
                    normalBuffer.push(nrm[0]);
                    normalBuffer.push(nrm[1]);
                    normalBuffer.push(nrm[2]);
                    var uvs=this.getCoordenadasTextura(i,j, filas, columnas);
                    uvBuffer.push(uvs[0]);
                    uvBuffer.push(0.2);
                    uvBuffer.push(uvs[1]);
                    uvBuffer.push(uvs[0]);
                    uvBuffer.push(0.2);
                    uvBuffer.push(uvs[1]);
                    var u = (i / (filas - 1));
                    var v = (j / (columnas - 1));
                    uvBuffer.push(v);
                    uvBuffer.push(u);
                    uvBuffer.push(v);
                    uvBuffer.push(u);
            }
                //console.log(punto);
                //console.log(positionBuffer);
                
                columnas = vertices.length;

            }

                if (tipo == 'tobogan')
                {vertices = losa;
                //uso tantos niveles como vertices
                //filas = vertices.length;
                filas = 2;
                for (j=0; j<filas; j++){
                    y = j*1.0;
                    matrizNivel = crearRecorridoCuadrado(y, y, y);
                    translado = vec3.create();
                    translado = vec3.fromValues(matrizNivel[12],matrizNivel[13],matrizNivel[14]);
                    //guardo en el position buffer los vertices
                    for (i=0; i< vertices.length; i++){
                        var que;
                        var onda;
                        var che;
                        que = vertices[i].x;
                        onda = vertices[i].y;
                        che = vertices[i].z;
                        pos = vec3.create();
                        pos = vec3.fromValues(que,onda,che);
                        vec3.add(pos,translado, pos);
                        positionBuffer.push(pos[0]);
                        positionBuffer.push(pos[1]);
                        positionBuffer.push(pos[2]);

                        var u=j/columnas;
                        var v=i/filas;
                        var nrm=this.getNormal(u,v);
                        normalBuffer.push(nrm[0]);
                        normalBuffer.push(nrm[1]);
                        normalBuffer.push(nrm[2]);
                        var uvs=this.getCoordenadasTextura(i,j, filas, columnas);
                        uvBuffer.push(uvs[0]);
                        uvBuffer.push(0.2);
                        uvBuffer.push(uvs[1]);
                        var u = (i / (filas - 1));
                        var v = (j / (columnas - 1));
                        uvBuffer.push(v);
                        uvBuffer.push(u);
                    }
                }
                //filas = 4;
                columnas = vertices.length;
                }

            // Buffer de indices de los triangulos
            //indexBuffer=[];
            for (var i=0;i<filas-1;i++){
                    indexBuffer.push(i*columnas);
                    for (var j=0;j<columnas-1;j++){
                        indexBuffer.push(i*columnas+j);
                        indexBuffer.push((i+1)*columnas+j);
                        indexBuffer.push(i*columnas+j+1);
                        indexBuffer.push((i+1)*columnas+j+1);
                    }
                    indexBuffer.push((i+1)*columnas+columnas-1);
            }

        // Creación e Inicialización de los buffers a nivel de OpenGL
            this.webgl_normal_buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_normal_buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalBuffer), gl.STATIC_DRAW);
            this.webgl_normal_buffer.itemSize = 3;
            this.webgl_normal_buffer.numItems = normalBuffer.length / 3;

            this.webgl_texture_coord_buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvBuffer), gl.STATIC_DRAW);
            this.webgl_texture_coord_buffer.itemSize = 2;
            this.webgl_texture_coord_buffer.numItems = uvBuffer.length / 2;

            this.webgl_position_buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positionBuffer), gl.STATIC_DRAW);
            this.webgl_position_buffer.itemSize = 3;
            this.webgl_position_buffer.numItems = positionBuffer.length / 3;

            this.webgl_index_buffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexBuffer), gl.STATIC_DRAW);
            this.webgl_index_buffer.itemSize = 1;
            this.webgl_index_buffer.numItems = indexBuffer.length;
        }

        this.actualizarMatrizModelado = function(){
            mat4.identity(this.matrizModelado);
            if(this.posicion[0]!=0. || this.posicion[1]!=0. || this.posicion[2]!=0.)
                mat4.translate(this.matrizModelado, this.matrizModelado, this.posicion);
            if(this.rotacion[0]!=0. && typeof this.rotacion[0] !== "undefined")
                mat4.rotate(this.matrizModelado, this.matrizModelado, this.rotacion[0], [1.0,0.,0.]);
            if(this.rotacion[1]!=0. && typeof this.rotacion[1] !== "undefined")
                mat4.rotate(this.matrizModelado, this.matrizModelado, this.rotacion[1], [0.,1.0,0.]);
            if(this.rotacion[2]!=0. && typeof this.rotacion[2] !== "undefined")
                mat4.rotate(this.matrizModelado, this.matrizModelado, this.rotacion[2], [0.,0.,1.0]);
            if(this.escala[0]!=0. || this.escala[1]!=0. || this.escala[2]!=0.)
                mat4.scale(this.matrizModelado, this.matrizModelado, this.escala);

        }

        this.draw = function(matPadre){
                this.actualizarMatrizModelado();
                // concatenamos las transformaciones padre/hijo
                if(matPadre){
                    mat4.multiply(this.matrizModelado,matPadre,this.matrizModelado);
                    }

                if (this.webgl_position_buffer && this.webgl_index_buffer){
                // dibujamos la malla de triángulos con WebGL
                // si el objeto tiene geometría asociada
                    this.setMatrixUniforms();

                    // Se configuran los buffers que alimentaron el pipeline
                    gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_position_buffer);
                    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.webgl_position_buffer.itemSize, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

                    gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_texture_coord_buffer);
                    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, this.webgl_texture_coord_buffer.itemSize, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

                    gl.bindBuffer(gl.ARRAY_BUFFER, this.webgl_normal_buffer);
                    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, this.webgl_normal_buffer.itemSize, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);

                    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.webgl_index_buffer);
                    
                            // Specify the texture to map onto the faces.
                    gl.useProgram(shaderProgram);
       
                    // Tell WebGL we want to affect texture unit 0
                    gl.activeTexture(gl.TEXTURE0);
                    // Bind the texture to texture unit 0
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    // Tell the shader we bound the texture to texture unit 0
                    gl.uniform1i(shaderProgram.samplerUniform, 0);
                                            
                    if (modo!="wireframe"){
                        gl.uniform1i(shaderProgram.useLightingUniform,(lighting=="true"));
                        gl.drawElements(gl.TRIANGLE_STRIP, this.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
                    }

                    if (modo!="smooth") {
                        gl.uniform1i(shaderProgram.useLightingUniform,false);
                        gl.drawElements(gl.LINE_STRIP, this.webgl_index_buffer.numItems, gl.UNSIGNED_SHORT, 0);
                    }
                }


                for (var i=0;i<this.hijos.length;i++){
                    //le mando la matriz de modelado del padre
                    this.hijos[i].draw(this.matrizModelado);}
        }

    }

}