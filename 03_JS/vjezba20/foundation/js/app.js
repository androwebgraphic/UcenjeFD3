$(document).foundation()

$('#promjeniNaslov').click(function() {
  
  $('#naslov').text('Dobro dosli')
  return false
})
$('#promjeniBoju').dblclick(function () {
  

  $('.callout.primary').css('background-color', 'grey')
  return false
})