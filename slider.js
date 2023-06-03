fetch("workshops1.json")
  .then((response) => response.json())
  .then((json) => {
        for (i = 0; i < json.length; i++) {
      if (json[i].isPopular === true) {
         let swiperSlide = document.createElement("div");
         swiperSlide.className = "swiper-slide";
         swiperSlide.innerHTML =`<div class="box" onclick="popupForMostPopular()">
         <div class="box2" style="background-image: url(${json[i].backgroungImage}); background-size: cover;"><div class="img-cont" id="imagesOfTypePop${i}"></div></div>
         <div class="box3">
           <p class="title">${json[i].title}</p>
         
           <div class="icons">
            <div class="info-icon">
            <div id="tool-difficulty-most${i}" class="diff-icon-most">
           
 
           <span id="most-span-diff${i}"class="icon-span">${json[i].difficulty}</span>
           </div>
           </div>
           <div class="info-icon">
           <i class="material-icons most-icon">group</i>
           <span class="icon-span">${json[i].minNumberOfParticipants} - ${json[i].maxNumberOfParticipants}</span>
           </div>
           <div class="info-icon">
           <i class="material-icons most-icon">schedule</i>
           <span class="icon-span">${json[i].minDuration} - ${json[i].maxDuration}</span>
           </div>
           </div>
         </div>`;
         let swiperWrapper = document.querySelector(".swiper-wrapper");
         swiperWrapper.appendChild(swiperSlide);
         swiperSlide.id=`pop${i}`;
         const types = json[i].category;
         const images = json[i].typeImage;
         let imageCont = document.getElementById(`imagesOfTypePop${i}`);
         for (let j=0; j< types.length; j++){
           let image = document.createElement("img");
           image.src = images[j];
           image.style.width = "30px";
           imageCont.appendChild(image);
         }

         let mostDifCont = document.getElementById(`tool-difficulty-most${i}`);
         let mostDifImage = document.createElement("img");
         if (json[i].difficulty === "Beginner"){
          mostDifImage.src="images/Difficulty---low.png";
        } else if (json[i].difficulty === "Medium"){
          mostDifImage.src="images/Difficulty---medium.png";
        } else if (json[i].difficulty === "Expert"){
          mostDifImage.src="images/Difficulty---hard.png";
        } else {
          mostDifImage.src="images/Difficulty---medium.png";
        }
        mostDifImage.classList.add("tool-diff-image-most");
        let spanDifMost = document.getElementById(`most-span-diff${i}`);
        mostDifCont.insertBefore(mostDifImage, spanDifMost);
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

            //add image for difficulty according to difficulty of workshops
          let popDifCont = document.getElementById("popDifficulty");
          let popDifImage = document.createElement("img");
          if (json[elementId].difficulty === "Beginner"){
            popDifImage.src="images/Difficulty---low.png";
          } else if (json[elementId].difficulty === "Medium"){
            popDifImage.src="images/Difficulty---medium.png";
          } else if (json[elementId].difficulty === "Expert"){
            popDifImage.src="images/Difficulty---hard.png";
          } else {
            popDifImage.src="images/Difficulty---medium.png";
          }
          popDifImage.classList.add("pop-head-image");
          popDifImage.id="popIm";
          
          popDifCont.appendChild(popDifImage);

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
