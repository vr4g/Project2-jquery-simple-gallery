$(function () {
  $(".thumbnails-container").css({
    display: "flex",
    "justify-content": "center",
  });

  $("#thumbnails").css({
    width: "70%",
    display: "grid",
    "grid-template-columns": "repeat(auto-fill, minmax(210px, 1fr))",
    "justify-content": "center",
    height: "120px",
    "margin-top": "25px",
    gap: "10px",
  });

  $(".thumb-image").css({
    height: "120px",
    width: "200px",
    padding: "5px",
    "background-color": "gray",
  });
  $(".thumb-image").on("mouseover", function () {
    $(this).css({
      cursor: "pointer",
      transition: "0.4s",
      scale: "1.1",
    });
  });

  $(".thumb-image").on("mouseout", function () {
    $(this).css({
      scale: "1",
      transition: "0.4s",
    });
  });
});
