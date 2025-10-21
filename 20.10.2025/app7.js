//wlasny modul
//modul pole figury
const wzory = [
    {figura: "kwadrat", wzor: "p=a^2"},
    {figura: "prostokat", wzor: "p=a*b"},
    {figura: "trojkat", wzor: "p=a*h/2"}
]

//export metod modulu pole fgur
module.exports = {
    podajWzory(){
        console.log("\nWzory pola figur");
        for(let i = 0; i < wzory.length; i++){
            const item = wzory[i];
            console.log(item.figura + " " + item.wzor)
        }
        console.log("\n")
    },
    obliczPoleKw(a){
        console.log("pole kw = " + a*a)
    }
}