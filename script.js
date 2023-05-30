//add new workshops from json file dinamically
fetch("workshops1.json")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      modal.innerHTML = modal.innerHTML = `<div class="box" onclick="popupForWorkshop()">
      <div class="box2" style="background-image: url(${json[i].backgroungImage}); background-size: cover;"><img class="imageOfType" src="${json[i].typeImage}" width="30px"></div>
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
      
      
      
      
      
      
      
      
      
      // `<div class="box" onclick="popupForWorkshop()">
      //     <div class="box2" style="background-color: ${json[i].backgroundColor}"><img class="imageOfType" src="${json[i].typeImage}" width="30px"></div>
      //     <div class="box3">
      //     <div class="workshops-title">
      //       <p class="title">${json[i].title}</p>
      //       </dev>
          
      //       <div class="icons">
      //       <div class="info-icon">
      //       <i class="material-icons" style="font-size: 25px; padding-left: 10px">
      //         signal_cellular_alt_2_bar
      //       </i>
            
      //       <span class="icon-span">${json[i].difficulty}</span>
      //       </div>
      //       <div class="info-icon">
      //       <i class="material-icons">group</i>
      //       <span class="icon-span">${json[i].minNumberOfParticipants} - ${json[i].maxNumberOfParticipants}</span>
      //       </div>
      //       <div class="info-icon">
      //       <i class="material-icons">schedule</i>
      //       <span class="icon-span">${json[i].minDuration} - ${json[i].maxDuration}</span>
      //       </div>
      //       </div>
      //     </div>`;
      const container = document.getElementById("container");
      container.appendChild(modal);
      modal.id = i;
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
          document.getElementById("myPopup").classList.toggle("show");
          document.getElementById("myPopup").scrollTo(0, 0);
        };
      }
    });
}

//close popup when user clicks at Close button
function closePopup() {
  document.getElementById("myPopup").classList.remove("show");
}

//print popup when user clicks at "Print" button
function popupPrint(){
  let divToPrint =  document.getElementById('myPopup');
  let originalContents = document.body.innerHTML;
  let printContents = document.getElementById('myPopup').innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;

}