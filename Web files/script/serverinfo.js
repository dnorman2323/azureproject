//based on a pen by @robinselmer
var mcserveraddr = "dans-minecraft.eastus.cloudapp.azure.com";
var url = "https://api.minetools.eu/ping/"+mcserveraddr+"/25565";
$.getJSON(url, function(r) {
      //data is the JSON string
   if(r.error){
      $('#rest').html('<b>Server Offline</b> <i class="fa fa-heart" style="color:red;"></i><br>Be Back Soon!');
     return false;
   }
  var pl = '';
   if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  }
   $('#rest').html('A place for Dan&#39;s to play Minecraft together<br><b>Server Online</b> <i class="fa fa-heart" style="color:green;"></i><br><b>Server IP Address:</b> '+mcserveraddr+'<br><b>Players Online:</b> '+r.players.online+pl);
});
