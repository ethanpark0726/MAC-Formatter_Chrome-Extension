// User inputs MAC Address
document.querySelector('#mac').addEventListener('keyup', function () {

    var mac = document.querySelector('#mac').value;
    var macStr = '';

    // Removing white space
    mac = mac.replace(/ /g, '')
    
    delimeter = mac.charAt([2])

    // Removing delimeter like -, :, and .
    if (delimeter != ':') {
        if (delimeter == '-') {
            mac = mac.replace(/-/g, ':');
        }

        // 1111.2222.3333 or
        // 1111aaaa3333
        else {

            // Case - 1111.2222.3333
            if(mac.length != 12) {
                var str = mac.split('.');
                
                for(var i in str) {
                    var temp = str[i].substr(0, 2) + ':' + str[i].substr(2, 2) + ':';
                    macStr += temp;
                }
            }
            else {
                for(var i = 0; i < mac.length; i += 4) {
                    var temp = mac.substr(i, 2) + ':' + mac.substr(i + 2, 2) + ':';
                    macStr += temp;
                }
            }
            mac = macStr.slice(0, -1);
        }
    }

    valid = mac.match(/[a-fA-F0-9:]*/);

    if (mac.length != 17 || mac != valid) {
        document.querySelector('#result').innerText = "Invalid MAC Address"    
    }
    else {
        document.querySelector('#result').innerText = mac
    }
});