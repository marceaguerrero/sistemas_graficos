class Cielo {
    constructor(gl, cieloShader, _projMatrix, texture) {
        this.gl = gl;
        this.shader = cieloShader; 
        this.projMatrix = _projMatrix;
        this.texture = texture;
        mat4=glMatrix.mat4;
    
        // Create a buffer for positions
        this.positionBuffer = this.gl.createBuffer();
        // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        // Put the positions in the buffer
        var positions = new Float32Array([
        -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
        ]);
        this.gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        this.draw=function(_viewMatrix, projectionMatrix) {
                this.gl.useProgram(this.shader);
                // Turn on the position attribute
                this.gl.enableVertexAttribArray(this.positionLocation);
                // Bind the position buffer.
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

                // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
                var size = 2;          // 3 components per iteration
                var type = gl.FLOAT;   // the data is 32bit floats
                var normalize = false; // don't normalize the data
                var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
                var offset = 0;        // start at the beginning of the buffer
                this.gl.vertexAttribPointer(
                    this.positionLocation, size, type, normalize, stride, offset);

                // We only care about direciton so remove the translation
                let viewMatrix = mat4.clone(_viewMatrix);

                viewMatrix[12] = 0;
                viewMatrix[13] = 0;
                viewMatrix[14] = 0;

                mat4.multiply(viewMatrix, projectionMatrix , viewMatrix);
                mat4.invert(viewMatrix, viewMatrix);

                // Set the uniforms
                this.gl.uniformMatrix4fv(
                    this.viewDirectionProjectionInverseLocation, false,
                    viewMatrix);

                // Tell the shader to use texture unit 0 for u_skybox
                this.gl.uniform1i(this.skyboxLocation, 0);

                // let our quad pass the depth test at 1.0
                this.gl.depthFunc(this.gl.LEQUAL);

                // Draw the geometry.
                this.gl.drawArrays(this.gl.TRIANGLES, 0, 1 * 6);


        }
    }}
