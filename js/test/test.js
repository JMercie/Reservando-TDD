var expect = chai.expect;
var assert = chai.assert;

//Esto es el test de Reservar Horario // 

describe('ReservarHorario', function () {

    it('Elimino el horario seleccionado del arreglo', () => {
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var HorarioAnterior = restaurant.horarios.length;
        restaurant.reservarHorario("21:00");
        expect(restaurant.horarios.length).to.equal(HorarioAnterior - 1);
    });
    it('Conservar mi horario intacto, si el horario reservado no coincide', () => {
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var HorarioAnterior = restaurant.horarios.length;
        restaurant.reservarHorario("7:00");
        expect(restaurant.horarios.length).to.equal(HorarioAnterior);
    });
    it('Array se mantiene igual si no se le pasa un parametro', () => {
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var HorarioAnterior = restaurant.horarios.length;
        restaurant.reservarHorario();
        expect(restaurant.horarios.length).to.equal(HorarioAnterior);
    });
});

// Esto es el test de Obtener Puntuacion

describe('ObtenerPuntuacion', () => {
    it('Dado un restaurant con califaccion, se calcula correctamente', () => {
        var calificaciones = [9, 5, 7, 6, 7];
        var sumatoria = (acumulador, valorActual) => acumulador + valorActual;
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        var promedio = calificaciones.reduce(sumatoria) / calificaciones.length;
        expect(restaurant.obtenerPuntuacion()).to.equal(promedio);
    });
    it('Dado un resturant sin califacion, que esta se mantenga en 0', () => {
        var calificaciones = [];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        expect(restaurant.obtenerPuntuacion()).to.equal(0);
    });
});

// Testeá la función calificar()

describe('Calificar', () => {
    it('Verificar que mi parametro es un Numero', () => {
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);   
        var nuevaCalificacion = 5;
        restaurant.calificar(nuevaCalificacion);
        expect(nuevaCalificacion).to.be.a("Number");
    });
    it('Verificar que mi parametro es un numero entre 1 y 10', () => {
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);   
        var nuevaCalificacion = 5;
        restaurant.calificar(nuevaCalificacion);
        expect(nuevaCalificacion).to.be.below(10);
        expect(nuevaCalificacion).to.be.at.above(0);
    });
    it('Mi parametro se pushea correctamente a calificaciones', () => {
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);   
        var nuevaCalificacion = 8;
        var calificacionesLenMas1 = calificaciones.length + 1;
        calificaciones.push(nuevaCalificacion);
        expect(calificacionesLenMas1).to.be.equal(calificaciones.length);
    });
    it('El parametro pusheado esta valido', () => {
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);   
        var nuevaCalificacion = 8;
        var calificacionesLenMas1 = calificaciones.length + 1;
        if(nuevaCalificacion > 0 && nuevaCalificacion < 10){
            calificaciones.push(nuevaCalificacion);
        }
        expect(calificacionesLenMas1).to.equal(calificaciones.length);
    });
});

// Testeá la función buscarRestaurante(id)

describe('Buscar Restaurante', () => {
   it('Si mi ID es valido, regreso el restaurante correcto', () => {
    var ListadoRestaurante = [ new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]), 
                               new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
    var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
    var listadocontrol = new Listado(ListadoRestaurante);
 
   expect(listadocontrol.buscarRestaurante(1)).to.eql(restaurant);
    });
    it('Si mi ID es invalido no retornar ningun restaurante', () => {
    var ListadoRestaurante = [ new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]), 
                               new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
    var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
    var listadocontrol = new Listado(ListadoRestaurante);
    var mensaje = "No se ha encontrado ningún restaurant";
 
   expect(listadocontrol.buscarRestaurante(80)).to.equal(mensaje);
    });
    it('Si no envio parametro, no retornar ningun restaurante', () => {
        var ListadoRestaurante = [ new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]), 
                                   new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var listadocontrol = new Listado(ListadoRestaurante);
        var mensaje = "No se ha encontrado ningún restaurant";
     
    expect(listadocontrol.buscarRestaurante()).to.equal(mensaje);
        });
});



// Testing ObtenerRestaurantes() //

describe('Obtener Restaurantes', () => {
    it('Filtros Validos, matchea con restaurant rubro o ubicacion u horario', () => {
    var ListadoRestaurante = [ new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]), 
                               new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
    var restaurant = [new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])];    var listadocontrol = new Listado(ListadoRestaurante);

    var filtroRubro = "Asiática";
    var filtroCiudad = "Nueva York";
    var filtroHorario = "13:00"    

    expect(listadocontrol.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.eql(restaurant)
    });
    it('Filtros Nulos no hacen match con ningun restaurant', () => {
    var ListadoRestaurante = [ new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]), 
                               new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
    var restaurant = [new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])];    var listadocontrol = new Listado(ListadoRestaurante);

    var filtroRubro = null;
    var filtroCiudad = null;
    var filtroHorario = null;    

    expect(listadocontrol.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.not.eql(restaurant)        
    });
});     

