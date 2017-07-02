$(document).ready(function() {
  $('#filterOptions li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#slider-wrapper').children('div.slider').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('#slider-wrapper').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#slider-wrapper').children('div.' + ourClass).show();
    }
    return false;
  });




// var $star_rating = $('.star-rating .fa');

// var SetRatingStar = function() {
//   return $star_rating.each(function() {
//     if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
//       return $(this).removeClass('star-grey').addClass('star-yellow');
//     } else {
//       return $(this).removeClass('star-yellow').addClass('star-grey');
//     }
//   });
// };

// $star_rating.on('click', function() {
//   $star_rating.siblings('input.rating-value').val($(this).data('rating'));
//   return SetRatingStar();
// });

// SetRatingStar();
});