
//..............................
// handling of collapsibles
// see: https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collButtonCl");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
}

//..............................
// handling of tabs      
// see: https://www.w3schools.com/howto/howto_js_tabs.asp

// open specific tab
function openSpecificTab(tabContentId, tabLinkId, color) {

// hide all elements with class="tabcontent_l1" by default */
var i, tabcontent, tablinks;

tabcontent = document.getElementsByClassName("tabContentL1Cl");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

// remove the background color of all tablinks/buttons
tablinks = document.getElementsByClassName("tabLinkL1Cl");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
}

// show the specific tab content
document.getElementById(tabContentId).style.display = "block";

// add the specific color to the button used to open the tab content
document.getElementById(tabLinkId).style.backgroundColor = color;

}

var nVec = [5, 10, 25, 50, 100]
var pVec = [0.2, 0.4, 0.6, 0.8]

// set initial value for slider 1
document.getElementById("ex601Val").innerHTML = "\\(n = " + nVec[2] + "\\)";
var element = document.getElementById("ex601Val");
MathJax.typeset([element]);

// set initial value for slider 2
document.getElementById("ex602Val").innerHTML = "\\(\\beta_{1} = " + pVec[1] + "\\)";
var element = document.getElementById("ex602Val");
MathJax.typeset([element]);

//..............................
// handling of slider                
// see: https://seiyria.com/bootstrap-slider/
    
//var slider01 = new Slider("#ex601", { tooltip: 'always' });
var slider01 = new Slider("#ex601", { 
    tooltip: "never",
    formatter: function(value) {
        return nVec[value]
    } 
});
//var slider02 = new Slider("#ex602", { tooltip: 'always' });
var slider02 = new Slider("#ex602", { 
    tooltip: "never",
    formatter: function(value) {
        return pVec[value]
    } 
});

slider01.on("slide", function() {

    var sliderValue01 = slider01.getValue() + 1;
    var sliderValue02 = slider02.getValue() + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + ".svg");

    document.getElementById("ex601Val").innerHTML = "\\(n = " + nVec[slider01.getValue()] + "\\)";
    var element = document.getElementById("ex601Val");
    MathJax.typeset([element]);

})

slider02.on("slide", function() {

    var sliderValue01 = slider01.getValue() + 1;
    var sliderValue02 = slider02.getValue() + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + ".svg");

    document.getElementById("ex601Val").innerHTML = "\\(p = " + pVec[slider02.getValue()] + "\\)";
    var element = document.getElementById("ex602Val");
    MathJax.typeset([element]);

})

// set start page
document.getElementById("tabLinkL1N1Id").click();



  window.addEventListener("load", function() {
    var placeholder = document.getElementById("table-placeholder");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        placeholder.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "./tables/table_01_N5.html", true);
    xhttp.send();
  });