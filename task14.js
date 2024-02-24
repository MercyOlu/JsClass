const book = {
    title:'Worst Wingman Ever',
    description:'Romantic short story',
    numberOfPages:61,
    author:'Abby Jimenez',
    reading:false,

    toggleReadingStatus: function(){
        if (book.reading === true){
            book.reading =false
        }
    else{
        book.reading = true
    }
    }

 }
 book.toggleReadingStatus()


console.log(book['author']+', ',book['title']+', ', book['description']+', ', book['numberOfPages']+ ' pages'+', ','Am i reading this book: ' 
+ book['reading'])

console.log(book.reading)