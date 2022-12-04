var storage = chrome.storage.sync;

var key = "hits";

function KeyCheck(event, hits)
{
   console.log(event === undefined)
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
         hits += 1;

         chrome.runtime.sendMessage({hits: hits}, (response)=>{
            console.log(response.confirm);
        });

   }
}

storage.get(key,function(res){
   window.addEventListener("keydown", (event) => { KeyCheck(event, res[key]) });
});