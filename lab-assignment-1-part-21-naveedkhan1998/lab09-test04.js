document.addEventListener("DOMContentLoaded", function () {
  let bigImage = document.querySelector("#imgManipulated img");

  document
    .querySelector("#resetFilters")
    .addEventListener("click", function () {
      bigImage.style.filter = none;
      refreshValueLabels();
    });

  // handle the clicks for the thumbnail images
  const images = document.querySelectorAll("#thumbBox img");

  for (let img of images) {
    img.addEventListener("click", function (e) {
      let filename = img.getAttribute("src");
      bigImage.src = filename.replace("small", "medium");


      document.querySelector("figcaption em").textContent =
        img.getAttribute("title");
      document.querySelector("figcaption span").textContent =
        img.getAttribute("alt");
    });
  }

  // handle the range sliders using event delegation as per instructions
  document.querySelector("#sliderBox").addEventListener("change", function (e) {
    if (e.target && e.target.nodeName == "INPUT") {
      // retrieve the values of all the sliders and construct filter string
      const filters =
        "blur(" +
        document.querySelector("#sliderBlur").value +
        "px) " +
        "brightness(" +
        document.querySelector("#sliderBrightness").value +
        "%) " +
        "saturate(" +
        document.querySelector("#sliderSaturation").value +
        "%) " +
        "hue-rotate(" +
        document.querySelector("#sliderHue").value +
        "deg) " +
        "grayscale(" +
        document.querySelector("#sliderGray").value +
        "%) " +
        "opacity(" +
        document.querySelector("#sliderOpacity").value +
        "%) ";

      bigImage.style.filter = filters;

      refreshValueLabels();
    }

    function refreshValueLabels() {
      document.querySelector("#numOpacity").textContent =
        document.querySelector("#sliderOpacity").value;

      document.querySelector("#numBrightness").textContent =
        document.querySelector("#sliderBrightness").value;

      document.querySelector("#numSaturation").textContent =
        document.querySelector("#sliderSaturation").value;

      document.querySelector("#numGray").textContent =
        document.querySelector("#sliderGray").value;

      document.querySelector("#numBlur").textContent =
        document.querySelector("#sliderBlur").value;

      document.querySelector("#numHue").textContent =
        document.querySelector("#sliderHue").value;
    }
  });
});
