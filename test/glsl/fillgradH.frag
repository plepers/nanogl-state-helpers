
precision highp float;

varying vec2 vTexCoord;

uniform vec4 uColor1;
uniform vec4 uColor2;

void main(void){
  gl_FragColor = mix( uColor1, uColor2, vTexCoord.x );
}