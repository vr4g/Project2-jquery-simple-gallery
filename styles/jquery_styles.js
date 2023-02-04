$(function () {
  $("body").css({
    padding: "0",
    margin: "0",
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,105,184,1) 30%, rgba(92,143,184,1) 47%, rgba(5,105,184,1) 70%, rgba(72,0,255,1) 100%)",
    "background-image": "url('assets/bg_image.jpg')",
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-attachment": "fixed",
    position: "relative",
    height: "100vh",
  });

  $("header").css({
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    padding: "0 20px",
    height: "7.5vh",
    "background-color": "#610000",
    "font-size": "2.1vmax",
    color: "white",
  });

  $("header span").css({
    "font-size": "1.6vmax",
    position: "absolute",
    top: "35px",
    right: "10px",
  });

  $("h1").css({
    "text-align": "center",
    "font-size": "3vmax",
    color: "white",
  });
});
