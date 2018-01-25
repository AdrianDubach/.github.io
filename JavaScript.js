let actualNrOfBulbs = 0;
let currentTraversLight = 0;
function changeState(state) {
    if (state === "img/bulb-off.jpg") {
        return state = "img/bulb-on.jpg";
    }
    else
        return state = "img/bulb-off.jpg";
}
function lightSwitch(actuallight) {

    let state = $(`#bulb${actuallight}`).attr("src")
    state = changeState(state)
    //andra argumentet sätter nya värdet.
    $(`#bulb${actuallight}`).attr("src", state)
}
function bulbCss(x) {

    $(".bulbs").attr("style", `width: ${100 / x}%; height: ${100 / x}%; max-width: 30%; max-height: 30%;`)
}
//----------BUTTONS-----------
$("#addBulb").click(function () {

    
    actualNrOfBulbs++;
    $("#imgContainer").append(`<img class="bulbs" id="bulb${actualNrOfBulbs}" src="img/bulb-off.jpg" />`)

    bulbCss(actualNrOfBulbs)

})


$("#removeBulb").click(function () {


    $(`#bulb${actualNrOfBulbs}`).remove();
    if (actualNrOfBulbs > 0)
    actualNrOfBulbs--;
    if (currentTraversLight > actualNrOfBulbs) {
        currentTraversLight = 0;
    }
    bulbCss(actualNrOfBulbs)

})

$("#traverse").click(function () {
    lightSwitch(currentTraversLight)
    currentTraversLight++;
    if ((currentTraversLight % (actualNrOfBulbs + 1)) === 0 || currentTraversLight > actualNrOfBulbs) {
        currentTraversLight = 1;
    }
    lightSwitch(currentTraversLight)
   
})

$("#toggleAll").click(function () {
    for (var i = 0; i < actualNrOfBulbs; i++) {
        lightSwitch(i+1)
    }
})
