var fs = require('fs');
var outfile = "prime.txt";
var prime = [];
var count = 1;
var i = 2;
var number = 2;

while (count <=100 ) {
	isPrime= true;
	sqrt = Math.sqrt(number);
	for ( var i = 2; i<= sqrt; i++) {
		if((number % i ) == 0) { isPrime = false; }
	}
	if ( isPrime ) {
		//console.log("numero: " + number+ "contador: "+ count)
		count = prime.push(number) ;
	}
	number++;
}

fs.writeFileSync(outfile, prime.join(","));
console.log("Script: " + __filename + "\nWrote: "+prime.join(",") + "\nTo: "+outfile);
