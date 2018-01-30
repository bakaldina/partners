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

function modalOpen() {
  if (window.screen.width > 768) {
    $("#modals").show();
  }
}
function modalClose() {
  if (window.screen.width > 768) {
    $("#modals").hide();
  }
}
