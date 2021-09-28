        precision mediump float;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        

        uniform vec3 uAmbientColor;         // color de luz ambiente
        uniform vec3 uDirectionalColor;	    // color de luz direccional
        uniform vec3 uLightPosition;        // posiciÃ³n de la luz
        
        uniform bool uUseLighting;          // usar iluminacion si/no

        uniform sampler2D uSampler;

        uniform vec4 fColor;

        void main(void) {
            

            vec4 textureColor = texture2D(uSampler, vUv);
            vec3 lightDirection= normalize(uLightPosition - vec3(vWorldPosition));
            
            vec3 color=(uAmbientColor+uDirectionalColor*max(dot(vNormal,lightDirection), 0.0)); //*textureColor.xyz
            float ambientStrength = 0.0;
            //vec3 ambient = ambientStrength * color;

            //vec3 result = ambient * objectColor;
            //FragColor = vec4(result, 1.0);

            // gris de la grua
            // vec3 colorB = vec3(0.500,0.50,0.50);
            // azul como para los vidrios
            // vec3 colorB = vec3(0.30,0.30,1.0);
            //gl_FragColor = vec4(colorB,1.0);
            //gl_FragColor = ambientStrength * fColor;
            gl_FragColor =  fColor;
        }