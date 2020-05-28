$(document).ready(function () {
  $(".modal").modal();
  $(".parallex").parallex();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}
