$(function(){
  // Trigger 
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })

  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
})
