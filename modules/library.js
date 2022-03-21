export default class Library {
    static retrieveBooks = () => {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }

    static addBook = (book) => {
      const books = Library.retrieveBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook = (id) => {
      const books = Library.retrieveBooks();

      books.forEach((book, index) => {
        if (book.id === id) {
          books.splice(index, 1);
        }
      });

      localStorage.setItem('books', JSON.stringify(books));
    }
}