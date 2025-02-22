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
 
  $(".menu-btn").click(function () {
    $(".menu-btn").toggleClass("change");
    $(".nav-links").slideToggle();
  });


  // $(window).on("scroll", function () {
  //   if ($(window).scrollTop() > 50) {
  //     $("header").addClass("sticky-header");
  //   } else {
  //     $("header").removeClass("sticky-header");
  //   }
  // });
  if (window_wt <= 992) {
    $(".nav-links").click(function () {
      $(".nav-links").slideToggle();
      $(".menu-btn").toggleClass("change");
    });

    $(".has-submenu").click(function () {
      $(".my_menu").slideToggle();
    });
  } else {
    $(".has-submenu").hover(
      function () {
        $(".my_menu").show();
      },
      function () {
        $(".my_menu").hide();
      }
    );
  }

  $(".enq_click, .virtual-tour-btn").on("click", function () {
    $("#overlay").fadeIn();
  });

  $("#close").on("click", function () {
    $("#overlay").fadeOut();
    flag = 1;
  });


  
});
$(window).scroll(function () {
  if (window_wt <= 992) {
    $(".nav-links").fadeOut(500);
  }
  $(".lazy").each(function () {
    if ($(this).attr("data-src")) {
      this.tagName == "IMG" || this.tagName == "IFRAME"
        ? $(this).attr("src", $(this).data("src"))
        : $(this).css("background-image", "url(" + $(this).data("src") + ")");
      $(this).removeAttr("data-src");
    }
  });
});
// $(window).scroll(function (e) {
//   if (window_wt >= 992) {
//     e.preventDefault();
//     var wScroll = $(window).scrollTop();

//     var offset1 = (wScroll - $(".scrolled1").offset().top) * 0.02;
//     // var offset2 = (wScroll - $(".scrolled2").offset().top) * 0.1;
//     var offset3 = (wScroll - $(".scrolled3").offset().top) * 0.02;
//     var offset4 = (wScroll - $(".scrolled4").offset().top) * 0.02;
//     $(".scrolled1").css({ transform: "translateY(" + offset1 + "px)" });
//     // $(".scrolled2").css({ 'transform': 'translateY(' + offset2 + 'px)' });
//     $(".scrolled3").css({ transform: "translateY(" + offset3 + "px)" });
//     $(".scrolled4").css({ transform: "translateY(" + offset4 + "px)" });
//   }
// });

// $("#lonavalaFinest").validate({
//   rules: {},
//   messages: {},
//   submitHandler: function (form) {
//     $("#submit_form").attr("disabled", "disabled").val("Please wait...");
//     $("#lonavalaFinest").hide();
//     $(".thankyou").html(
//       "Thank You For Your Inquiry, Our Sales Representative Will Get Back To You."
//     );
//     $.ajax({
//       type: "POST",
//       url: "save.php",
//       data: $("#lonavalaFinest").serialize(),
//       success: function (response) {
//         if (virtualBtn == 1) {
//           window.open("https://prop.vu/lonavalalife?omega=vector");
//         }
//         $(".virtual-tour-btn").attr(
//           "href",
//           "https://prop.vu/lonavalalife?omega=vector"
//         );
//         $(".virtual-tour-btn").attr("target", "_blank");
//       },
//     });
//   },
// });

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

