let side1 = 20
let side2 = 24
let side3 = 20

if(side1 === side2 && side1=== side3 && side2===side3){

    console.log('Equilateral triangle')
}
else if (side1 === side2 && side1 != side3 || side2=== side3 && side2 != side1|| side3===side1 && side3 != side2){

    console.log('Isosceles triangle')
}


else {
    console.log('Scalene triangle')
}