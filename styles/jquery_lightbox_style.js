$(function () {
  $(".lightbox-container").css({
    display: "none",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100%",
    "background-color": "rgba(0,0,0, 0.9)",
  });

  $("#lightbox").css({
    display: "none",
    width: "100%",
    position: "absolute",
    "justify-content": "center",
    align: "center",
    top: "0",
    "z-index": 10,
  });

  $("#lightbox img").css({
    position: "relative",
    width: "80%",
    "max-height": "80vh",
    padding: "5px",
    "margin-top": "20px",
    "background-color": "gray",
  });

  $(".close-lightbox").css({
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    height: "40px",
    width: "40px",
    position: "relative",
    top: "5px",
    right: "60px",
    "background-color": "black",
    border: "0.1px solid white",
    "font-size": "70px",
    color: "white",
    cursor: " pointer",
  });

  $(".close-lightbox").on("mouseover", function () {
    $(this).css({
      "background-color": "white",
      color: "black",
      transition: "0.6s",
    });
  });
  $(".close-lightbox").on("mouseout", function () {
    $(this).css({
      "background-color": "black",
      color: "white",
      transition: "0.6s",
    });
  });

  $(".btns-center").css({
    display: "flex",
    "align-items": "center",
    position: "relative",
  });

  $(".next-img-btn").css({
    position: "relative",
    cursor: "pointer",
    height: "80px",
    width: "45px",
    "font-size": "4rem",
    "background-color": "rgba(0,0,0, 0.4)",
    "border-radius": "7px 0  0 7px ",
    color: "white",
    border: "none",
    right: "50px",
    transition: "0.6s",
    "z-index": "20",
  });

  $(".previous-img-btn").css({
    position: "relative",
    cursor: "pointer",
    height: "80px",
    width: "45px",
    left: "50px",
    "font-size": "4rem",
    "background-color": "rgba(0,0,0, 0.4)",
    "border-radius": "0 7px 7px 0",
    color: "white",
    border: "none",
    transition: "0.6s",
    "z-index": "20",
  });

  $(".previous-img-btn").on("mouseover", function () {
    $(this).css({
      "background-color": "rgba(0,0,0, 0.8)",
    });
  });
  $(".previous-img-btn").on("mouseout", function () {
    $(this).css({
      "background-color": "rgba(0,0,0, 0.5)",
    });
  });

  $(".next-img-btn").on("mouseover", function () {
    $(this).css({
      "background-color": "rgba(0,0,0, 0.8)",
    });
  });
  $(".next-img-btn").on("mouseout", function () {
    $(this).css({
      "background-color": "rgba(0,0,0, 0.5)",
    });
  });

  $("#previous-image").css({
    cursor: "pointer",
    height: "100px",
    position: "absolute",
    bottom: "10px",
    left: "20px",
    "background-color": "gray",
    padding: "3px",
  });

  $("#next-image").css({
    cursor: "pointer",
    height: "100px",
    position: "absolute",
    bottom: "10px",
    right: "20px",
    padding: "3px",
    "background-color": "gray",
  });

  $(".previous-text").css({
    height: "100px",
    position: "absolute",
    bottom: "35px",
    left: "20px",
    color: "white",
    "font-size": "1.2rem",
  });
  $(".next-text").css({
    height: "100px",
    position: "absolute",
    bottom: "35px",
    color: "white",
    right: "20px",
    "font-size": "1.2rem",
  });
});
