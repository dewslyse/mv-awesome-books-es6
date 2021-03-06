import Book from './modules/book.js';
import Library from './modules/library.js';
import Actions from './modules/actions.js';
import { DateTime } from './luxon/luxon.js';

const addBtn = document.querySelector('.add-btn');
const addedBooks = document.querySelector('.added-books');
const contact = document.querySelector('.contact');
const contactLink = document.querySelector('.contact-link');
const listLink = document.querySelector('.list-link');
const addNewLink = document.querySelector('.add-new-link');
const booksList = document.querySelector('.book-list');
const newSection = document.querySelector('.add-new');
const link = document.querySelectorAll('.link');
const dateTime = document.getElementById('current-date');

// Display books from Library
document.addEventListener('DOMContentLoaded', Actions.displayBooks);

// Add a new book
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookId = (new Date()).getTime();

  if (bookTitle === '' || bookAuthor === '') {
    alert('Please fill in all book details');
  } else {
    const book = new Book(bookTitle, bookAuthor, bookId);
    Actions.addNewBook(book);
    Library.addBook(book);
    Actions.resetInputs();
  }
});

// Delete added book
addedBooks.addEventListener('click', (e) => {
  Actions.deleteBook(e.target);
});

// Show different page sections
listLink.addEventListener('click', () => {
  booksList.classList.remove('hide');
  contact.classList.add('hide');
  newSection.classList.add('hide');
});

addNewLink.addEventListener('click', () => {
  booksList.classList.add('hide');
  contact.classList.add('hide');
  newSection.classList.remove('hide');
});

contactLink.addEventListener('click', () => {
  booksList.classList.add('hide');
  contact.classList.remove('hide');
  newSection.classList.add('hide');
});

link.forEach((item) => item.addEventListener('click', () => {
  link.forEach((item) => item.classList.remove('active'));
  item.classList.add('active');
}));

// Luxon date and time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
dateTime.textContent = currentDate;
