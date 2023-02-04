$(function () {
  if (window.matchMedia("(max-width: 767px").matches) {
    $(".btns-center").remove();

    $(".next-text").css({
      position: "absolute",
      bottom: "11vh",
      color: "white",
      right: "20px",
      "font-size": "1.2rem",
    });

    $(".close-lightbox").css({
      margin: "auto",
      height: "40px",
      width: "40px",
      position: "absolute",
      top: "35vh",
      right: "0px",
      left: "0",
      "background-color": "black",
      border: "0.1px solid white",
      "font-size": "70px",
      color: "white",
      cursor: " pointer",
    });

    $("#lightbox img").css({
      position: "relative",
      "max-width": "90%",
      "max-height": "30vh",
      padding: "5px",
      "margin-top": "50px",
      "background-color": "gray",
    });

    $(".lightbox-container").css({
      display: "none",
      position: "fixed",
      top: "0",
      left: "0",
      height: "100vh",
      width: "100%",
      "background-color": "rgba(0,0,0, 0.9)",
    });

    $(".thumb-lightbox").css({
      position: "relative",
      top: "50vh",
      height: "40vh",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between",
      "align-items": "center",
    });

    $("#previous-image").css({
      cursor: "pointer",
      position: "relative",
      left: "0",
      height: "17vh",
      "max-width": "95%",
      "background-color": "gray",
    });

    $("#next-image").css({
      cursor: "pointer",
      height: "17vh",
      position: "relative",
      right: "0",
      margin: "auto",
      padding: "3px",
      "background-color": "gray",
    });

    $(".previous-text").css({
      position: "relative",
      bottom: "5vh",
      color: "white",
      right: "0",
      left: "0",
      "font-size": "1.2rem",
      padding: "5px",
      "background-color": "rgba(0,0,0,0.7)",
    });

    $(".next-text").css({
      position: "relative",
      bottom: "5vh",
      color: "white",
      right: "0",
      left: "0",
      "font-size": "1.2rem",
      padding: "5px",
      "background-color": "rgba(0,0,0,0.7)",
    });
  }
});
