function metoda_y(a,b){
    

    const wynik = (a + b) - (b - a) + silnia(a)
    return wynik
}

function metoda_x(a,b){
    const wynik = ((a + b) ** 2) / silnia(b)
    return wynik
}

function silnia(n){
        if ( n=== 0 || n === 1) return 1
        return n * silnia(n-1)
}

module.exports = {metoda_x,metoda_y,silnia}