const pack = require("./package.json"),
    fetch = require("node-fetch");
readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
}), readline.question("[ Invoer ] Kenteken: ", e => {
    
    NEWKENT = e.replace(/\-/g, "").toUpperCase(), e !== NEWKENT && (console.log(`[ ${pack.name} ] Kenteken opgeschoond naar ${NEWKENT} `), NEWKENT);
    const n = [];
    cluster = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    for (var o = 0; o <= 5; ++o) {

        let r = e.charAt(parseInt(o));

        n[o] = "~" === r ? cluster : [`${e.charAt(parseInt(o))}`]

    }
	
    console.log(`[ ${pack.name} ] Begonnen aan doorzoeking \n`)
	setInterval(() => {
        n[0].forEach(function(e) {
            n[1].forEach(function(o) {
                n[2].forEach(function(r) {
                    n[3].forEach(function(t) {
                        n[4].forEach(function(c) {
                            n[5].forEach(function(n) {
                                fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + e + o + r + t + c + n).catch(e => console.error(e)).then(e => e.json()).then(e => {
                                    try {
                                        null !== e[0].kenteken && console.log(`[ ${e[0].kenteken} ] [ ${e[0].merk} ${e[0].handelsbenaming} ] [ ${e[0].eerste_kleur} ]`)
								} catch (e) {} 
                                })
								
                            })
                        })
                    })
                })
            })
        })
    }, 3000), readline.close()
});