/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.atacando = false;
  this.direccion = direccion;
  Enemigo.call(this,sprite, x, y, ancho, alto, velocidad, rangoMov)
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if (this.direccion == 'v') {
    this.y -= this.velocidad;
  } else if(this.direccion == 'h'){
    //Sino, hace otro movimiento
    this.x -= this.velocidad;
  }

  /* En esta parte lo que hacemos es invertir la direccion horizontal y vertical si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }
 
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.velocidad *= -1;
  }
}

ZombieConductor.prototype.atacar = function(jugador){
  jugador.perderVidas(5) 
}

ZombieConductor.prototype.comenzarAtaque = function (jugador) {
  if (!this.atacando) {
    this.atacar(jugador);
  }
  this.atacando = true;
}

ZombieConductor.prototype.dejarDeAtacar = function () {
  this.atacando = false;
}