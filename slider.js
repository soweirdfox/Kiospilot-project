fetch("workshops1.json")
  .then((response) => response.json())
  .then((json) => {
        for (i = 0; i < json.length; i++) {
      if (json[i].isPopular === true) {
         let swiperSlide = document.createElement("div");
         swiperSlide.className = "swiper-slide";
         swiperSlide.innerHTML =`<div class="box" onclick="popupForMostPopular()">
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
         let swiperWrapper = document.querySelector(".swiper-wrapper");
         swiperWrapper.appendChild(swiperSlide);
         swiperSlide.id=`pop${i}`;
  }
}
  
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 3,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });


//popup opens when user clicks on workshops at most popular section
function popupForMostPopular() {
  fetch("workshops1.json")
    .then((response) => response.json())
    .then((json) => {
      const workshopList = document.getElementsByClassName("swiper-slide");
      for (let i = 0; i < workshopList.length; i++) {
        workshopList[i].onclick = function () {
          const mostId = workshopList[i].id;
          const elementId = mostId.replace('pop','');
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
        };
      }
    });
}
