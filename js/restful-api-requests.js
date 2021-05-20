let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
const getBooks = () => {
    fetch('https://delicate-wood-medusaceratops.glitch.me/books', getOptions)
        .then(response => response.json())
        .then(books => {
            let htmlStr = '';
            for (let book of books) {
                htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`
            }
            $('#container').html(htmlStr)
        });
}

fetch('https://delicate-wood-medusaceratops.glitch.me/books/1', getOptions)
    .then(response => response.json())
    .then(book => console.log(book));


//====POST
let newBook = {
    "title": 'Percy Jackson & The Lightning Thief',
    "author": {
        "firstName": "Rick",
        "lastName": "Riodan"
    }
}

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook)
}

$('#addPercy').click(() => {
fetch('https://delicate-wood-medusaceratops.glitch.me/books/', postOptions)
    .then(response => response.json())
    .then(getBooks);
})

//PUT

let modification = {
    "title": "Percy jackson & The Sea Of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riodan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(modification)
}

fetch('https://delicate-wood-medusaceratops.glitch.me/books/6', putOptions).then(getBooks);

//PATCH

let patchThis = {
    "title": "Percy jackson & The Titan's Curse",
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis)
}

fetch('https://delicate-wood-medusaceratops.glitch.me/books/7', patchOptions).then(getBooks);

getBooks();

//DELETE
let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};

fetch('https://delicate-wood-medusaceratops.glitch.me/books/15', deleteOptions).then(getBooks);

