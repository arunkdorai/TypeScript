const library = [
    { title: 'Bill Gates', author: 'The Road Ahead', readingStatus: true },
    { title: 'Steve Jobs', author: 'Walter Isaacson', readingStatus: true },
    { title: 'Mockingjay', author: 'Suzanne Collins', readingStatus: false }
];

library.forEach(book => {
    const status = book.readingStatus
        ? `Already read '${book.title}' by ${book.author}.`
        : `You still need to read '${book.title}' by ${book.author}.`;
    console.log(status);
});
