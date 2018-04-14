function Generate(length){
 var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < possible.length; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  }
  document.getElementById("generateCode").value= text;
  
  }
  