let result = document.getElementById("palindromresult");

function checkPalindrom() {

    let text = document.getElementById("areabox").value.toLowerCase();

    let cleanedText = text.replace(/[^a-z]+/g, '');

    let reverseText = cleanedText.split("").reverse().join("");

    if (cleanedText !== "" && cleanedText === reverseText) {

        result.innerHTML = "ovo je palindrom";
    }
    else {
        result.innerHTML = "ovo nije palindrom";
    }
}