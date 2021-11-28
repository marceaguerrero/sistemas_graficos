function initTextures(gl,imagenTextura){
    textureColumna = loadTexture(gl, imagenTextura[0]);
    textureGrua = loadTexture(gl, imagenTextura[1]);
    textureLosa = loadTexture(gl, imagenTextura[2]);
    textureMadera = loadTexture(gl, imagenTextura[3]);
    texturePasto = loadTexture(gl, imagenTextura[4]);
    textureTierra = loadTexture(gl, imagenTextura[5]);
    textureRoca = loadTexture(gl, imagenTextura[6]);
     

    return textureColumna, textureGrua, textureLosa, textureMadera, texturePasto, textureTierra, textureRoca ;
}

function getShader(gl,code,type) {

    var shader;

    if (type == "fragment")
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    else // "vertex"
        shader = gl.createShader(gl.VERTEX_SHADER);

    gl.shaderSource(shader, code);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log('Error en la compilación del shader: ', gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;
}


function getShaderSource(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return (req.status == 200) ? req.responseText : null;
};

function initShaders(gl, vs, fs) {

    var shader;

    //Shader de texturas
    var fragmentShader= getShader(gl, vs ,"vertex");
    var vertexShader= getShader(gl, fs ,"fragment");

    shader = gl.createProgram();
    gl.attachShader(shader, vertexShader);
    gl.attachShader(shader, fragmentShader);
    gl.linkProgram(shader);

    if (!gl.getProgramParameter(shader, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

 
    shader.vertexPositionAttribute = gl.getAttribLocation(shader, "aPosition");
    shader.vertexNormalAttribute = gl.getAttribLocation(shader, "aNormal");
    shader.textureCoordAttribute = gl.getAttribLocation(shader, "aUv");

/*
    según lei esto se hace en el momento del render, ahí fue al Objeto3D

    gl.useProgram(shader);

    gl.enableVertexAttribArray(shader.vertexPositionAttribute);
    gl.enableVertexAttribArray(shader.textureCoordAttribute);
    gl.enableVertexAttribArray(shader.vertexNormalAttribute);
*/
    shader.pMatrixUniform = gl.getUniformLocation(shader, "uPMatrix");
    shader.mMatrixUniform = gl.getUniformLocation(shader, "uMMatrix");
    shader.vMatrixUniform = gl.getUniformLocation(shader, "uVMatrix");
    shader.nMatrixUniform = gl.getUniformLocation(shader, "uNMatrix");
    shader.samplerUniform = gl.getUniformLocation(shader, "uSampler");
    shader.useLightingUniform = gl.getUniformLocation(shader, "uUseLighting");
    shader.ambientColorUniform = gl.getUniformLocation(shader, "uAmbientColor");
    shader.frameUniform = gl.getUniformLocation(shader, "time");
    shader.lightingDirectionUniform = gl.getUniformLocation(shader, "uLightPosition");
    shader.directionalColorUniform = gl.getUniformLocation(shader, "uDirectionalColor");
    shader.luzAmbienteUniform = gl.getUniformLocation(shader, "luzAmbiente");

    shader.samplerUniform = gl.getUniformLocation(shader, "uSampler0");
    shader.samplerUniform = gl.getUniformLocation(shader, "uSampler1");
    shader.samplerUniform = gl.getUniformLocation(shader, "uSampler2");

    return shader
    }

    function cargarUniform(gl, shader, lightPosition) {
            gl.useProgram(shader);
            // Se inicializan las variables asociadas con la Iluminación
            gl.uniform1f(shader.frameUniform, time/10.0 );
            gl.uniform3f(shader.ambientColorUniform, 0.6, 0.6, 0.6 );
            gl.uniform3f(shader.directionalColorUniform, 1., 0., 0.);
            gl.uniform1i(shader.useLightingUniform,(lighting=="true"));
            
            gl.uniform3fv(shader.lightingDirectionUniform, lightPosition);
            
            gl.uniform1f(shader.luzAmbienteUniform, luzAmbiente);

            return shader;
    };

    function loadTexture(gl, path) {

        var texture = gl.createTexture();
        var image = new Image();

        image.onload = function() {
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
        image.src = path;
        texture.image = image;
        return texture;
        }
