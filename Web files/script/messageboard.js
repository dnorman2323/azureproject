/*
var txtarea = document.querySelector("textarea");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");
var message = document.querySelector("input");
*/
const message = document.getElementById('message');
const textarea = document.getElementById('textarea');
const btn = document.getElementById('btn');
//TODO: Add generating persistent posts from SQL server

btn.addEventListener('click', function handleClick() {
  if (message.value == "") {//Prompt when there is no text in the text box
      alert("You have not filled in a message")
  } else {

      /*
      //Create element li as message area
      var li = document.createElement("li");
      //Put the content in the text box into li, and the content in href in a tag means nothing
      var d = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
      li.innerHTML = uname.value + " posted on " + d + ":<br>" + txt.value
      txt.value = "";//After adding, the contents of the text box are cleared
      uname.value = "";
      //TODO: Add uname and txt.value as a new row in the SQL database
      //Add the message to ul below the other messages
      ul.insertBefore(li, null);
      */
      var d = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
      textarea.value += d + ": " + message.value;

  }
});
