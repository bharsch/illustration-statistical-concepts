
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
var bVec = [-2, -1, 0, 1, 2]
var uVec = [1, 5, 15]
var xVec = [1, 5, 15]

// set initial value for slider 1
document.getElementById("sliderValue01Id").innerHTML = "\\(n = " + nVec[2] + "\\)";
var element = document.getElementById("sliderValue01Id");
MathJax.typeset([element]);

// set initial value for slider 2
document.getElementById("sliderValue02Id").innerHTML = "\\(\\beta_{1} = " + bVec[2] + "\\)";
var element = document.getElementById("sliderValue02Id");
MathJax.typeset([element]);

// set initial value for slider 3
document.getElementById("sliderValue03Id").innerHTML = "\\(\\sigma_{u}^{2} = " + uVec[1] + "\\)";
var element = document.getElementById("sliderValue03Id");
MathJax.typeset([element]);

// set initial value for slider 4
document.getElementById("sliderValue04Id").innerHTML = "\\(\\sigma_{X}^{2} = " + xVec[1] + "\\)";
var element = document.getElementById("sliderValue04Id");
MathJax.typeset([element]);

//..............................
// handling of slider                
// see: https://seiyria.com/bootstrap-slider/
    
var slider01 = new Slider("#slider01Id", { 
    tooltip: "never",
    formatter: function(value) {
        return nVec[value];
    } 
});
var slider02 = new Slider("#slider02Id", { 
    tooltip: "never",
    formatter: function(value) {
        return bVec[value]
    } 
});
var slider03 = new Slider("#slider03Id", { 
    tooltip: "never",
    formatter: function(value) {
        return uVec[value]
    } 
});
var slider04 = new Slider("#slider04Id", { 
    tooltip: "never",
    formatter: function(value) {
        return xVec[value]
    } 
});

slider01.on("slide", function() {

    var sliderValue01 = slider01.getValue() + 1;
    var sliderValue02 = slider02.getValue() + 1;
    var sliderValue03 = slider03.getValue() + 1;
    var sliderValue04 = slider04.getValue() + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N4Id").setAttribute("src", "./figures/figure_04_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");

    document.getElementById("sliderValue01Id").innerHTML = "\\(n = " + nVec[slider01.getValue()] + "\\)";
    var element = document.getElementById("sliderValue01Id");
    MathJax.typeset([element]);

})

slider02.on("slide", function() {
    
    var sliderValue01 = slider01.getValue() + 1;
    var sliderValue02 = slider02.getValue() + 1;
    var sliderValue03 = slider03.getValue() + 1;
    var sliderValue04 = slider04.getValue() + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N4Id").setAttribute("src", "./figures/figure_04_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");

    document.getElementById("sliderValue02Id").innerHTML = "\\(\\beta_{1} = " + bVec[slider02.getValue()] + "\\)";
    var element = document.getElementById("sliderValue02Id");
    MathJax.typeset([element]);

})

slider03.on("slide", function() {

    var sliderValue01 = slider01.getValue() + 1;
    var sliderValue02 = slider02.getValue() + 1;
    var sliderValue03 = slider03.getValue() + 1;
    var sliderValue04 = slider04.getValue() + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N4Id").setAttribute("src", "./figures/figure_04_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");

    document.getElementById("sliderValue03Id").innerHTML = "\\(\\sigma_{u}^{2} = " + uVec[slider03.getValue()] + "\\)";
    var element = document.getElementById("sliderValue03Id");
    MathJax.typeset([element]);

})

slider04.on("slide", function() {

    var sliderValue01 = slider01.getValue() + 1;
    var sliderValue02 = slider02.getValue() + 1;
    var sliderValue03 = slider03.getValue() + 1;
    var sliderValue04 = slider04.getValue() + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N4Id").setAttribute("src", "./figures/figure_04_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");

    document.getElementById("sliderValue04Id").innerHTML = "\\(\\sigma_{X}^{2} = " + xVec[slider04.getValue()] + "\\)";
    var element = document.getElementById("sliderValue04Id");
    MathJax.typeset([element]);

})

// loop over 4 slider and 4 figures
function sliderLoop(loopSliderValue01, loopSliderValue02, loopSliderValue03, loopSliderValue04) {

    var sliderValue01 = loopSliderValue01 + 1;
    var sliderValue02 = loopSliderValue02 + 1;
    var sliderValue03 = loopSliderValue03 + 1;
    var sliderValue04 = loopSliderValue04 + 1;

    document.getElementById("imageL1N1Id").setAttribute("src", "./figures/figure_01_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N2Id").setAttribute("src", "./figures/figure_02_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N3Id").setAttribute("src", "./figures/figure_03_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");
    document.getElementById("imageL1N4Id").setAttribute("src", "./figures/figure_04_" + sliderValue01 + "_" + sliderValue02 + "_" + sliderValue03 + "_" + sliderValue04 + ".svg");

    document.getElementById("sliderValue01Id").innerHTML = "\\(n = " + nVec[slider01.getValue()] + "\\)";
    var element = document.getElementById("sliderValue01Id");
    MathJax.typeset([element]);

    document.getElementById("sliderValue02Id").innerHTML = "\\(\\beta_{1} = " + bVec[slider02.getValue()] + "\\)";
    var element = document.getElementById("sliderValue02Id");
    MathJax.typeset([element]);

    document.getElementById("sliderValue03Id").innerHTML = "\\(\\sigma_{u}^{2} = " + uVec[slider03.getValue()] + "\\)";
    var element = document.getElementById("sliderValue03Id");
    MathJax.typeset([element]);

    document.getElementById("sliderValue04Id").innerHTML = "\\(\\sigma_{X}^{2} = " + xVec[slider04.getValue()] + "\\)";
    var element = document.getElementById("sliderValue04Id");
    MathJax.typeset([element]);

    var slider = document.getElementById("slider01Id");
    slider.value = sliderValue01;

    var slider = document.getElementById("slider02Id");
    slider.value = sliderValue02;

    var slider = document.getElementById("slider03Id");
    slider.value = sliderValue03;

    var slider = document.getElementById("slider04Id");
    slider.value = sliderValue04;

};

// explanation button
explainButto01Click = function(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
}
  
// animate silder 1 out of 4
animateButto01Click = function(org, start, stop, audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
  var ind = start;
  var loopSliderValue02 = slider02.getValue();
  var loopSliderValue03 = slider03.getValue();
  var loopSliderValue04 = slider04.getValue();
  var outerInterval = setInterval(function() {
    var loopSliderValue01 = ind;
    slider01.setValue(ind);
    sliderLoop(loopSliderValue01, loopSliderValue02, loopSliderValue03, loopSliderValue04);
    ind++;
    if (ind > stop) {
    var innterInteval = setInterval(function() {
        slider01.setValue(ind);
        slider01.setValue(org);
        sliderLoop(org, loopSliderValue02, loopSliderValue03, loopSliderValue04);
        clearInterval(innterInteval);
    }, 1000);
    clearInterval(outerInterval);
    }
  }, 1000);
}

// animate silder 2 out of 4
animateButto02Click = function(org, start, stop, audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
  var ind = start;
  var loopSliderValue01 = slider01.getValue();
  var loopSliderValue03 = slider03.getValue();
  var loopSliderValue04 = slider04.getValue();
  var outerInterval = setInterval(function() {
    var loopSliderValue02 = ind;
    slider02.setValue(ind);
    sliderLoop(loopSliderValue01, loopSliderValue02, loopSliderValue03, loopSliderValue04);
    ind++;
    if (ind > stop) {
      var innterInteval = setInterval(function() {
        slider02.setValue(ind);
        slider02.setValue(org);
        sliderLoop(loopSliderValue01, org, loopSliderValue03, loopSliderValue04);
        clearInterval(innterInteval);
      }, 1000);
      clearInterval(outerInterval);
    }
  }, 1000);
}

// animate silder 3 out of 4
animateButto03Click = function(org, start, stop, audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
  var ind = start;
  var loopSliderValue01 = slider01.getValue();
  var loopSliderValue02 = slider02.getValue();
  var loopSliderValue04 = slider04.getValue();
  var outerInterval = setInterval(function() {
    var loopSliderValue03 = ind;
    slider03.setValue(ind);
    sliderLoop(loopSliderValue01, loopSliderValue02, loopSliderValue03, loopSliderValue04);
    ind++;
    if (ind > stop) {
    var innterInteval = setInterval(function() {
      slider03.setValue(ind);
      slider03.setValue(org);
      sliderLoop(loopSliderValue01, loopSliderValue02, org, loopSliderValue04);
      clearInterval(innterInteval);
    }, 1000);
    clearInterval(outerInterval);
    }
  }, 1000);
}

// animate silder 3 out of 4
animateButto04Click = function(org, start, stop, audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
  var ind = start;
  var loopSliderValue01 = slider01.getValue();
  var loopSliderValue02 = slider02.getValue();
  var loopSliderValue03 = slider03.getValue();
  var outerInterval = setInterval(function() {
    var loopSliderValue04 = ind;
    slider04.setValue(ind);
    sliderLoop(loopSliderValue01, loopSliderValue02, loopSliderValue03, loopSliderValue04);
    ind++;
    if (ind > stop) {
      var innterInteval = setInterval(function() {
        slider04.setValue(ind);
        slider04.setValue(org);
        sliderLoop(loopSliderValue01, loopSliderValue02, loopSliderValue04, org);
        clearInterval(innterInteval);
      }, 1000);
    clearInterval(outerInterval);
  }
  }, 1000);
}
  
// set start page
document.getElementById("tabLinkL1N1Id").click();
