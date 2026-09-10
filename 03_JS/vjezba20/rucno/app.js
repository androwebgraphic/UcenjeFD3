$('#klik').click(function () {
  
  $('#pozdrav').text('Hello World')
  $('#makniPozdrav').show()
  return false
})

$('#makniPozdrav').hide()
$('#makniPozdrav').click(function () {
  
  $('#pozdrav').text('')
  $(this).hide()
  return false
})