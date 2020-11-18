var cluster = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
e = "G~45HJ"
var res = new Array();

for (i = 0; i <= 5; ++i) {
    
    var r = [`${e.charAt(parseInt(i))}`]
    
    if (r == "~") {
      res[i] = cluster;      
    } else {
      res[i] = r
    }
    
} if (i === 6 ) {
   console.log(res)
}
    
// TODO here

res.forEach(function(obj, index) {
    setTimeout(function(){
        
     console.log(index)
     
    }, 250 * (index + 1));

});
