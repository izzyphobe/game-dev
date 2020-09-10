
var i = 0;
var length = 12;

var bod = document.body
var cube1 = document.getElementById("cube1")
var cube2 = document.getElementById("cube2")
var cube3 = document.getElementById("cube3")
var cube4 = document.getElementById("cube4")
var cube5 = document.getElementById("cube5")
var cube6 = document.getElementById("cube6")
var cube7 = document.getElementById("cube7")
var cubes = [cube1, cube2, cube3, cube4, cube5, cube6, cube7]



function clearText(){
    var cubes = document.getElementsByClassName("cube");
    for (var i = 0; i < cubes.length; i++) {
        cubes[i].innerHTML = "";
    }
}

function hideCubes(){
    for(var i = 0; i<cubes.length; i++){
        cubes[i].style.display = "none"
    }
}

function showCubes(){
    for(var i = 0; i<cubes.length; i++){
        cubes[i].style.display = "block!important"
    }
}
function lyrics(){
    verse1();
}

function verse1(){
    document.addEventListener("click", one)
}

function one(){
    cube1.innerText = "if only there were some";
    document.removeEventListener("click", one, false);
    document.addEventListener("click", 
        function two(){
            cube1.innerText += " way to shut";
            document.removeEventListener("click", two, false);
            document.addEventListener("click", 
            function three(){
                cube1.innerText += "\nout all this";
                document.removeEventListener("click", three, false);
                document.addEventListener("click", 
                function four(){
                    cube1.innerText += " noise in my head";
                    document.removeEventListener("click", four, false);
                    document.addEventListener("click", 
                    function five(){
                        document.getElementById("cube3").innerHTML += " <p style = 'font-size: 175%'>oh wait</p>";
                        document.getElementById("cube3").innerHTML += "<p>there already is,</p>";
                        document.removeEventListener("click", five, false);
                        document.addEventListener("click", 
                        function six(){
                            document.getElementById("cube3").innerHTML += " <p>it's called</p>";
                            document.removeEventListener("click", six, false);
                            mc1();
                    });
                }); 
            });
        });
    });


}

function mc1(){                        
document.addEventListener("click", 
    function one(){
        document.getElementById("cube3").innerHTML += "<div id = 'mc'></div>";
        document.getElementById("mc").innerHTML += "McCafferty's";
        document.removeEventListener("click", one, false);
        document.addEventListener("click", 
        function two(){
            document.getElementById("mc").innerHTML += "<p>Bib</p>";
            bod.style.setProperty("--col1","#F1C40F")
            bod.style.setProperty("--col2","#F75C03")
            bod.style.setProperty("--col3","#D90368")
            bod.style.setProperty("--col4","#00CC66")
            bod.style.setProperty("--col5","#2274A5")
            bod.style.setProperty("--bckg","#F1C40F")
            document.removeEventListener("click", two, false);
            document.addEventListener("click",verse2,false);
        });
    });
}

function verse2(){
    document.removeEventListener("click", verse2, false);
    clearText();
    bod.style.setProperty("--header-font","Caveat")
    bod.style.setProperty("--font","Merriweather")
    cube2.innerText = "i used to have eleven";
    document.addEventListener("click", 
    function two(){
        cube2.style.transform = "rotate(90deg)"
        cube2.innerText += " problems, \nthen they all went away";
        document.removeEventListener("click", two, false);
        document.addEventListener("click", 
        function three(){
            cube2.style.transform = "rotate(180deg)"
            cube2.innerText += "\nwhen i added one more";
            document.removeEventListener("click", three, false);
            document.addEventListener("click", 
            function four(){
                cube2.style.transform = "rotate(270deg)"
                cube2.innerText += "\ncalled";
                document.removeEventListener("click", four, false);
                mc2();
            }); 
        });
    });
}

function mc2(){
    cube6.style.font = "175% Caveat"
    document.addEventListener("click", 
    function one(){
        document.getElementById("cube2").style.transform = "rotate(0)"
        cube6.innerText += "McCafferty's";
        document.removeEventListener("click", one, false);
        document.addEventListener("click", 
        function two(){
            cube6.innerText += "\nBib";
            document.removeEventListener("click", two, false);
            document.addEventListener("click",chorusSetup,false);
        });
    });
}

function chorusSetup(){
    document.removeEventListener("click", chorusSetup,false)
    hideCubes();
    bod.style.setProperty("--col1","#E8DDCB")
    bod.style.setProperty("--col2","#5B6275")
    bod.style.setProperty("--col3","#28AFB0")
    bod.style.setProperty("--col4","#F4D35E")
    bod.style.setProperty("--col5","#EE964B")
    bod.style.setProperty("--bckg","#E8DDCB")
    bod.style.backgroundImage = "var(--b1)"
    bod.innerHTML += "<div id = 'circle1' class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle2'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle3'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle4'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle5'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle6'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle7'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle8'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle9'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle10'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle11'class = 'circle'></div>"
    chorus();
}

function chorus(){
    document.getElementById("circle1").style.display = "flex"
    document.getElementById("circle1").innerText = "now the gray gray clouds";
    document.addEventListener("click", 
    function two(){
        document.getElementById("circle2").style.display = "flex"
        document.getElementById("circle2").innerText += "have arrived and the gray gray";
        document.getElementById("circle5").style.display = "flex"
        document.getElementById("circle11").style.display = "flex"
        document.removeEventListener("click", two, false);
        document.addEventListener("click", 
        function three(){
            document.getElementById("circle3").style.display = "flex"
            document.getElementById("circle3").innerText += "clouds have decided to stay";
            document.getElementById("circle6").style.display = "flex"
            document.getElementById("circle10").style.display = "flex"
            document.removeEventListener("click", three, false);
            document.addEventListener("click", 
            function four(){
                document.getElementById("circle4").style.display = "flex"
                document.getElementById("circle4").innerText += "with us from now on";
                document.getElementById("circle7").style.display = "flex"
                document.getElementById("circle8").style.display = "flex"
                document.getElementById("circle9").style.display = "flex"
                document.removeEventListener("click", four, false);
                document.addEventListener("click",verse3, false)
            }); 
        });
    })
}

function verse3(){
    document.removeEventListener("click",verse3, false)
    bod.style.backgroundImage = ""
    clearText();
    var circles = document.getElementsByClassName("circle");
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.display = "none"
    }

    bod.style.setProperty("--col1","#000F08")
    bod.style.setProperty("--col2","#FF312E")
    bod.style.setProperty("--col3","#01BAEF")
    bod.style.setProperty("--col4","#FFD400")
    bod.style.setProperty("--col5","#5AFF15")
    bod.style.setProperty("--bckg","#000F08")
    var c = document.getElementsByClassName("cube");
    for (var i = 0; i < c.length; i++) {
        c[i].style.display = "block"
    }
    bod.style.setProperty("--font","Dosis")
    bod.style.fontSize = "150%"
    c[0].innerText = "i ate the whole bottle";

    document.addEventListener("click", 
    function two(){
        bod.style.setProperty("--col1","#000F08")
        bod.style.setProperty("--col2","#5AFF15")
        bod.style.setProperty("--col3","#FF312E")
        bod.style.setProperty("--col4","#01BAEF")
        bod.style.setProperty("--col5","#FFD400")
        bod.style.setProperty("--bckg","#000F08")
        c[3].innerText += "of pills, and wondered what i had";
        document.removeEventListener("click", two, false);
        document.addEventListener("click", 
        function three(){
            bod.style.setProperty("--col1","#000F08")
            bod.style.setProperty("--col2","#FFD400")
            bod.style.setProperty("--col3","#5AFF15")
            bod.style.setProperty("--col4","#FF312E")
            bod.style.setProperty("--col5","#01BAEF")
            bod.style.setProperty("--bckg","#000F08")
            c[1].innerText += "swallowed and i saw that the";
            document.removeEventListener("click", three, false);
            document.addEventListener("click", 
            function four(){
                bod.style.setProperty("--col1","#000F08")
                bod.style.setProperty("--col2","#01BAEF")
                bod.style.setProperty("--col3","#FFD400")
                bod.style.setProperty("--col4","#5AFF15")
                bod.style.setProperty("--col5","#FF312E")
                bod.style.setProperty("--bckg","#000F08")
                c[5].style.fontFamily = "Dosis"
                c[5].style.fontSize = "150%"
                c[5].innerText += "label said"
                document.removeEventListener("click", four, false);
                document.addEventListener("click", 
                function five(){
                    c[2].style.setProperty("--font","Nanum Pen Script")
                    c[2].style.setProperty("display","flex")
                    c[2].style.setProperty("text-align","center")
                    c[2].style.setProperty("flex-direction","column")
                    c[2].style.setProperty("align-items","center")
                    c[2].innerHTML += "<h1 style = 'font-size:180%'>McCafferty's</h1>"
                    document.removeEventListener("click", five, false);
                    document.addEventListener("click", 
                    function six(){
                        c[2].innerHTML += "<h1 style = 'font-size:200%'>Bib</h1>"
                        bod.style.setProperty("--col1","#FFFFFF")
                        bod.style.setProperty("--col2","#FFFFFF")
                        bod.style.setProperty("--col3","#ffffff")
                        bod.style.setProperty("--col4","#ffffff")
                        bod.style.setProperty("--col5","#ffffff")
                        bod.style.setProperty("--bckg","#ffffff")
                        document.removeEventListener("click", six, false);
                        document.addEventListener("click", verse4, false); 
                        document.removeEventListener("click",verse3, false)
                    }); 
                }); 
            }); 
        });
    })
}

function verse4(){
    var cube1 = document.getElementById("cube1")
    var cube2 = document.getElementById("cube2")
    var cube3 = document.getElementById("cube3")
    var cube4 = document.getElementById("cube4")
    var cube5 = document.getElementById("cube5")
    var cube6 = document.getElementById("cube6")
    var cube7 = document.getElementById("cube7")
    var cubes = [cube1, cube2, cube3, cube4, cube5, cube6, cube7]

    document.removeEventListener("click", verse4);
    clearText();
    cube5.style.display = "none"
    bod.style.setProperty("--header-font","Satisfy")
    bod.style.setProperty("--font","Schoolbell")
    bod.style.setProperty("--col1","black")
    bod.style.setProperty("--col2","white")
    bod.style.setProperty("color","var(--col2")
    bod.style.setProperty("--bckg","var(--col2)")
    cube1.style.backgroundColor = "var(--col1)"
    cube1.style.setProperty("display","flex")
    cube1.style.setProperty("text-align","center")
    cube1.style.setProperty("flex-direction","column")
    cube1.style.setProperty("align-items","center")
    cube1.style.font = ""
    cube1.innerText = "and then all the scenery";
    document.addEventListener("click", 
    function two(){
        bod.style.setProperty("--col1","white")
        bod.style.setProperty("--col2","black")
        cube3.innerText += " melted away, and in";
        cube3.style.backgroundColor = "var(--col1)"
        document.removeEventListener("click", two, false);
        document.addEventListener("click", 
        function three(){
            cube2.style.setProperty("display","flex")
            cube2.style.setProperty("text-align","center")
            cube2.style.setProperty("flex-direction","column")
            cube2.style.setProperty("align-items","center")
            bod.style.setProperty("--col1","black")
            bod.style.setProperty("--col2","white")
            cube2.innerText += " back of it the only thing";
            cube2.style.backgroundColor = "var(--col1)"
            document.removeEventListener("click", three, false);
            document.addEventListener("click", 
            function four(){
                cube6.style.font = ""
                bod.style.setProperty("--col1","white")
                bod.style.setProperty("--col2","black")
                cube6.style.setProperty("display","flex")
                cube6.style.setProperty("text-align","center")
                cube6.style.setProperty("flex-direction","column")
                cube6.style.setProperty("align-items","center")
                cube6.innerText += " left was";
                cube6.style.backgroundColor = "var(--col1)"
                document.removeEventListener("click", four, false);
                document.addEventListener("click", function five(){
                    for(var i = 0; i<cubes.length; i++){
                        cubes[i].style.display = "none"
                    }
                    alert("McCafferty's Bib")
                    document.removeEventListener("click", five, false)
                    chorus2()
                })
            }); 
        });
    });
}

function chorus2(){
    hideCubes();
    bod.style.setProperty("--col1","#4E878C")
    bod.style.setProperty("--col2","#FFFDF0")
    bod.style.setProperty("--col3","#DE9282")
    bod.style.setProperty("--col4","#965D7E")
    bod.style.setProperty("--col5","#171738")
    bod.style.setProperty("--bckg","var(--col1)")
    bod.style.setProperty("--font","Work Sans")
    bod.style.backgroundImage = "var(--b2)"
    bod.innerHTML += "<div id = 'circle1' class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle2'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle3'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle4'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle5'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle6'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle7'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle8'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle9'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle10'class = 'circle'></div>"
    bod.innerHTML += "<div id = 'circle11'class = 'circle'></div>"
    var circles = document.getElementsByClassName("circle");
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.fontSize = "100%"
        circles[i].style.setProperty("color","var(--col5)")
    }
    document.getElementById("circle1").style.display = "flex"
    document.getElementById("circle1").innerText = "and the gray gray clouds";
    document.addEventListener("click", 
    function two(){
        document.getElementById("circle2").style.display = "flex"
        document.getElementById("circle2").innerText = "have arrived and the gray gray"
        document.getElementById("circle5").style.display = "flex"
        document.getElementById("circle11").style.display = "flex"
        document.removeEventListener("click", two, false);
        document.addEventListener("click", 
        function three(){
            document.getElementById("circle3").style.display = "flex"
            document.getElementById("circle3").innerText = "clouds have decided to stay"
            document.getElementById("circle6").style.display = "flex"
            document.getElementById("circle10").style.display = "flex"
            document.removeEventListener("click", three, false);
            document.addEventListener("click", 
            function four(){
                document.getElementById("circle4").style.display = "flex"
                document.getElementById("circle4").innerText = "with us from now on"
                document.getElementById("circle7").style.display = "flex"
                document.getElementById("circle8").style.display = "flex"
                document.getElementById("circle9").style.display = "flex"
                document.removeEventListener("click", four, false)
                document.addEventListener("click", cities)
            }); 
        });
    })
}

function cities(){
    document.removeEventListener("click", cities, false)
    bod.style.backgroundImage = ""
    clearText()
    var circles = document.getElementsByClassName("circle")
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.display = "none"
    }
    bod.style.setProperty("--col1","#F0EFF4")
    bod.style.setProperty("--col2","#08BDBD")
    bod.style.setProperty("--col3","#422040")
    bod.style.setProperty("--col4","#DC0073")
    bod.style.setProperty("--col5","#C19AB7")
    bod.style.setProperty("--bckg","#F0EFF4")


    var c = document.getElementsByClassName("cube")
    for (var i = 0; i < c.length; i++) {
        c[i].style.display = "block"
    }
    c[0].style.backgroundColor = "var(--col2)"
    c[1].style.backgroundColor = "var(--col3)"
    c[2].style.backgroundColor = "var(--col4)"
    c[3].style.backgroundColor = "var(--col5)"
    c[4].style.backgroundColor = "var(--col5)"
    c[5].style.backgroundColor = "var(--col2)"
    c[6].style.backgroundColor = "var(--col3)"
}

function sketchCity(){
    
}



lyrics();


// document.getElementsByTagName('body')[0].style.setProperty("--bckg","#000000");
