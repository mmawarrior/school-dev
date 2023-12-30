// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Display the existing books when the page loads
    displayBooks();

    // Find the add book button by its ID and add an event listener
    const addBookButton = document.getElementById("addBookButton");
    if (addBookButton) {
        addBookButton.addEventListener("click", addBook);
    }
});

// Function to add a new book
function addBook() {
    // Retrieve book details from the input fields
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Check if all fields are filled
    if (title && author && isbn) {
        // Create a new book object
        const newBook = { title, author, isbn };
        // Retrieve existing books from storage
        const books = getBooksFromStorage();
        // Add the new book to the array
        books.push(newBook);
        // Save the updated book list to storage
        saveBooksToStorage(books);
        // Update the displayed book list
        displayBooks();
        // Clear the input form
        clearForm();
    } else {
        // Display an alert if any field is empty
        alert("Please fill in all fields.");
    }
}

// Function to delete a book based on its index
function deleteBook(index) {
    // Retrieve existing books from storage
    const books = getBooksFromStorage();
    // Remove the selected book from the array
    books.splice(index, 1);
    // Save the updated book list to storage
    saveBooksToStorage(books);
    // Update the displayed book list
    displayBooks();
}

// Function to display the list of books on the page
function displayBooks() {
    // Get the container for the book list
    const bookList = document.getElementById("bookList");
    // Clear the existing content
    bookList.innerHTML = "";

    // Retrieve existing books from storage
    const books = getBooksFromStorage();
    // Iterate through each book and create a list item
    books.forEach((book, index) => {
        const bookItem = document.createElement("li");
        bookItem.className = "book";
        // Populate the list item with book details and delete button
        bookItem.innerHTML = `
            <div>
                <strong>${book.title}</strong> by ${book.author}<br>
                ISBN: ${book.isbn}
            </div>
            <button class="delete-btn" onclick="deleteBook(${index})">Delete</button>
        `;
        // Append the list item to the container
        bookList.appendChild(bookItem);
    });
}

// Function to retrieve books from local storage
function getBooksFromStorage() {
    // Parse the stored JSON data or return an empty array if no data is found
    return JSON.parse(localStorage.getItem("books")) || [];
}

// Function to save books to local storage
function saveBooksToStorage(books) {
    // Convert the books array to JSON and store it in local storage
    localStorage.setItem("books", JSON.stringify(books));
}

// Function to clear the input form
function clearForm() {
    // Reset the input values to empty
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}