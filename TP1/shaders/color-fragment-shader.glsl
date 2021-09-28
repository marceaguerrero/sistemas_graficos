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
        uniform float luzAmbiente;   

        void main(void) {
            

            highp vec3 directionalLightColor = vec3(1, 1, 1);
            float specularStrength = 0.5;
            float brightness = 32.0;
            vec3 lightColor = vec3(1.0,1.0,1.0);
            
            vec4 textureColor = texture2D(uSampler, vUv);
            vec3 lightDirection= normalize(uLightPosition);
            
            //luzAmbiente se modifica del menu
            vec3 u_Ambient_color=  luzAmbiente * lightColor;
            
            //la luz difusa se calcula
            float diff = max(dot(vNormal, lightDirection), 0.0);
            vec3 u_Diffuse_color = diff * directionalLightColor * lightColor;
            
            //la luz especular se calcula
            vec3 viewDir = normalize(uLightPosition - vWorldPosition);
            vec3 reflectDir = reflect(-lightDirection, vNormal); 
            float spec = pow(max(dot(viewDir, reflectDir), 0.0), brightness);
            vec3 u_Specular_color = specularStrength * spec * directionalLightColor * lightColor; 
    
            gl_FragColor = vec4((u_Ambient_color + u_Diffuse_color + u_Specular_color), 1.0) * (fColor);

            //gl_FragColor =  fColor;
        }