var $element = $('#extension')

if ($element.length == 0) {
  $('body').prepend('<div id="extension"></div>');

  // Load our html for the toolbar
  $.get(chrome.extension.getURL("html/toolbar.html"), function(toolbarContent){
    $('#extension').html(toolbarContent);
  }, 'html');

  // Load our css for the toolbar then set click handlers
  $.get(chrome.extension.getURL("styles/style.css"), function(cssContent){
    $('head').append(cssContent);
    $('#h1-button').click(function() {
     $('h1').toggleClass('h1-outline');
     $('#h1-button').toggleClass('h1-background');
    });

    $('#h2-button').click(function() {
     $('h2').toggleClass('h2-outline');
     $('#h2-button').toggleClass('h2-background');
    });

    $('#h3-button').click(function() {
     $('h3').toggleClass('h3-outline');
     $('#h3-button').toggleClass('h3-background');
    });

    $('#h4-button').click(function() {
     $('h4').toggleClass('h4-outline');
     $('#h4-button').toggleClass('h4-background');
    });

    $('#h5-button').click(function() {
     $('h5').toggleClass('h5-outline');
     $('#h5-button').toggleClass('h5-background');
    });

    $('#h6-button').click(function() {
     $('h6').toggleClass('h6-outline');
     $('#h6-button').toggleClass('h6-background');
    });

    $('#all-button').click(function() {
      var h_tags = ['h1','h2','h3','h4','h5', 'h6'];
      for(var i in h_tags) {
        h_tag = h_tags[i];
        $(h_tag).toggleClass(h_tag + '-outline');
        $('#' + h_tag + '-button').toggleClass(h_tag + '-background');
      }
    });
  }, 'html');
} else {
  $element.toggle();
}

// not used yet
var loadHtml = (function (file, next) {
  console.log('loadHtml called');
});

var loadCss = (function (file, next) {
  console.log('loadHtml called');
});

var setClickListeners = (function () {
  console.log('loadHtml called');
});

var outlineHTag =  (function (tag_name) {
  $(tag_name).toggleClass(tag_name + '-outline');
  $('#' + tag_name + '-button').toggleClass(tag_name + '-background');
});
