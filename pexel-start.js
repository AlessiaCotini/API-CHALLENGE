const linkImg = "https://api.pexels.com/v1/search?query=";
const loadImg = document.querySelectorAll(".btn.btn-primary.my-2");
const loadSecondary = document.querySelectorAll(".btn.btn-secondary.my-2");
const imgs = document.querySelectorAll(".bd-placeholder-img.card-img-top");
const edit = document.querySelectorAll(
  ".btn.btn-sm.btn-outline-secondary.edit",
);
const card = document.querySelectorAll(".card-body");
const min = document.querySelectorAll("small");
const changeImg = function () {
  fetch(`${linkImg}tigers`, {
    headers: {
      Authorization: "JT5TMUSTn151x9LNkE1k3B3wtL2Adgh6syVfWdB8n5EJQAcJrDoGELQ9",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error:");
      }
    })
    .then((data) => {
      console.log(data);
      imgs.forEach((img, i) => {
        if (data.photos[i]) {
          img.src = data.photos[i].src.medium;
        }
      });
    })
    .catch((error) => {
      console.log("Error in fetch:", error);
    });
};
loadImg.forEach((btn) => {
  btn.addEventListener("click", changeImg);
});
const changeImg2 = function () {
  fetch(`${linkImg}hamsters`, {
    headers: {
      Authorization: "JT5TMUSTn151x9LNkE1k3B3wtL2Adgh6syVfWdB8n5EJQAcJrDoGELQ9",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error:");
      }
    })
    .then((data) => {
      console.log(data);
      imgs.forEach((img, i) => {
        if (data.photos[i]) {
          img.src = data.photos[i].src.medium;
        }
      });
      edit.forEach((btn) => {
        btn.innerText = "Hide";
        btn.addEventListener("click", function () {
          this.closest(".card").classList.add("d-none");
        });
      });
      min.forEach((small, i) => {
        small.innerText = `ID: ${data.photos[i].id}`;
      });
      //DEVI SCRIVERE QUI
    })
    .catch((error) => {
      console.log("Error in fetch:", error);
    });
};
loadSecondary.forEach((btn) => {
  btn.addEventListener("click", changeImg2);
});
