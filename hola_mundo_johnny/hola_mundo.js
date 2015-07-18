var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {

    var rojo = new five.Led(3);
    var amarillo = new five.Led(5);
    var verde = new five.Led(6);

    var estado = -1;

    console.log("Iniciando semaforo...");

    this.loop(5000, function () {
        switch (estado) {
            case 0:
                verde.fadeOut();
                board.wait(500, function () {
                    rojo.fadeIn();
                });
                amarillo.off;
                break;
            case 1:
                rojo.fadeOut();
                board.wait(500, function () {
                    amarillo.fadeIn();
                });
                verde.off();
                break;
            case 2:
                rojo.off();
                amarillo.fadeOut();
                board.wait(500, function () {
                    verde.fadeIn();
                });
                estado = -1;
                break;
            default:
                rojo.off();
                amarillo.off();
                verde.off();
                break;
        }
        estado++;
    });

});
