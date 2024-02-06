// book.js

var books = [];

function searchBook() {
    var result = document.getElementById("result");
    var html = "";

    if (result) {
        for (var i = 0; i < books.length; i++) {
            var book = books[i];
            html += "<hr>ID: " + book.id + "<br>Name: " + book.name + "<br>Price: " + book.price + "<br>Authors: " + (book.authors ? book.authors.join(", ") : "") + "<br>";
        }
        result.innerHTML = "<hr>ผลการค้นหา<br>" + html;
    }
}

function addBook() {
    // Read from localStorage
    books = JSON.parse(localStorage.getItem("books")) || [];

    // If books is null, initialize it as an empty array
    if (books == null) {
        books = [];
    }

    // Create a new book object
    var book = {
        id: findMaxBookId() + 1,
        name: document.getElementById("book_name").value,
        price: document.getElementById("book_price").value,
        authors: [document.getElementById("author1").value, document.getElementById("author2").value, document.getElementById("author3").value].filter(Boolean)
    };

    // Add the new book to the books array
    books.push(book);

    // Save to localStorage
    localStorage.setItem("books", JSON.stringify(books));

    // Clear input fields
    clearFields();

    // Display updated data
    searchBook();
}

function clearFields() {
    document.getElementById("id").value = "";
    document.getElementById("book_name").value = "";
    document.getElementById("book_price").value = "";
    document.getElementById("author1").value = "";
    document.getElementById("author2").value = "";
    document.getElementById("author3").value = "";
}

// Read from localStorage
var books = JSON.parse(localStorage.getItem("books")) || [];

// If books is null, initialize it as an empty array
if (books == null) {
    books = [];
}

// Initial display
searchBook();
