var $element = $('#extension')

if ($element.length == 0) {
  $('body').prepend('<div id="extension"></div>');

  // Load our html for the toolbar
  $.get(chrome.extension.getURL("toolbar.html"), function(toolbarContent){
    $('#extension').html(toolbarContent);
  }, 'html');

  // Load our css for the toolbar then set click handlers
  $.get(chrome.extension.getURL("style.css"), function(cssContent){
    console.log('content: '+ cssContent);
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

    $('#h7-button').click(function() {
     $('h7').toggleClass('h7-outline');
     $('#h7-button').toggleClass('h7-background');
    });

    $('#h8-button').click(function() {
     $('h8').toggleClass('h8-outline');
     $('#h8-button').toggleClass('h8-background');
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
