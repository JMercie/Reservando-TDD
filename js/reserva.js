function reserva (horario, cantidadPersonas, precioPorPersona, codigoDescuento) {
        this.horario = horario;
        this.cantidadPersonas = cantidadPersonas;
        this.precioPorPersona = precioPorPersona;
        this.codigoDescuento = codigoDescuento;
    };

    reserva.prototype.precioBaseReserva = function (){
        return this.cantidadPersonas * this.precioPorPersona;
    };


    function descuentos(reserva) {
        var descuentos = 0;
    
        if(reserva.cantidadPersonas >= 4 && reserva.cantidadPersonas <= 6) {
            descuentos += reserva.precioBaseReserva() * 0.05;
        }
        if(reserva.cantidadPersonas >= 7 && reserva.cantidadPersonas <= 8){
            descuentos += reserva.precioBaseReserva() * 0.10;
        }
        if(reserva.cantidadPersonas > 8){
            descuentos += reserva.precioBaseReserva() * 0.15;
        }
    
        switch (reserva.codigoDescuento) {
            case "DES15":
                    descuentos += reserva.precioBaseReserva() * 0.15;
                break;
            case "DES200":
                descuentos += 200;
                break;
            case "DES1":
                descuentos += reserva.precioPorPersona;
                break;
        }
    
        return descuentos;
    
    }
    
    function adicionales (reserva) {
        var adicionales = 0;
    
        // logica para adicionales segun hora de reserva //
        if(reserva.horario.getHours() >= 13 && reserva.horario.getHours() <= 14) {
            adicionales += reserva.precioBaseReserva() * 0.05;
        }
        if(reserva.horario.getHours() >= 20 && reserva.horario.getHours() <= 21){
            adicionales += reserva.precioBaseReserva() * 0.05;
        }
        if(reserva.horario.getDay() ==5 || reserva.horario.getDay() == 6 || reserva.horario.getDay() == 0) {
            adicionales += reserva.precioBaseReserva() * 0.10;
        }
    
        return adicionales;
    }

    reserva.prototype.precioReservaTotal =  function(){
        return this.precioBaseReserva() + adicionales(this) - descuentos(this) ;
    };




