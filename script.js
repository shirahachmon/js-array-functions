// Book class: title, author, isbn

class Book{
    constructor(title, author, isbn){
        this.title=title
        this.author=author
        this.isbn=isbn
    }
}


// Localstorage store the books list 
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null) books=[]
        else books= JSON.parse(localStorage.getItem('books'))

        return books;
    }

    static addBook(book){
        const books= Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn){
        let books= Store.getBooks()
        books.forEach((book, index)=> {
            if((" "+book.isbn)==isbn) {
                console.log("hi");
             books.splice(index, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}


// UI operators

class UI{
    static displayBooks(){
        const books= Store.getBooks()
        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book){
        const list= document.getElementById('book-list')

        const row= document.createElement('tr')

        row.innerHTML = `
        
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td> 
            <a href="#" class="btn btn-danger btn-sm delete">X</a>
        </td>

        `
        list.appendChild(row)
    }

    // Clear all fields after adding new book
    static clearFields(){
         document.getElementById('title').value= ''
         document.getElementById('author').value=''
         document.getElementById('isbn').value=''
    }

    static showAlert(message, className){
        const div= document.createElement('div')

        div.className= `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        
        const container= document.querySelector('.container')

        const form= document.getElementById('book-form')

        container.insertBefore(div, form)

        // Vanish the message after 2 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000);
    }

    static deleteBook(element){
        if(element.classList.contains('delete'))
            element.parentElement.parentElement.remove();
    }
}

// Display a book 
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Remove a book
document.querySelector('#book-list').addEventListener('click', function(event){
    UI.deleteBook(event.target)
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent)

    UI.showAlert("Book deleted!", 'success')
})

// Adding a book
document.addEventListener('submit', function(event) {
    event.preventDefault()

    // Get form values
    const title= document.querySelector('#title').value
    const author= document.querySelector('#author').value
    const isbn= document.querySelector('#isbn').value

    if(title==="" || author===""  || isbn==="" )
        UI.showAlert("please enter all fields", "danger")
    else{
        const book = new Book(title, author, isbn)
        UI.addBookToList(book)
        Store.addBook(book)
        UI.showAlert("Book Added!", "success")
        UI.clearFields();
    }
})
