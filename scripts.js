$(document).ready(function() {
  $("#userInfo").on("click", function() {
    $(this)
      .closest("li")
      .toggleClass("active");
  });

  $("#menu_icon").on("click", function() {
    $(this)
      .closest(".header__menu")
      .toggleClass("active");
    return false;
  });
});

function modalOpen(number) {
  if (window.screen.width > 768) {
    $("#modals" + number).show();
  }
}
function modalClose(number) {
  if (window.screen.width > 768) {
    $("#modals" + number).hide();
  }
}
