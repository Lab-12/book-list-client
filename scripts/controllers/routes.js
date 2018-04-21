'use strict';

// all route changes should hide page containers
page('/*', (ctx, next) => {
  $('.page').hide()
  next()
});
console.log('page hide all');
// / - List View: Books by title and author with the image_url displaying a rendered image of the book
page('/', app.bookView.initIndexPage)
console.log('page init Index');

// /books/new - Form View that will allow the user to enter a new record into the DB
// Your form should take the following inputs: title, author, isbn, image_url, and description
// page('/new', app.formView.initIndexPage);
// console.log('page form view');
// /books/:book_id - Detail View of one complete book record
page('/details/:id', (ctx) => {
  console.log('details ctx:', ctx)
  app.Book.fetchOne(ctx.params.id)
  .then((bookdata) => {
    console.log('bookdata', bookdata);
    app.bookView.showOne(bookdata);
  });
});
console.log('page details');
// On Submit: this form should POST a new record to the /api/v1/books route on the backend

page.start()