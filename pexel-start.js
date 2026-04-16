const linkImg = "https://api.pexels.com/v1/search?query=";
const loadImg = document.querySelectorAll(".btn.btn-primary.my-2");
const loadSecondary = document.querySelectorAll(".btn.btn-secondary.my-2");
const imgs = document.querySelectorAll(".bd-placeholder-img.card-img-top");
const edit = document.querySelectorAll(
  ".btn.btn-sm.btn-outline-secondary.edit",
);
const card = document.querySelectorAll(".card-body");
const min = document.querySelectorAll("small");
const searchdiv = document.getElementById("search");

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
      const bar = document.createElement("div");
      bar.innerHTML = `<input id="searchInput" type="text" class="form-control" placeholder="Write about what do you what to see..." aria-label="Username" aria-describedby="basic-addon1">`;
      searchdiv.appendChild(bar);
      const input = bar.querySelector("#searchInput");
      input.addEventListener("input", () => {
        const query = input.value;
        fetch(`${linkImg}${query}`, {
          headers: {
            Authorization:
              "JT5TMUSTn151x9LNkE1k3B3wtL2Adgh6syVfWdB8n5EJQAcJrDoGELQ9",
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
      });
      imgs.forEach((img, i) => {
        img.addEventListener("click", () => {
          const photoId = data.photos[i].id;
          window.location.href = `details.html?id=${photoId}`;
        });
      });
    })
    .catch((error) => {
      console.log("Error in fetch:", error);
    });
};
loadSecondary.forEach((btn) => {
  btn.addEventListener("click", changeImg2);
});
