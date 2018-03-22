$(document).ready(function(){
  $('.in-i-mobail').css('display', 'none');
    $('#toggle-menu').click(function(){
      $('.in-i-mobail').slideToggle(300);
    });

//----------datapicker----------
  $('.it-w-input').datepicker({
    monthNames: [
      'январь', 'февраль', 'март', 'апрель',
      'май', 'июнь', 'июль', 'август', 'сентябрь',
      'октябрь', 'ноябрь', 'декабрь'
    ],
    dayNamesMin: [
      'Вс','Пн','Вт','Ср','Чт','Пт','Сб'
    ],
    firstDay: 1,
    dateFormat: "d MM yy"
  });

//----------toShowDate
  function toShowDate(){
    let d = new Date();
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    let app = d.toLocaleString("ru", options);
    $(".it-w-date").text(app);
  }

  toShowDate();
  $("label").click(function(){
    $(".it-w-date").hide();
  });
});
