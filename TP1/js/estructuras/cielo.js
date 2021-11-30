function dibujo_cielo (gl, shader, matrizProyeccion, texture, viewMatrix) {

        mat4=glMatrix.mat4;
    
        // Create a buffer for positions
        positionBuffer = gl.createBuffer();
        // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        // Put the positions in the buffer
        var positions = new Float32Array([
        -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        gl.useProgram(shader);
                // Turn on the position attribute
        gl.enableVertexAttribArray(shader.positionLocation);
                              // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 3 components per iteration
        var type = gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(
                shader.positionLocation, size, type, normalize, stride, offset);

        // We only care about direciton so remove the translation
        viewMatrix[12] = 0;
        viewMatrix[13] = 0;
        viewMatrix[14] = 0;

        mat4.multiply(viewMatrix, matrizProyeccion , viewMatrix);
        mat4.invert(viewMatrix, viewMatrix);

        // Set the uniforms
        gl.uniformMatrix4fv(
            shader.viewDirectionProjectionInverseLocation, false,
            viewMatrix);

        // Tell the shader to use texture unit 0 for u_skybox
        gl.uniform1i(shader.skyboxLocation, 0);

        // let our quad pass the depth test at 1.0
        gl.depthFunc(gl.LEQUAL);

        //gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);

        // Draw the geometry.
        gl.drawArrays(gl.TRIANGLES, 0, 6 * 6);


        }
