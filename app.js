const passDisplay = document.getElementById("passDisplay");
const slider = document.getElementById("slider");
const sliderValue = document.querySelector(".pass-length span");
const genPassBtn = document.querySelector(".genPassBtn");
const lower = document.getElementById("lowercase");
const upper = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbols");
const copyBtn = document.querySelector(".passDisplay-con span");

// UPDATING VALUE OF SLIDER
sliderValue.textContent = slider.value;
slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
});

copyBtn.addEventListener("click", () => {
    if(passDisplay.value != "" || passDisplay.value >= 1) {
        navigator.clipboard.writeText(passDisplay.value);
        copyBtn.title = "Password Copied";

        setTimeout(() => {
            copyBtn.title = "";
        }, 2000);
    }
})

genPassBtn.addEventListener("click", () => {
    genPass();
});

function genPass() {
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let symbols = "~!@#$%^&*_+";
    let allChars = "";
    let pass = "";
    lower.checked ? allChars += lowercase : "";
    upper.checked ? allChars += uppercase : "";
    number.checked ? allChars += nums : "";
    symbol.checked ? allChars += symbols : "";

    for(i=0; i<=slider.value; i++) {
        pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    passDisplay.value = pass;
}
