'use strict';

// tweak to run on GH Pages
// if (window.location.protocol.startsWith('https:')) {
//   page.base('/internets-of-thing');
// }

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
page('/new', app.bookView.initNewPage);
console.log('page form view');

page('/details/:id', (ctx) => {
  console.log('details ctx:', ctx)
  app.Book.fetchOne(ctx.params.id)
  .then((data) => {
    console.log('book data:', data);
    app.bookView.showOne(data);
  });
});
console.log('page details');
// On Submit: this form should POST a new record to the /api/v1/books route on the backend

page.start()