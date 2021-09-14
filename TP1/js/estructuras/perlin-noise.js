  var vec3=glMatrix.vec3;
  var vec4=glMatrix.vec4;

  function getPerlin(rect_invi, cantidad){
    var resultado = []
    var delta;        
    var primer_punto;

    //console.log(rect_invi);
    for (i=0; i< cantidad; i++)
    {
          delta = applyPerlin(rect_invi[i][0], rect_invi[i][1],rect_invi[i][2]);
          //delta = Math.abs(delta)  ;
          resultado.push([rect_invi[i][0]+delta, rect_invi[i][1],rect_invi[i][2]+delta]);
          if (!primer_punto)
          //guardo el primero
              { primero = ([rect_invi[i][0]+delta, rect_invi[i][1],rect_invi[i][2]+delta]);
                primer_punto = 1.;}
    }
        //el ultimo tiene que ser igual al primero
    resultado.push(primero);
    resultado.push(primero);
    //console.log(resultado);
    return resultado;

//    function fixedrandom(p){
 //     const seed = 43758.5453123;
  //    return p+(Math.abs(Math.sin(p)) * seed)%1;
   // }

  }

  function applyPerlin(x,y,z){

           var PERLIN_YWRAPB = 4;
           var PERLIN_YWRAP = 1 << PERLIN_YWRAPB;
           var PERLIN_ZWRAPB = 8;
           var PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB;
           var PERLIN_SIZE = 4095;
           var perlin_octaves = 4; // default to medium smooth
           var perlin_amp_falloff = 0.5; // 50% reduction/octave
           var scaled_cosine = function scaled_cosine(i) {
             return 0.5 * (1.0 - Math.cos(i * Math.PI));
           };
           var perlin; // will be initialized lazily by noise() or noiseSeed()
             if (perlin == null) {
               perlin = new Array(PERLIN_SIZE + 1);
               for (var i = 0; i < PERLIN_SIZE + 1; i++) {
                 perlin[i] = Math.random();
               }
             }
 
             if (x < 0) {
               x = -x;
             }
             if (y < 0) {
               y = -y;
             }
             if (z < 0) {
               z = -z;
             }
 
             var xi = Math.floor(x),
               yi = Math.floor(y),
               zi = Math.floor(z);
             var xf = x - xi;
             var yf = y - yi;
             var zf = z - zi;
             var rxf, ryf;
 
             var r = 0;
             var ampl = 0.5;
 
             var n1, n2, n3;
 
             for (var o = 0; o < perlin_octaves; o++) {
               var of = xi + (yi << PERLIN_YWRAPB) + (zi << PERLIN_ZWRAPB);
 
               rxf = scaled_cosine(xf);
               ryf = scaled_cosine(yf);
 
               n1 = perlin[of & PERLIN_SIZE];
               n1 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n1);
               n2 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE];
               n2 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n2);
               n1 += ryf * (n2 - n1);
 
               of += PERLIN_ZWRAP;
               n2 = perlin[of & PERLIN_SIZE];
               n2 += rxf * (perlin[(of + 1) & PERLIN_SIZE] - n2);
               n3 = perlin[(of + PERLIN_YWRAP) & PERLIN_SIZE];
               n3 += rxf * (perlin[(of + PERLIN_YWRAP + 1) & PERLIN_SIZE] - n3);
               n2 += ryf * (n3 - n2);
 
               n1 += scaled_cosine(zf) * (n2 - n1);
 
               r += n1 * ampl;
               ampl *= perlin_amp_falloff;
               xi <<= 1;
               xf *= 2;
               yi <<= 1;
               yf *= 2;
               zi <<= 1;
               zf *= 2;
 
               if (xf >= 1.0) {
                 xi++;
                 xf--;
               }
               if (yf >= 1.0) {
                 yi++;
                 yf--;
               }
               if (zf >= 1.0) {
                 zi++;
                 zf--;
               }
             }
             return r;
           }
