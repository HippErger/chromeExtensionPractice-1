let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });


  // * Trying to switch colors on each click. Doesn't work this. 
  // I don't think we have access to document or window or console 
  // directly through an extension. 
  // * I see now that this script is only loaded once into the 
  // *
  
  // button that rendered once. It can't make changes to the DOM itself. 
  // changeColor.onclick = function(element) {
  //   let color = element.target.value;

  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     if(document.body.style.backgroundColor === color) { 
  //       chrome.storage.sync.set({color: "white"}, function(data) {
  //         console.log('color is ' + item);
  //       })
  //       chrome.tabs.executeScript(
  //         tabs[0].id,
  //         {code: 'document.body.style.backgroundColor = "black"'});
  //     } else {
  //       chrome.tabs.executeScript(
  //         tabs[0].id,
  //         {code: 'document.body.style.backgroundColor = "' + color + '";'});
  //     }
  //   });
  // };

