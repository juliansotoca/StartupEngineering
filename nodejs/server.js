var http = require("http");
var url = require("url");

function iniciar(route, handle) {
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Peticion para "+pathname+" Recibida.");

	route(handle, pathname);

	response.writeHead(200, {"Content-type": "text/html"});
	response.write("Hola Mundo");
	response.end();
    }
    http.createServer(onRequest).listen(8080);
    console.log("servidor iniciado");
}
exports.iniciar = iniciar;
