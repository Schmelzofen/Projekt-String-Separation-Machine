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

function check(){
    satz = inputSatz.value // b1
    wort = inputWort.value // 
    wortWo = satz.indexOf(wort) // b2
    satzLaenge = satz.length // b
    wortLaenge = wort.length // laengeWort
    summeZeichen = Number(wortWo+(wortLaenge+1)) // c1


    switch(danachRadio.checked){
        case true:
            console.log("Hello")
            ausgabeVorne.innerHTML = satz.substr(0,(satz.indexOf(wort)+wortLaenge))
            ausgabeHinten.innerHTML =  satz.slice(summeZeichen ,satzLaenge)
            break;
        case false:
            ausgabeVorne.innerHTML = satz.substr(0,(satz.indexOf(wort)))
            ausgabeHinten.innerHTML =  satz.slice(wortWo ,satzLaenge)
            console.log(wort)
            break;
    }
}