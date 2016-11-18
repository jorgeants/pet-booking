// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/transition
//= require bootstrap/dropdown
//= require bootstrap/modal
//= require bootstrap/alert
//= require_tree .

$(".table tr[data-link] td:not(.buttons)").click(function(){
	window.location = $(this).parent().data("link");
});

//Ovirride 'confirm' default of Rails
$.rails.allowAction = function(link) {
  if (!link.attr('data-confirm')) {
    return true;
  }
  $.rails.showConfirmDialog(link);
  return false;
};

$.rails.confirmed = function(link) {
  link.removeAttr('data-confirm');
  return link.trigger('click.rails');
};

$.rails.showConfirmDialog = function(link) {
  var html, message;
  message = link.attr('data-confirm');
  html = "<div id=\"confirmModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\"><span class=\"glyphicon glyphicon-info-sign\"></span> Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>"+message+"</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger confirm\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>";
  $(html).modal();
  return $('body').on('click', '#confirmModal .confirm', function() {
    return $.rails.confirmed(link);
  });
};
