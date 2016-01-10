var GLConfig = require( 'nanogl-state/config' );

GLConfig.prototype.quickStencilMask = function(  ){
  this.enableStencil( true )
      .stencilFunc( GL_ALWAYS, 1, 0xFF )
      .stencilOp( GL_KEEP, GL_KEEP, GL_REPLACE )
      .stencilMask( 0xFF )
      .colorMask( false, false, false, false )
      .depthMask( false );
}


GLConfig.prototype.quickStencilTest = function(  ){
  this.enableStencil( true )
      .stencilFunc( GL_EQUAL, 1, 0xFF )
}