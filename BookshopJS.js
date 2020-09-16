const bookes = [{
    name: '',
    author: '',
    price: ,
    description: ``,
    image: ''
},
{name: '',
author: '',
price: ,
description: ``,
image: ''
},
{name: '',
author: '',
price: ,
description: ``,
image: ''
}];

function displayBooks (bookList) {
    const bookstore = document.querySelector('#bookstore');

    bookList.forEach(book => {
        const listItem = document.createElement('li');
        consttext = document.createTextNode(book.name);
        const author = document.createTextNode(book.author);
        const image = document.createElement('img');
        image.src = book.image;

        listItem.appendChild(text);
        listItem.appendChild(author);
        listItem.appendChild(image);

        bookstore.appendChild(listItem);
    });

}

displayBooks(bookstore)