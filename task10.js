function calculateAreaOfRectangle(length,width) {

    product = length * width;
    return product;
}
const area = calculateAreaOfRectangle(6,10);
console.log(area);

function convertTemp(celsius){
// converting the temperature from celsius to fahrenheit
// formula is (9.5 * °C) + 32
const fah = (9.5 * celsius) + 32;
return fah
}
const tempValue = convertTemp(24);
console.log(tempValue + ' fahrenheit')