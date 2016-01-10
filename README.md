[![Build Status](https://travis-ci.org/plepers/nanogl-state.svg?branch=master)](https://travis-ci.org/plepers/nanogl-state)


# nanogl-state-helpers

Collection of modules extending `nanogl-state/config`. They create shorthands for commons webgl state configuration :

 - blend modes
 - stencil operations




#### blend

Add the following methods to `nanogl-state/config`

 - `blendAlpha`    : setup gl context for basic alpha blending.
 - `blendAdd`      : additive blending. (ONE, ONE)
 - `blendMultiply` : multiply blending. (ZERO, SRC_COLOR)
 - `blendErase`    : Erases the background based on the alpha value of the fragments (ZERO, 1-SRC_ALPHA)
 - `blendMask`     : Applies the alpha value of fragments to the background. (ZERO, SRC_ALPHA)

```javascript
var state = new GLState( gl );

var blendAddCfg = state.config().blendAdd()

//...

function renderLoop(){

  state.now( blendAddCfg );
  drawSomePrimitives();

}

// equivalent to

function renderLoop(){

  gl.enable( gl.BLEND );
  gl.blendFunc( gl.ONE, gl.ONE );

  drawSomePrimitives();

  gl.disable( gl.BLEND );
  gl.blendFunc( gl.ONE, gl.ZERO );

}


```

#### stencil

Add the following methods to `nanogl-state/config`

 - `quickStencilMask`    : setup to draw primitive in stencil buffer, when depth test pass. disable color and depth buffer writemask
 - `quickStencilTest`    : setup to draw primitive, testing framents against value wrote by 'quickStencilMask'.


```javascript
var state = new GLState( gl );

var maskCfg = state.config().quickStencilMask()
var testCfg = state.config().quickStencilTest()

//...

function renderLoop(){

  state.now( maskCfg );
  drawMaskingPrimitives(); // draw mask

  state.now( testCfg );
  drawMaskedPrimitives(); // draw masked

}


// equivalent to

function renderLoop(){

  gl.enable( gl.STENCIL_TEST )
  gl.stencilFunc( gl.ALWAYS, 1, 0xFF )
  gl.stencilOp( gl.KEEP, gl.KEEP, gl.REPLACE )
  gl.stencilMask( 0xFF )
  gl.colorMask( false, false, false, false )
  gl.depthMask( false );

  drawMaskingPrimitives();

  gl.colorMask( true, true, true, true )
  gl.depthMask( true );
  gl.stencilMask( 0 )
  gl.stencilFunc( gl.EQUAL, 1, 0xFF )

  drawMaskedPrimitives();

  gl.disable( gl.STENCIL_TEST )
  gl.stencilFunc( gl.ALWAYS, 0, 0xFF )
  gl.stencilOp( gl.KEEP, gl.KEEP, gl.KEEP )

}


```