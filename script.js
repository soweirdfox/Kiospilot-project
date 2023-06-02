//add new workshops from json file dinamically
fetch("workshops1.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      modal.innerHTML =  `<div class="box" onclick="popupForWorkshop()">
      <div class="box2" style="background-image: url(${json[i].backgroungImage}); background-size: cover;"><div class="img-cont" id="imagesOfType${i}"></div></div>
      <div class="box3">
      
        <p class="title">${json[i].title}</p>
       
      
        <div class="icons">
        <div class="info-icon">
        <i class="material-icons" style="font-size: 25px; padding-left: 10px">
          signal_cellular_alt_2_bar
        </i>
        
        <span class="icon-span">${json[i].difficulty}</span>
        </div>
        <div class="info-icon">
        <i class="material-icons">group</i>
        <span class="icon-span">${json[i].minNumberOfParticipants} - ${json[i].maxNumberOfParticipants}</span>
        </div>
        <div class="info-icon">
        <i class="material-icons">schedule</i>
        <span class="icon-span">${json[i].minDuration} - ${json[i].maxDuration}</span>
        </div>
        </div>
      </div>`;
      
      const container = document.getElementById("container");
      container.appendChild(modal);
      modal.id = i;
      const types = json[i].category;
      const images = json[i].typeImage;
      let imageCont = document.getElementById(`imagesOfType${i}`);
      for (let j=0; j< types.length; j++){
        let image = document.createElement("img");
        image.src = images[j];
        image.style.width = "30px";
        imageCont.appendChild(image);
      }
    }
  });

//popup opens when user clicks on workshops
function popupForWorkshop() {
  fetch("workshops1.json")
    .then((response) => response.json())
    .then((json) => {
      const workshopList = document.getElementsByClassName("modal");
      for (let i = 0; i < workshopList.length; i++) {
        workshopList[i].onclick = function () {
          const elementId = workshopList[i].id;
          console.log(elementId);
          document.getElementById("popup-header").innerText =
            json[elementId].title;
          document.getElementById("popup-difficulty").innerText =
            json[elementId].difficulty;
          document.getElementById(
            "popup-participants"
          ).innerText = `${json[elementId].minNumberOfParticipants} - ${json[elementId].maxNumberOfParticipants}`;
          document.getElementById(
            "popup-duration"
          ).innerText = `${json[elementId].minDuration} - ${json[elementId].maxDuration}`;
          document
            .getElementById("popup-main-image")
            .setAttribute("src", json[elementId].popupImage);
          document.getElementById("popup-pitch").innerText = json[elementId].pitch;  
          document.getElementById("p-description").innerText = json[elementId].description;
          const steps = json[elementId].instructions;
          const fullStepContainer = document.getElementById("steps-container");
          const stepContainer = document.createElement("div");
          fullStepContainer.appendChild(stepContainer);
          stepContainer.id = "int-step-cont";
          for (let i = 0; i<steps.length; i++){

            let stepHeader = document.createElement("h3");
            stepHeader.classList.add('popup-h3');
            let stepHeaderText = document.createTextNode(`Step ${i+1}`);
            stepHeader.appendChild(stepHeaderText);
            stepContainer.appendChild(stepHeader);
            let stepPara = document.createElement("div");
            stepPara.classList.add("popup-p");
            stepPara.innerText = steps[i]; 
            stepContainer.appendChild(stepPara);
          }
          document.getElementById("materials").innerText = json[elementId].materials;
          document.getElementById("source").innerText = json[elementId].source;
          document.getElementById("myPopup").classList.toggle("show");
          document.getElementById("myPopup").scrollTo(0, 0);
          console.log(steps);
        };
      }
    });
}

//close popup when user clicks at Close button
function closePopup() {
  let parent = document.getElementById("steps-container");
  let stepChild = document.getElementById("int-step-cont");
  parent.removeChild(stepChild);
  document.getElementById("myPopup").classList.remove("show");
}


//print the popup content when user clicks "Print" button
function popupPrint(){
  let printOne = document.getElementById('myPopup').innerHTML;
   let w = window.open();
   w.document.write('<html><head><title>Copy Printed</title><link rel="stylesheet" href="style.css"></head><body>' + printOne + '</body></html>');
   setTimeout(function() {w.window.print()}, 100);
   setTimeout(function() {w.close()}, 100);
   document.getElementById("myPopup").scrollTo(0, 0);
   return false;
}