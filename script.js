// User inputs MAC Address
document.querySelector('#mac').addEventListener('keyup', function () {

    var mac = document.querySelector('#mac').value;

    // Removing white space
    mac = mac.replace(/ /g, '')
    
    delimeter = mac.charAt([2])
 
    if (delimeter == '-') {
        mac = mac.replace(/-/g, '');
    }
    else if (delimeter == ':') {
        mac = mac.replace(/:/g, '');
    }
    else {
        mac = mac.replace(/\./g, '');

    }

    valid = mac.match(/[a-fA-F0-9]*/);

    if (mac.length != 12 || mac != valid) {
        document.querySelector('#result').innerText = "Invalid MAC Address"    
    }
    else {
        document.querySelector('#result').innerText = mac
    }
});