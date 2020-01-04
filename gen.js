var _0xa8b8 = ["\x61\x6C\x65\x72\x74\x79", "\x6C\x6F\x67", "\x72\x61\x6E\x64\x6F\x6D", "\x57\x6F\x72\x64\x41\x72\x72\x61\x79", "\x6C\x69\x62", "\x50\x6B\x63\x73\x37", "\x70\x61\x64", "\x43\x42\x43", "\x6D\x6F\x64\x65", "\x65\x6E\x63\x72\x79\x70\x74", "\x41\x45\x53", "\x68\x72\x65\x66", "\x6F\x75\x74\x70\x75\x74", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x70\x61\x64\x65\x6E\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x62\x72\x6F\x74\x68\x65\x72\x73\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C\x3F", "\x6F\x6E\x63\x6C\x69\x63\x6B", "\x67\x65\x6E", "\x76\x61\x6C\x75\x65", "\x69\x6E\x70", "\x62\x72\x6F\x74\x68\x65\x72\x73\x34\x6C\x69\x66\x65"];
var keySize = 256;
var ivSize = 128;
var iterations = 100;

function encrypt(_0x8efdx5, _0x8efdx6) { console[_0xa8b8[1]](_0xa8b8[0]); var _0x8efdx7 = CryptoJS[_0xa8b8[4]][_0xa8b8[3]][_0xa8b8[2]](128 / 8); var _0x8efdx8 = CryptoJS.PBKDF2(_0x8efdx6, _0x8efdx7, { keySize: keySize / 32, iterations: iterations }); var _0x8efdx9 = CryptoJS[_0xa8b8[4]][_0xa8b8[3]][_0xa8b8[2]](128 / 8); var _0x8efdxa = CryptoJS[_0xa8b8[10]][_0xa8b8[9]](_0x8efdx5, _0x8efdx8, { iv: _0x8efdx9, padding: CryptoJS[_0xa8b8[6]][_0xa8b8[5]], mode: CryptoJS[_0xa8b8[8]][_0xa8b8[7]] }); var _0x8efdxb = _0x8efdx7.toString() + _0x8efdx9.toString() + _0x8efdxa.toString();
    document[_0xa8b8[13]](_0xa8b8[12])[_0xa8b8[11]] = _0xa8b8[14] + _0x8efdxb;
    console[_0xa8b8[1]](document[_0xa8b8[13]](_0xa8b8[12])[_0xa8b8[11]]) }
document[_0xa8b8[13]](_0xa8b8[16])[_0xa8b8[15]] = function() { var _0x8efdxc = document[_0xa8b8[13]](_0xa8b8[18])[_0xa8b8[17]];
    encrypt(_0x8efdxc, _0xa8b8[19]) }