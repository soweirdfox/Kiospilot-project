//add first 9 workshops dinamically from json file when the page is loaded
fetch('workshops1.json').then((response) => response.json()).then((json) => {
  elementQuantity = json.length;
  console.log(elementQuantity);
  let workshopsToDisplay;
  if (elementQuantity < 9) {
    workshopsToDisplay = elementQuantity;
  } else {
    workshopsToDisplay = 9;
  }
  for (let i = 0; i < workshopsToDisplay; i++) {
    const modal = document.createElement("div");
    modal.classList.add('modal');

    modal.innerHTML = `<div class="box" onclick="popupForWorkshop()">
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
    const container = document.getElementById("container");
    container.appendChild(modal);
    modal.id = i;
  }
});

//add new portion of workshops when user clicks "Load more" button
function loadMoreWorkshops() {
  fetch('workshops1.json').then((response) => response.json()).then((json) => {
    const workshopListAtPage = document.getElementsByClassName('modal');
    let numberOfWorkshops = workshopListAtPage.length;
    console.log(`Workshops at the page: ${numberOfWorkshops}`);
    let workshopsToAdd;
    console.log(`Workshops left: ${json.length - numberOfWorkshops}`);
    if (json.length - numberOfWorkshops < 9) {
      workshopsToAdd = json.length - numberOfWorkshops;
    } else {
      workshopsToAdd = 9;
    }
    for (let i = numberOfWorkshops; i < numberOfWorkshops + workshopsToAdd; i++) {
      const modal = document.createElement("div");
      modal.classList.add('modal');

      modal.innerHTML = `<div class="box" onclick="popupForWorkshop()">
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
      const container = document.getElementById("container");
      container.appendChild(modal);
      modal.id = i;
    }
  });
}



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
          document.getElementById("textNumber").innerText = json[elementId].popupText;
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

