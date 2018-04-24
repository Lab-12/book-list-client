'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('#book-list').empty();
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.showOne = (bookdata) => {
    console.log('book data:', bookdata);
    $('.detail-view').empty();
    $('.container').hide();
    $('.detail-view').show();
    let template = Handlebars.compile($('#one-book-template').text());
    $('.detail-view').append(template(bookdata[0]));
  };

  bookView.initNewPage = () => {
    $('.container').hide();
    $('.form-view').show();

    // $('#new-book').on('change', 'input, textarea', book.insert);
    $('#new-book').on('submit', bookView.submit);
  };

  bookView.submit = event => {
    event.preventDefault();
    console.lgo
    $('#book-list').empty();
    let book = new module.Book({
      title: $('#title').val(),
      author: $('#author').val(),
      isbn: $('#isbn').val(),
      image_url: $('#image_url').val(),
      description: $('#description').val()
    });
    app.Book.insert(book);
  }

  // bookView.submit = () => {

  // }




  module.bookView = bookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});