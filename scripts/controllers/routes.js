'use strict';
// tweak to run on GH Pages
// if (window.location.protocol.startsWith('https:')) {
//   page.base('/book-list');
// }

// all route changes should hide page containers
page('/*', (ctx, next) => {
  $('.page').hide()
  next()
})

// / - List View: Books by title and author with the image_url displaying a rendered image of the book

// /books/:book_id - Detail View of one complete book record
page('/', app.bookView.initIndexPage)

// /books/new - Form View that will allow the user to enter a new record into the DB
// Your form should take the following inputs: title, author, isbn, image_url, and description
page('/new', app.formView.initIndexPage);

// On Submit: this form should POST a new record to the /api/v1/books route on the backend
page('/api/v1/books/', (ctx) => app.Book.fetchOne(ctx.params.id).then(app.showOne.initIndexPage));

page.start()