fetch("workshops1.json")
  .then((response) => response.json())
  .then((json) => {
        for (i = 0; i < json.length; i++) {
      if (json[i].isPopular === true) {
         let swiperSlide = document.createElement("div");
         swiperSlide.className = "swiper-slide";
         swiperSlide.innerHTML =`<div class="box" onclick="popupForWorkshop()">
         <div class="box2" style="background-color: #999999"><img class="imageOfType" src="${json[i].typeImage}" width="30px"></div>
         <div class="box3">
           <p class="title">${json[i].title}</p>
           <br />
           <i class="material-icons" style="font-size: 25px; padding-left: 10px">
             signal_cellular_alt_2_bar
           </i>
 
           <span class="icon-span">${json[i].difficulty}</span>
           <i class="material-icons">group</i>
           <span class="icon-span">${json[i].minNumberOfParticipants} - ${json[i].maxNumberOfParticipants}</span>
           <i class="material-icons">schedule</i>
           <span class="icon-span">${json[i].minDuration} - ${json[i].maxDuration}</span>
         </div>`;
         let swiperWrapper = document.querySelector(".swiper-wrapper");
         swiperWrapper.appendChild(swiperSlide);
  }
}
  


// fetch("workshops1.json")
//   .then((response) => response.json())
//   .then((json) => {
//     let swiperWrapper = document.querySelector(".swiper-wrapper");

//     for (i = 0; i < json.length; i++) {
//       if (json[i].isPopular === true) {
//         let swiperSlide = document.createElement("div");
//         swiperSlide.className = "swiper-slide";
//         swiperSlide.innerHTML = `
//             <div class='slides'>
        
//         <div>
//           <p class="title">${json[i].title}</p>
//           <br />
//           <i class="material-icons" style="font-size: 25px; padding-left: 10px">
//             signal_cellular_alt_2_bar
//           </i>

//           <span class="icon-span">${json[i].difficulty}</span>
//           <i class="material-icons">group</i>
//           <span class="icon-span">${json[i].minNumberOfParticipants} - ${json[i].maxNumberOfParticipants}</span>
//           <i class="material-icons">schedule</i>
//           <span class="icon-span">${json[i].minDuration} - ${json[i].maxDuration}</span>
//         </div>
//             `;
//         swiperWrapper.appendChild(swiperSlide);
//       }
//     }
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
