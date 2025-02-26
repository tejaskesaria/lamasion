var winHeight = $(window).height();
var window_wt = $(window).width();
// var header_ht = $("header").outerHeight();
var flag = 0;
var virtualBtn = 0;
$(document).ready(function () {
  $(".sidelogo").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: "0px",
      },
      800
    );
  });
 
  // $(".menu-btn").click(function () {
  //   $(".menu-btn").toggleClass("change");
  //   // $(".nav-links").slideToggle();
  // });


  

  $(".enq_click, .virtual-tour-btn").on("click", function () {
    $("#overlay").fadeIn();
  });

  $("#close").on("click", function () {
    $("#overlay").fadeOut();
    flag = 1;
  });


  
});
$(window).scroll(function () {
  // if (window_wt <= 992) {
  //   $(".nav-links").fadeOut(500);
  // }
  $(".lazy").each(function () {
    if ($(this).attr("data-src")) {
      this.tagName == "IMG" || this.tagName == "IFRAME"
        ? $(this).attr("src", $(this).data("src"))
        : $(this).css("background-image", "url(" + $(this).data("src") + ")");
      $(this).removeAttr("data-src");
    }
  });
});


if (sessionStorage) {
  if (sessionStorage.getItem("popup") === null) {
    // setTimeout(function(){
    // }, 4000);
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 650) {
        if (flag == 0) {
          $("#overlay").fadeIn();
        }
      }
    });
    $("#close").on("click", function () {
      sessionStorage.setItem("popup", "true");
    });
    console.log("one");
  } else {
    // document.getElementById("popup").style.display = "none"
    $("#overlay").fadeOut();
  }
} else {
  console.log("Your browser does not support web storage");
}

document.addEventListener("DOMContentLoaded", (event) => {
  var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    effect: "fade",
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        loop: true,
  //       autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: true,
  // },
  });
  var swiper = new Swiper(".mySwiper2", {
    speed: 1000,
    effect: "fade",
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        loop: true,
  //       autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: true,
  // },
  });
// AOS.init();
//   const swiper = new Swiper('.swiper', {
//    speed: 4000,
//    spaceBetween: 0,
//    loop: true,
//    slidesPerView: 1,
//    autoplay: {
//     delay: 1000,
//     disableOnInteraction: false,
//    },
//   });
var mySwiper = new Swiper ('.mySwiperVertical', {
  direction: 'vertical',
  speed: 1000,
  effect: "fade",
  slidesPerView: 1,
  direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  loop: true,
  // autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: true,
  // },
});
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("change", function() {
    if (this.checked) {
        navLinks.style.height = "250px"; // Expands to full height
    } else {
        navLinks.style.height = "0";
    }
});const clickEvent = new MouseEvent("click", { bubbles: true }); // Create a click event
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener('click', function(){
  navLinks.style.height = "0";
  

  burger.dispatchEvent(clickEvent);
}));
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var formData = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzBPFd1s-MclrCTRGdabOXI_dQKJkKt4fZXBg9WBdJyImsWxrR-yF48FGPsEVwmPZVHeQ/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        window.location.href = "thankyou.html"; // Redirect on success
      } else {
        alert("Error submitting form.");
      }
    })
    .catch(error => console.error("Error:", error));
  });

});