let codeString = "-";
let codeNumber = 1;
let idleCount = 0;

function sendCode() {
    idleCount = 0;
    for(let i = 0; i < 2; ++i) {
        escape.broadcastMessageNumber(escape.CODE, codeNumber);    
        basic.pause(5);
    }
}

input.onButtonPressed(Button.A, function () {
    codeString = "A";
    codeNumber = (codeNumber << 1) | 0;
    sendCode();
})
input.onButtonPressed(Button.B, function () {
    codeString = "B";
    codeNumber = (codeNumber << 1) | 1;    
    sendCode();
})

// display loop
escape.onUpdate(function () {
    idleCount++;
    if (idleCount > 20) {
        codeString = "-";
        codeNumber = 0;
    }
    led.stopAnimation()
    basic.showString(codeString);
})