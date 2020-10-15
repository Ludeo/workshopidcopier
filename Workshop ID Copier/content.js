var url = window.location.href;
var id = url.split("id=");

function onCopy(e) { 
    if(window.getSelection() == ""){
        navigator.clipboard.writeText(id[1]).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.log('Async: Could not copy text: ', err);
        });
    }
}

document.addEventListener('copy',onCopy,true); 