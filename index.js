function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then((booksArray) => {
    renderBooks(booksArray)
    })
}

const newArray = []

function sumBookPages(books) {
  
  books.forEach(book => {
    newArray.push(parseInt(book.numberOfPages))
    return newArray
  })
}

const summer = (accumulator, value) => {
  return accumulator + value
}



function renderBooks(books) {
  const main = document.querySelector('main');
   books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
   });
}

// function renderBooks(books) {
//   const main = document.querySelector('main')
//   const bookList = document.createElement('ul')
//   main.append(bookList)
  
//     const listItem = document.createElement('li')
//     listItem.innerText = books.name;
//     bookList.append(listItem)
  
// }


document.addEventListener('DOMContentLoaded', function() {
   fetchBooks()
})
