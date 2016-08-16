/* 
 * Author:         Maximilian Ungar
 * 
 * Creation Date:  06.12.2015 22:22:20
 * File:           galleryloader.js
 */




/*creates an unordered list with all images listed in the json-array*/

function createGallery(responseArray, targetID){
  var output;
  var index;
  
  
  output = '<ul class="galleryList">';
  
  
  for(index = 0; index < responseArray.length; index++){
    output += '<li class="galleryItem">' + 
              '<img src="'+
              responseArray[index].link +
              '" alt="' +
              responseArray[index].name + 
              '"  class="galleryPicture">' +
              '</li>';
  }
  
  
  
  output += '</ul>';
  
  document.getElementById(targetID).innerHTML = output;
}



/*XHR for the galleryImages
 * parameters: filename: which JSON-file shall be chosen
 *             targetID: to which ID the content shall be written
 *                       will be used to call createGallery*/
function requestGalleryPictures(filename, targetID)
{
  console.log("requestGalleryPictures called!");
  
  
  
  
  var xmlhttp = new XMLHttpRequest();
  var url = "JSON/" + filename;
  
  xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
      var response = JSON.parse(xmlhttp.responseText);
      createGallery(response, targetID);
    }
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


/*Listing all eventListener
 * every gallery gets its own listener 
 * */




if(document.getElementById("portigallery")){
  document.getElementById("portigallery")
        .addEventListener("onload", requestGalleryPictures("porti.json", "portigallery"));
}
else if(document.getElementById("balustradegallery"))
{
  document.getElementById("balustradegallery")
        .addEventListener("onload", requestGalleryPictures("balustrade.json", "balustradegallery"));
}
else if(document.getElementById("copertinegallery"))
{
  document.getElementById("copertinegallery")
        .addEventListener("onload", requestGalleryPictures("copertine.json", "copertinegallery"));
}
else if(document.getElementById("grilajegallery"))
{
  document.getElementById("grilajegallery")
        .addEventListener("onload", requestGalleryPictures("grilaje.json", "grilajegallery"));
}
else if(document.getElementById("industrialegallery"))
{
  document.getElementById("industrialegallery")
        .addEventListener("onload", requestGalleryPictures("industriale.json", "industrialegallery"));
}
else
{
  document.getElementById("mobiliargallery")
        .addEventListener("onload", requestGalleryPictures("mobiliar.json", "mobiliargallery"));
}





