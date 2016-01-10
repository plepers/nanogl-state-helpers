var GLConfig = require( 'nanogl-state/config' ),
    Proto    = GLConfig.prototype;



Proto.blendAlpha = function(){
  this.enableBlend( true );
  this.blendFunc( ~~GL_SRC_ALPHA, ~~GL_ONE_MINUS_SRC_ALPHA );
  return this;
};


Proto.blendAdd = function(){
  this.enableBlend( true );
  this.blendFunc( ~~GL_ONE, ~~GL_ONE );
  return this;
};


Proto.blendMultiply = function(){
  this.enableBlend( true );
  this.blendFunc( ~~GL_ZERO, ~~GL_SRC_COLOR );
  return this;
};


Proto.blendErase = function(){
  this.enableBlend( true );
  this.blendFunc( ~~GL_ZERO, ~~GL_ONE_MINUS_SRC_ALPHA );
  return this;
};


Proto.blendMask = function(){
  this.enableBlend( true );
  this.blendFunc( ~~GL_ZERO, ~~GL_SRC_ALPHA );
  return this;
};