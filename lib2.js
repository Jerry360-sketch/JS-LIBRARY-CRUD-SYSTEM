//FUNCTION FOR ADDING A BOOK TO THE LIBRARY
let library = [];
let bookId = 100;

function addBook (author , title){
    const books = {
        author: author,
        title: title,
        bookId: bookId++,
    }
    library.push(books);
    console.log(`${title} by ${author} has been added to the library`)
   
}
addBook('jerry', 'live to die young')
addBook('mike', 'spill the tea')
addBook('emmanuel', 'let if flow naturally')


//FUNCTION TO RETURN ALL BOOKS IN THE CATALOGUE OF THE LIBRARY
function getAllBooks(){
    console.log(library)
}
getAllBooks()


//LOCATING OR GETTING A PARTICULAR BOOK FROM THE LIBRARY WITH THE ID
function getBookById (id){
    console.log(library.find(books => books.bookId === id))
}
getBookById(100)


//DELETING A BOOK FROM THE LIBRARY USING THE ID NUMBER
function deleteBookById(id){
    let index = library.findIndex(books => books.bookId === id)
    if(index !== -1){
        let deletedBook = library.splice(index, 1)[0];
        console.log(`${deletedBook.title} by ${deletedBook.author} has been deleted from the library`)
    }
    return null
}
deleteBookById(100)
console.log(library)

//UPDATING THE LIBRARY
function updateLib(bookId, newAuthor, newTitle){

}





