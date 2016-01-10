var TestDraw = require( './utils/testdraw' );
var testContext = require( './utils/TestContext' );

require( '../blend' );
var GLState = require( 'nanogl-state' );


var testdraw =new TestDraw();

describe( "blend", function(){

  afterEach(function(){
    testdraw.reset()
  })
  it( "blendAlpha", function(){
    testdraw.draw( GLState.config().blendAlpha() );
    testContext.testPixel( 32, 32, 0x80404000 );
  });

  it( "blendAdd", function(){
    testdraw.hColor1 = 0xFF000000;
    testdraw.draw( GLState.config().blendAdd() );
    testContext.testPixel( 32, 32, 0xff408000 );
  });

  it( "blendMultiply", function(){

    testdraw.vColor1 = 0xFFFF0000;
    testdraw.vColor2 = 0xFF0080FF;

    testdraw.hColor1 = 0xFF800020;
    testdraw.hColor2 = 0xFFFFFFFF;

    testdraw.draw( GLState.config().blendMultiply() );
    testContext.testPixel( 12, 12, 0xff7b050f );
    testContext.testPixel( 12, 50, 0xff20143c );
    testContext.testPixel( 50, 12, 0xffb71429 );
    testContext.testPixel( 50, 50, 0xff3050a4 );
  });

});
