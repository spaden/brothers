var keySize = 256;
var ivSize = 128;
var iterations = 100;



function encrypt(msg, pass) {
    console.log("alerty")
    var salt = CryptoJS.lib.WordArray.random(128 / 8);

    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize / 32,
        iterations: iterations
    });

    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    var encrypted = CryptoJS.AES.encrypt(msg, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    });

    // salt, iv will be hex 32 in length
    // append them to the ciphertext for use  in decryption
    var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
    document.getElementById("output").href = "https://spaden.github.io/brothers.github.io/index.html?" + transitmessage
    console.log(document.getElementById("output").href)
}


document.getElementById("gen").onclick = function() {
    var hr = document.getElementById("inp").value

    encrypt(hr, "brothers4life")
}