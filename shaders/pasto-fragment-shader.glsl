        precision mediump float;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        
        vec3 FragPos;
        vec3 position;

        uniform vec3 uAmbientColor;         // color de luz ambiente
        uniform vec3 uDirectionalColor;	    // color de luz direccional
        uniform vec3 uLightPosition;        // posiciÃ³n de la luz
        
        uniform bool uUseLighting;          // usar iluminacion si/no

        uniform sampler2D uSampler;
        
        vec3 lightColor;

        void main(void) {
            float specularStrength = 0.5;

            vec3 lightColor=vec3(0.0, 1.0, 0.0);
            vec3 lightDirection= normalize(uLightPosition - FragPos);
            
            //diffuse lighting 
            vec3 norm = normalize(vNormal);
            float diff = max(dot(norm, lightDirection), 0.0);
            vec3 diffuse = diff * lightColor;

            //specular lighting
            vec3 viewDir = normalize(position - FragPos);
            vec3 reflectDir = reflect(-lightDirection, norm); 
            float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
            vec3 specular = specularStrength * spec * lightColor;  

            vec3 color=((uAmbientColor+diffuse + specular) +uDirectionalColor*max(dot(vNormal,lightDirection), 0.0));
           //color.x=vUv.x;
           //color.y=vUv.y;
           //color.z=0.0;
            //color.x=vNormal.x;
            //color.y=vNormal.y;

            if (uUseLighting)
                gl_FragColor = vec4(color,1.0);
            else
                gl_FragColor = vec4(0.7,0.7,0.7,1.0);
            
        }