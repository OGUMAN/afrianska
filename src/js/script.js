let menu = $(".burger__nav");
let icon = $(".burger__icon");
let isOpen = false;

function menuReload() { // opening/closing the menu and switching the burger icon
  if (isOpen) { // when burger is open 
    menu.hide("fast");
    icon.toggleClass("burger__icon_active"); 
  } else { // when burger is close 
    menu.show("fast");
    menu.css({ display: "flex" });
    icon.toggleClass("burger__icon_active");
  }
  isOpen = !isOpen; 
}

icon.click(function () { // when clicked on burger
  menuReload();
});

$(".burger__link").click(function () { // when clicked on burger link
  let elementClick = $(this).attr("href"); // element that page should scroll to
  let destination = $(elementClick).offset().top;
  menuReload(); // closing the menu
  // scrolling
  $("html:not(:animated),body:not(:animated)").animate(
    { scrollTop: destination },
    900
  );
  return false;
});

$(".intro__btn, .footer__link").click(function () { // when clicked on any another link
  let elementClick = $(this).attr("href"); // element that page should scroll to
  let destination = $(elementClick).offset().top;
  // scrolling
  $("html:not(:animated),body:not(:animated)").animate(
    { scrollTop: destination },
    900
  );
  return false;
});
