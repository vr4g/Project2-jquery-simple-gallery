const images = [
  { id: "img1", src: "assets/img1.jpg", alt: "Marvel logo" },
  { id: "img2", src: "assets/img2.jpg", alt: "Marvel fight" },
  { id: "img3", src: "assets/img3.jpg", alt: "Deadpool" },
  { id: "img4", src: "assets/img4.jpg", alt: "Marvel comic" },
  { id: "img5", src: "assets/img5.jpg", alt: "Spiderman" },
  { id: "img6", src: "assets/img6.jpg", alt: "Avengers" },
  { id: "img7", src: "assets/img7.jpg", alt: "Ironman" },
  { id: "img8", src: "assets/img8.jpg", alt: "Board game" },
  { id: "img9", src: "assets/img9.jpg", alt: "Deadpool" },
  { id: "img10", src: "assets/img10.jpg", alt: "Ironman" },
  {
    id: "img11",
    src: "assets/img11.jpg",
    alt: "Black panther",
  },
  { id: "img12", src: "assets/img12.jpg", alt: "Ironman" },
  {
    id: "img13",
    src: "assets/img13.jpg",
    alt: "Captain america",
  },
];

//generate thumbnails with pictures
$(function ($) {
  $(images).each(function (index) {
    $("<img/>", {
      class: "thumb-image",
      imageIndex: images[index].imageIndex,
      id: images[index].id,
      src: images[index].src,
      alt: images[index].alt,
    }).appendTo($("#thumbnails"));
  });

  $(".close-lightbox").on("click", function () {
    $("#lightbox").hide();
    $(".lightbox-container").hide();
  });
});

$(function () {
  let $thumbnail = $(".thumb-image");
  let $nextImg = $(".next-img-btn");
  let $prevImg = $(".previous-img-btn");
  let $nextImgThumb = $("#next-image");
  let $prevImgThumb = $("#previous-image");
  let $lightbox = $(".lightbox");
  let $lightboxContainer = $(".lightbox-container");
  let $lightboxImg = $lightbox.find("img");
  let currentIndex;

  $thumbnail.on("click", function (e) {
    $("#lightbox").css({
      display: "flex",
    });

    e.preventDefault();
    currentIndex = $(this).index();
    $lightboxImg.attr("src", images[currentIndex].src);
    ThumbnailLightbox(currentIndex, $nextImgThumb, $prevImgThumb);
    $lightboxContainer.show();
    $lightbox.show();

    $nextImg.on("click", function () {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      $lightboxImg.attr("src", images[currentIndex].src);
      ThumbnailLightbox(currentIndex, $nextImgThumb, $prevImgThumb);
    });

    $prevImg.on("click", function () {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      $lightboxImg.attr("src", images[currentIndex].src);
      ThumbnailLightbox(currentIndex, $nextImgThumb, $prevImgThumb);
    });
    $prevImgThumb.on("click", function () {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      $lightboxImg.attr("src", images[currentIndex].src);
      ThumbnailLightbox(currentIndex, $nextImgThumb, $prevImgThumb);
    });

    $nextImgThumb.on("click", function () {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      $lightboxImg.attr("src", images[currentIndex].src);
      ThumbnailLightbox(currentIndex, $nextImgThumb, $prevImgThumb);
    });
  });
});

function ThumbnailLightbox(currentIndex, $nextImgThumb, $prevImgThumb) {
  if (currentIndex === images.length - 1) {
    $nextImgThumb.attr("src", images[0].src);
  } else {
    $nextImgThumb.attr("src", images[currentIndex + 1].src);
  }

  if (currentIndex === 0) {
    $prevImgThumb.attr("src", images[images.length - 1].src);
  } else {
    $prevImgThumb.attr("src", images[currentIndex - 1].src);
  }
}
