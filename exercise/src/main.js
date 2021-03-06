jQuery(function($) {
  var imageUrls = [
    'img/bunny-725x544.jpg',
    'img/funny-monkey-725x544.jpg',
    'img/guinea-pigs-725x544.jpg',
  ];

  // Generate Image List
  var imageSelector = $('.image-selector');
  imageUrls.forEach(function(url) {
    $('<li><a href="#" class="select-image">' +
      '<img src="' + url + '" width="120" height="90"></a></li>')
      .appendTo(imageSelector);
  })

  // Pick the first image by default
  var currentImage = $('.image-selector img')[0];
  var currentText = 'Hello, world!';

  if (typeof process === 'object' && process.env.NODE_ENV !== 'production') {
    currentText = 'Hello, developers!';
  }

  drawMeme(currentImage, currentText);

  // Listen for clicks on images
  imageSelector.on('click', '.select-image', function(event) {
    event.preventDefault();
    currentImage = $('img', this)[0];
    drawMeme(currentImage, currentText);
  });

  // Listen for input and key events for the text box
  $('.edit-subtitle').on('keyup input', function(event) {
    currentText = event.target.value;
    drawMeme(currentImage, currentText);
  });

});
