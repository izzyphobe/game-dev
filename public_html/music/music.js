var bod = document.body
bod.style.setProperty("--bg1","#E4572E")
bod.style.setProperty("--bg2","#17BEBB")
bod.style.setProperty("--bg3","#FFC914")


function showSong(id){
    var menu = document.getElementById(id);
    if (menu.style.display === "none") {
        menu.style.display = "block";
        closeAll(id);
      } else {
        menu.style.display = "none";
      }
    
}

function closeAll(x){
    var elements =  document.getElementById("songlist").getElementsByTagName("div");
    for (var i = 1; i <= elements.length; i++) {
        if(i != x) {
            elements[i-1].style.display = "none";
        }
    }
}
