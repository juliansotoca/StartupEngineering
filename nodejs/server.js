var http = require("http");
function iniciar() {
    function onRequest(request, response) {
	console.log("Peticion Recibida.");
	response.writeHead(200, {"Content-type": "text/html"});
	response.write("Hola Mndo");
	response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("servidor iniciado");
}
exports.iniciar = iniciar;
