// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require thirdparty/js.js
//= require_tree .

$(document).ready(function(){

  $('#js-edit-text').keypress(function (e) {
    if (e.which == 13) {
      $('form#edit_user_form').submit();
      return false;
    }
  });

  $('body').on('DOMNodeInserted', '#js-edit-text', function () {
    $("#submit-js-edit").hide();
  });

  $('.editable').on('blur', '#user_fullname form', function(){
    $('#submit-js-edit').click();
  })

})
