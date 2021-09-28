        precision mediump float;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        

        uniform vec3 uAmbientColor;         // color de luz ambiente
        uniform vec3 uDirectionalColor;	    // color de luz direccional
        uniform vec3 uLightPosition;        // posiciÃ³n de la luz
        
        uniform bool uUseLighting;          // usar iluminacion si/no

        uniform sampler2D uSampler;

        void main(void) {
            

            vec4 textureColor = texture2D(uSampler, vUv);
            vec3 lightDirection= normalize(uLightPosition - vec3(vWorldPosition));
            
          
            float ambientStrength = 0.0;

            vec3 color=(uAmbientColor+uDirectionalColor*max(dot(vNormal,lightDirection), 0.0)); //*textureColor.xyz
 
            //gl_FragColor = vec4(vUv,0.0, 1.0);
            //gl_FragColor = vec4(color,1.0);

            //gl_FragColor = ambientStrength * textureColor;
            gl_FragColor =  textureColor;
        }