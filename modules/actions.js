import Library from './library.js';

const addedBooks = document.querySelector('.added-books');

export default class Actions {
    static displayBooks = () => {
      const books = Library.retrieveBooks();

      books.forEach((book) => {
        Actions.addNewBook(book);
      });
    }

    static addNewBook = (book) => {
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('book');
      const p = document.createElement('p');
      p.classList.add('item');
      p.innerHTML = `
            "<span class="added-title">${book.title}</span>" by ${book.author}
        `;

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.textContent = 'Remove';

      removeBtn.addEventListener('click', () => {
        Library.removeBook(book.id);
      });

      bookContainer.appendChild(p);
      bookContainer.appendChild(removeBtn);
      addedBooks.appendChild(bookContainer);
    }

    static deleteBook = (item) => {
      if (item.classList.contains('remove-btn')) {
        item.parentElement.remove();
      }
    }

    static resetInputs = () => {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
}