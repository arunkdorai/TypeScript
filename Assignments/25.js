var library = [
    { title: 'Bill Gates', author: 'The Road Ahead', readingStatus: true },
    { title: 'Steve Jobs', author: 'Walter Isaacson', readingStatus: true },
    { title: 'Mockingjay', author: 'Suzanne Collins', readingStatus: false }
];
library.forEach(function (book) {
    var status = book.readingStatus
        ? "Already read '".concat(book.title, "' by ").concat(book.author, ".")
        : "You still need to read '".concat(book.title, "' by ").concat(book.author, ".");
    console.log(status);
});
