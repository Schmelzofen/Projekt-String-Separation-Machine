let inputSatz = document.getElementById("inputSatz")
let inputWort = document.getElementById("inputWort")
let davorRadio = document.getElementById("davorRadio")
let danachRadio = document.getElementById("danachRadio")
let ausgabeVorne = document.getElementById("ausgabeVorne")
let ausgabeHinten = document.getElementById("ausgabeHinten")

function trennen(){
    a = (inputSatz.value).split(" ")
    a1 = (a.indexOf(inputWort.value))
    b = (inputSatz.value).length
    b1 = inputSatz.value
    laengeWort = (inputWort.value).length
    b2 = (b1.indexOf(inputWort.value))
    b3 = Number((b1.indexOf(inputWort.value))+laengeWort)
    c1 = Number(b2+(laengeWort+1))
    console.log((inputSatz.value).lastIndexOf(inputWort.value))
    console.log(c1)
    console.log(a1)
    console.log(b2)
    console.log(b)
    console.log(b2+laengeWort)
    console.log(b1.substr(0,(b2+laengeWort)))
    console.log(b1.slice(c1,b))
    ausgabeVorne.innerHTML = b1.substr(0,b2)
    ausgabeHinten.innerHTML = (b1.slice(c1,b))
}

check = () => {
    let satz = inputSatz.value // b1
    let wort = inputWort.value // 
    let wortWo = satz.indexOf(wort) // b2
    let satzLaenge = satz.length // b
    let wortLaenge = wort.length // laengeWort
    let summeZeichen = Number(wortWo+(wortLaenge+1)) // c1

    if(danachRadio.checked === true){
        ausgabeVorne.innerHTML = satz.substr(0,(satz.indexOf(wort)+wortLaenge))
        ausgabeHinten.innerHTML =  satz.slice(summeZeichen ,satzLaenge)
        console.log("Hello")
    } else if(davorRadio.checked === true){
        ausgabeVorne.innerHTML = satz.substr(0,(satz.indexOf(wort)))
        ausgabeHinten.innerHTML =  satz.slice(wortWo ,satzLaenge)
    }
}