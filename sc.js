var _0x53e7 = ["\x48\x65\x6C\x6C\x6F\x20\x57\x6F\x72\x6C\x64", "\x62\x72\x6F\x74\x68\x65\x72\x73\x34\x6C\x69\x66\x65", "\x61\x6C\x65\x72\x74\x79", "\x6C\x6F\x67", "\x72\x61\x6E\x64\x6F\x6D", "\x57\x6F\x72\x64\x41\x72\x72\x61\x79", "\x6C\x69\x62", "\x50\x6B\x63\x73\x37", "\x70\x61\x64", "\x43\x42\x43", "\x6D\x6F\x64\x65", "\x65\x6E\x63\x72\x79\x70\x74", "\x41\x45\x53", "\x73\x75\x62\x73\x74\x72", "\x70\x61\x72\x73\x65", "\x48\x65\x78", "\x65\x6E\x63", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x64\x65\x63\x72\x79\x70\x74", "\x6F\x6E\x63\x6C\x69\x63\x6B", "\x74\x65\x73\x74", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x76\x61\x6C\x75\x65", "\x70\x73\x77\x64", "\x57\x72\x6F\x6E\x67\x20\x70\x61\x73\x73\x77\x6F\x72\x64\x20\x62\x72\x6F", "\x73\x65\x61\x72\x63\x68", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x3F", "", "\x72\x65\x70\x6C\x61\x63\x65", "\x68\x72\x65\x66"];
var keySize = 256;
var ivSize = 128;
var iterations = 100;
var message = _0x53e7[0];

function encrypt(_0x3857x7, _0x3857x8) { console[_0x53e7[3]](_0x53e7[2]); var _0x3857x9 = CryptoJS[_0x53e7[6]][_0x53e7[5]][_0x53e7[4]](128 / 8); var _0x3857xa = CryptoJS.PBKDF2(_0x3857x8, _0x3857x9, { keySize: keySize / 32, iterations: iterations }); var _0x3857xb = CryptoJS[_0x53e7[6]][_0x53e7[5]][_0x53e7[4]](128 / 8); var _0x3857xc = CryptoJS[_0x53e7[12]][_0x53e7[11]](_0x3857x7, _0x3857xa, { iv: _0x3857xb, padding: CryptoJS[_0x53e7[8]][_0x53e7[7]], mode: CryptoJS[_0x53e7[10]][_0x53e7[9]] }); var _0x3857xd = _0x3857x9.toString() + _0x3857xb.toString() + _0x3857xc.toString(); return _0x3857xd }

function decrypt(_0x3857xd, _0x3857x8) { var _0x3857x9 = CryptoJS[_0x53e7[16]][_0x53e7[15]][_0x53e7[14]](_0x3857xd[_0x53e7[13]](0, 32)); var _0x3857xb = CryptoJS[_0x53e7[16]][_0x53e7[15]][_0x53e7[14]](_0x3857xd[_0x53e7[13]](32, 32)); var _0x3857xc = _0x3857xd[_0x53e7[17]](64); var _0x3857xa = CryptoJS.PBKDF2(_0x3857x8, _0x3857x9, { keySize: keySize / 32, iterations: iterations }); var _0x3857xf = CryptoJS[_0x53e7[12]][_0x53e7[18]](_0x3857xc, _0x3857xa, { iv: _0x3857xb, padding: CryptoJS[_0x53e7[8]][_0x53e7[7]], mode: CryptoJS[_0x53e7[10]][_0x53e7[9]] }); return _0x3857xf }
document[_0x53e7[21]](_0x53e7[20])[_0x53e7[19]] = function() {
    var _0x3857x10 = document[_0x53e7[21]](_0x53e7[23])[_0x53e7[22]];
    console.log(_0x3857x10)
    if (_0x3857x10 != "galizegallam") {
        alert(_0x53e7[24])
    } else {
        var _0x3857x11 = window[_0x53e7[26]][_0x53e7[25]];
        _0x3857x11 = _0x3857x11[_0x53e7[29]](_0x53e7[27], _0x53e7[28]);
        var _0x3857xf = decrypt(_0x3857x11, "galizegallam");
        window[_0x53e7[26]][_0x53e7[30]] = _0x3857xf.toString(CryptoJS[_0x53e7[16]].Utf8)
    }
}