// circle animation 

// this removes 
$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});

// this animate the circle bar

$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');

// skill progress bar 

$('#html').LineProgressbar({
  percentage: 90,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});
$('#css').LineProgressbar({
  percentage: 70,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});
$('#javascript').LineProgressbar({
  percentage: 50,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});
$('#bootstrap').LineProgressbar({
  percentage: 80,
  fillBackgroundColor: '#3498db',
  backgroundColor: '#EEEEEE',
  radius: '0px',
  height: '5px',
  width: '100%'
});

// auto writer plugin

var typed = new Typed('.element', {
  // Waits 1000ms after typing "First"
  strings: ['Interactive Web Pages', 'Responsive Web Pages'],
  typeSpeed:100,
  backSpeed:50,
  loop:true
});


