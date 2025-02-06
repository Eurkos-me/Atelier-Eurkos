function accordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("acc-show") == -1) {
    x.className += " acc-show";
    } else { 
    x.className = x.className.replace(" acc-show", "");
    }
};

function checkBox (x) {
    var id = '#' + x;
    $(id).toggleClass('done', this.checked);
};

function namePC () {
    var pcName = document.getElementById('pcname-choice').value;
    var storeNum = document.getElementById('storenum').value;
    if (storeNum.length == 2) {
        var storeNumConvert = `0${storeNum}`;
        console.log('added 0');
    } else if (storeNum.length == 1) {
        var storeNumConvert = `00${storeNum}`;
        console.log('added 00');
    } else {
        var storeNumConvert = storeNum;
    }
    var output = `${pcName}-${storeNumConvert}`;
    document.getElementById('pcname-output').setAttribute('value',output.toUpperCase());
};

function toClipboard() {
    var copyText = document.getElementById('pcname-output');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
        if (result.state === 'granted') {
            navigator.clipboard.writeText(copyText.value);
            document.getElementById('copied').innerHTML = ' Success!';
        } else {
            document.getElementById('copied').innerHTML = ' Use Ctrl + C to copy.';
        }
      });
    
}; 
