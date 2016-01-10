
var Program = require( 'nanogl/program' );
var GLState = require( 'nanogl-state' );
var expect  = require( 'expect.js' );


var testContext = require( './TestContext' );
var gl = testContext.getContext();


function rgba( hex ){
  var r = ( (hex >>> 16 ) & 0xFF        )/0xFF;
  var g = ( (hex >>> 8 ) & 0xFF         )/0xFF;
  var b = ( hex & 0xFF                  )/0xFF;
  var a = ( (hex >>> 24 ) & 0xFF        )/0xFF;
  return [r, g, b, a];
}


function TestDraw( ){
  this.gl = gl;
  this.state = new GLState( gl );

  this.prgV = new Program( gl );
  this.prgV.compile(
    require( '../glsl/fillgrad.vert' ),
    require( '../glsl/fillgradV.frag' )
  )


  this.prgH = new Program( gl );
  this.prgH.compile(
    require( '../glsl/fillgrad.vert' ),
    require( '../glsl/fillgradH.frag' )
  )

  this.reset();

}

TestDraw.prototype = {

  reset : function(){

    this.hColor1 = 0
    this.hColor2 = 0xFF00FF00

    this.vColor1 = 0
    this.vColor2 = 0xFFFF0000
  },

  draw : function( cfg ){

    this.prgV.bind()
    this.prgV.uColor1( rgba(this.vColor1) );
    this.prgV.uColor2( rgba(this.vColor2) );
    testContext.drawProgram( this.prgV );

    this.state.now( cfg );

    this.prgH.bind()
    this.prgH.uColor1( rgba(this.hColor1) );
    this.prgH.uColor2( rgba(this.hColor2) );
    testContext.drawProgram( this.prgH, false );

  }

}


module.exports = TestDraw;