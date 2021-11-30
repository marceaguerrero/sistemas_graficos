
        precision mediump float;
        varying vec3 R;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 n_eye;
        varying vec4 eyePos;
        varying vec3 viewCoords;

        // The texture.
        uniform samplerCube u_skybox;
        
        // The position of the camera
        uniform vec3 u_worldCameraPosition;
        uniform vec3 cameraPos;

        uniform vec3 uAmbientColor;         // color de luz ambiente
        uniform vec3 uDirectionalColor;	    // color de luz direccional
        uniform vec3 uLightPosition;        // posiciÃƒÂ³n de la luz
        
        uniform bool uUseLighting;          // usar iluminacion si/no

        uniform sampler2D uSampler;

        uniform float luzAmbiente;   

        uniform mat3 invVT;    

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

            
            vec3 worldNormal = normalize(vNormal);
            //vec3 eyeToSurfaceDir = normalize(vWorldPosition - u_worldCameraPosition);
            vec3 eyeToSurfaceDir = normalize(vWorldPosition - cameraPos);
            vec3 direction = reflect(eyeToSurfaceDir,worldNormal);
            
            vec3 color_cielo = textureCube(u_skybox, direction).rgb;

            //otro caso view-source:https://math.hws.edu/eck/cs424/notes2013/webgl/skybox-and-reflection/skybox-and-env-map.html
            //vec3 V = -viewCoords;
            //vec3 R = 2.0 * dot(V,vNormal) * vNormal - V;
            //R = invVT * R; 
            //color_cielo = textureCube(u_skybox, R).xyz;
   
            //otro caso que calculo R en el vertex https://courses.engr.illinois.edu/cs418/fa2017/418-Lecture%2027%20-%20Environment%20Mapping.pdf

            
            vec3 color = (u_Ambient_color + u_Diffuse_color + u_Specular_color) * (color_cielo);

            gl_FragColor = vec4(color,1.0);

        }