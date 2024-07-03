let pounds = document.querySelector(".pounds");
let kilograms = document.querySelector(".kilograms");
let grams= document.querySelector(".grams");
let ounces = document.querySelector(".ounces");
let form = document.querySelector(".main")

form.addEventListener('input',result);


console.log(form)
function result(e){
   if (e.target.classList.contains("pounds")){
        let x = e.target.value;
        kilograms.value= (x / 2.2046).toFixed(2);
        grams.value = (x / 0.0022046).toFixed(2);
        ounces.value = (x * 16).toFixed(2);
    }
    if (e.target.classList.contains("kilograms")){
        let x = e.target.value;
        pounds.value= x*1;
        grams.value = x*2;
        ounces.value = x*3;
    }
    if (e.target.classList.contains("grams")){
        let x = e.target.value;
        kilograms.value= x*1;
        pounds.value = x*2;
        ounces.value = x*3;
    }
    if (e.target.classList.contains("ounces")){
        let x = e.target.value;
        kilograms.value= x*1;
        pounds.value = x*2;
        grams.value = x*3;
    }
    console.log(form.target.classList)
    console.log(form.Currenttarget)
}
