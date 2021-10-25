$(document).ready(function(){
  $("#ft").submit(function(event) {
    event.preventDefault();
    const fav1 = $("input#fav1").val();
    const fav2 = $("input#fav2").val();
    const fav3 = $("input#fav3").val();
    const favoriteThings = [];
    favoriteThings.push(fav1);
    favoriteThings.push(fav2);
    favoriteThings.push(fav3);

    $("#output").text(favoriteThings);
    
  })
})