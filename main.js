
let btn = document.getElementById('btn').addEventListener("click",loadDoc);

let demo = document.getElementById("demo");
function loadDoc() {
  var xhttp = new XMLHttpRequest();
   xhttp.open("GET", "https://api.github.com/users", true);
  
  xhttp.onload = function(){
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = '';

      for(var i in users){
        output += 
            '<img src="'+users[i].avatar_url+'" width="70" height="80">' + 
          '<h5>' + users[i].login + '</h5>'+
        '<a href="' + users[i].html_url + '"</a>' +
        '<p>' + users[i].id + '</p>'    
      }
      document.getElementById('demo').innerHTML = output;
    }
  }
  xhttp.send();
}
 