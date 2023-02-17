/* Кнопка наверх  */
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#upBtn').removeClass('hidden');
      } else {
        $('#upBtn').addClass('hidden');
      }
    });

    $('#upBtn').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
