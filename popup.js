var storage = chrome.storage.sync;

var key = "hits";

function updateCount(){
    
    storage.get(key,function(res) {
        if (res[key] === undefined) {
            alert(0)
            document.getElementById("count").innerHTML = 0;
        } else {
            document.getElementById("count").innerHTML = res[key];
            
        }
        
    });
}

updateCount();