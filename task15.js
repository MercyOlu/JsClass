

const books =[
{
    title:'Worst Wingman Ever',
    description:'Romantic short story',
    numberOfPages:61,
    author:'Abby Jimenez',
    reading:true,
},

{
    title:'Rosie and the Dreamboat',
    description:'Romantic short story',
    numberOfPages:44,
    author:'Sally Thorne',
    reading:true,
},

{
    title:'Drop, Cover, and Hold On',
    description:'Romantic short story',
    numberOfPages:40,
    author:'Jasmine Guillory',
    reading:false,
},
{
    title:'With Any Luck',
    description:'Romantic short story',
    numberOfPages:43,
    author:'Abby Jimenez',
    reading:false,
}
]

for (let book1 = 0; book1 < books.length; book1++) {
    const bookss = books[book1];

    if (bookss.reading === true){
        console.log (bookss)
    }
    

    }