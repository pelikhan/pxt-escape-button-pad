let codeString = "-";
let lastIdle = 0;

function sendCode() {
    lastIdle = input.runningTime();
    const codeNumber = escape.fromAB(codeString);
    escape.broadcastCodeMessage(codeNumber);
}

input.onButtonPressed(Button.A, function () {
    codeString += "A";
    sendCode();
})
input.onButtonPressed(Button.B, function () {
    codeString += "B";
    sendCode();
})

// display loop
escape.onUpdate(function () {
    if (input.runningTime() - lastIdle > 2000) {
        codeString = "-";
    }
    basic.showString(codeString[codeString.length - 1]);
})