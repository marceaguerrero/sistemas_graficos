<!doctype html>
<html>
<head>
    <title>Ejemplo 02 VBO</title>
    <style>
        body{ 
            background-color: grey; 
            font-family:Arial, Helvetica, sans-serif;                
        }
        canvas{ 
            background-color: white; 
        }
        textarea{ 
            background-color: black; 
            background-color: white;
        }
        #titulo{
            text-align:center;
        }
    </style>
</head>

<body>
    <div id="titulo">		

        <h1>Sistemas Gráficos</h1>
        
        <h2>Ejercicio Práctico</h2>

        <canvas id="my-canvas" width="900" height="500">
            Your browser does not support the HTML5 canvas element.
        </canvas>			

    </div>

    <!-- ************       vertex shader        ***************** !-->

    <script id="shader-vs" type="x-shader/x-vertex">
        attribute vec3 aVertexPosition;
        attribute vec3 aVertexColor;

        varying highp vec4 vColor;

        void main(void) {
            gl_Position = vec4(aVertexPosition, 1.0);
            vColor = vec4(aVertexColor, 1.0);
        }
    </script>

    <!-- ************       fragment shader       **************** !-->        

    <script id="shader-fs" type="x-shader/x-fragment">
        varying highp vec4 vColor;
        void main(void) {
            gl_FragColor = vColor;
        }
    </script>

    <script>

        var gl = null,
            canvas = null,
            glProgram = null,
            fragmentShader = null,
            vertexShader = null;
            
        var vertexPositionAttribute = null,
            trianglesVerticeBuffer = null,
            vertexColorAttribute = null,
            trianglesColorBuffer = null;
            
        function initWebGL(){

            canvas = document.getElementById("my-canvas");  
            try{
                gl = canvas.getContext("webgl");                    
            } catch(e) {
                alert("Error al obtener el contexto");
            }

            if(gl){

                setupWebGL();
                initShaders();
                setupBuffers();
                drawScene();    
                
            }else{    
                alert("Error: Su browser no soporta WebGL.");
            }   

        }
        
        function setupWebGL(){

            //set the clear color
            gl.clearColor(0.1, 0.1, 0.9, 1.0);     
            gl.clear(gl.COLOR_BUFFER_BIT);     
            
            gl.viewport(0, 0, canvas.width, canvas.height);

        }
        
        function initShaders(){

            //get shader source
            var fs_source = document.getElementById('shader-fs').innerHTML,
                vs_source = document.getElementById('shader-vs').innerHTML;

            //compile shaders    
            vertexShader = makeShader(vs_source, gl.VERTEX_SHADER);
            fragmentShader = makeShader(fs_source, gl.FRAGMENT_SHADER);
            
            //create program
            glProgram = gl.createProgram();
            
            //attach and link shaders to the program
            gl.attachShader(glProgram, vertexShader);
            gl.attachShader(glProgram, fragmentShader);
            gl.linkProgram(glProgram);

            if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
                alert("Unable to initialize the shader program.");
            }
            
            //use program
            gl.useProgram(glProgram);
            
        }
        
        function makeShader(src, type){

            //compile the vertex shader
            var shader = gl.createShader(type);
            gl.shaderSource(shader, src);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                alert("Error compiling shader: " + gl.getShaderInfoLog(shader));
            }
            return shader;
        }
        
        function setupBuffers(){

            var data = [

                -0.25, 0.75, 0.0,   // vértice 1, triangulo 1 naranja
                -0.25, 0.25, 0.0,   // vértice 2, triangulo 1
                -0.60, 0.25, 0.0,   // vértice 3, triangulo 1

                0.1,  0.5, 0.0,     // vértice 1, triangulo 2 naranja
                0.45, 0.5, 0.0,     // vértice 2, triangulo 2
                0.45, 0.95, 0.0,     // vértice 3, triangulo 2

                -0.25, 0.0, 0.0,    // vértice 1, triangulo 3 verde
                -0.25, -0.5, 0.0,   // vértice 2, triangulo 3
                -0.60, -0.5, 0.0,   // vértice 3, triangulo 3

                0.1,   -0.5, 0.0,   // vértice 1, triangulo 4 verde
                0.45,  -0.5, 0.0,   // vértice 2, triangulo 4
                0.45,  0.0, 0.0,    // vértice 3, triangulo 4

                0.1,  0.0, 0.0,   // vértice 1, triangulo 5 fucsia
                0.1,  -0.5, 0.0,   // vértice 2, triangulo 5
                0.45,  0.0, 0.0,    // vértice 3, triangulo 5

                0.1,  0.0, 0.0,   // vértice 1, triangulo  6 fucsia
                0.45,  0.5, 0.0,   // vértice 2, triangulo 6
                0.45,  0.0, 0.0,    // vértice 3, triangulo 6

                0.1,  0.0, 0.0,   // vértice 1, triangulo  7 fucsia
                0.1,  0.5, 0.0,   // vértice 2, triangulo 7
                0.45,  0.5, 0.0,    // vértice 3, triangulo 7

                -0.25, 0.0, 0.0,    // vértice 1, triangulo 8 fucsia
                -0.6, 0.0, 0.0,   // vértice 2, triangulo 8
                -0.60, -0.5, 0.0,   // vértice 3, triangulo 8

                -0.25, 0.0, 0.0,    // vértice 1, triangulo 9 fucsia
                -0.6, 0.0, 0.0,   // vértice 2, triangulo 9
                -0.25, 0.25, 0.0,   // vértice 3, triangulo 9

                -0.25, 0.25, 0.0,    // vértice 1, triangulo 10 fucsia
                -0.6, 0.0, 0.0,   // vértice 2, triangulo 10
                -0.60, 0.25, 0.0,   // vértice 3, triangulo 10

                -0.25, 0.0, 0.0,    // vértice 1, triangulo 11 blanco
                -0.25, -0.5, 0.0,   // vértice 2, triangulo 11
                0.1, 0.0, 0.0,   // vértice 3, triangulo 11

                  0.1, -0.5, 0.0,    // vértice 1, triangulo 12 blanco
                -0.25, -0.5, 0.0,   // vértice 2, triangulo 12
                  0.1, 0.0, 0.0   // vértice 3, triangulo 12
            ];
            
            trianglesVerticeBuffer = gl.createBuffer();                               // creo el buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);                   // activo el buffer
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);   // cargo los datos en el buffer 
        
            var color = [   
                1.0, 0.75, 0.15,      // r,g,b vertice 1
                1.0, 0.75, 0.15,
                1.0, 0.75, 0.15,
                
                1.0, 0.75, 0.15,      // r,g,b vertice 2
                1.0, 0.75, 0.15,
                1.0, 0.75, 0.15,

                0.25, 0.75, 0.15,      // r,g,b vertice 3
                0.25, 0.75, 0.15,
                0.25, 0.75, 0.15,

                0.25, 0.75, 0.15,      // r,g,b vertice 4
                0.25, 0.75, 0.15,
                0.25, 0.75, 0.15,

                1.0, 0.25, 0.75,      // r,g,b vertice 5
                1.0, 0.25, 0.75,
                1.0, 0.25, 0.75,

                1.0, 0.25, 0.75,      // r,g,b vertice 6
                1.0, 0.25, 0.75,
                1.0, 0.25, 0.75,

                1.0, 0.25, 0.75,      // r,g,b vertice 7
                1.0, 0.25, 0.75,
                1.0, 0.25, 0.75,

                1.0, 0.25, 0.75,      // r,g,b vertice 8
                1.0, 0.25, 0.75,
                1.0, 0.25, 0.75,

                1.0, 0.25, 0.75,      // r,g,b vertice 9
                1.0, 0.25, 0.75,
                1.0, 0.25, 0.75,

                1.0, 0.25, 0.75,      // r,g,b vertice 10
                1.0, 0.25, 0.75,
                1.0, 0.25, 0.75,

                1.0, 1.0, 1.0,      // r,g,b vertice 11
                1.0, 1.0, 1.0,
                1.0, 1.0, 1.0,

 
                1.0, 1.0, 1.0,      // r,g,b vertice 12
                1.0, 1.0, 1.0,
                1.0, 1.0, 1.0




            ];
            
            trianglesColorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);    
        }
        
        function drawScene(){

            vertexPositionAttribute = gl.getAttribLocation(glProgram, "aVertexPosition");
            gl.enableVertexAttribArray(vertexPositionAttribute);
            gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
            gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

            vertexColorAttribute = gl.getAttribLocation(glProgram, "aVertexColor");
            gl.enableVertexAttribArray(vertexColorAttribute);
            gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
            gl.vertexAttribPointer(vertexColorAttribute, 3, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0,36);
        }

        window.onload=initWebGL;

    </script>        
</body>
</html>
