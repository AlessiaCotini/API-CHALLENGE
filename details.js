const linkImg = "https://api.pexels.com/v1/";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const img = document.getElementById("imgDetail");
const author = document.getElementById("author");
const link = document.getElementById("link");

fetch(`${linkImg}photos/${id}`, {
  headers: {
    Authorization: "JT5TMUSTn151x9LNkE1k3B3wtL2Adgh6syVfWdB8n5EJQAcJrDoGELQ9",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    img.src = data.src.large;
    author.innerText = data.photographer;
    link.href = data.photographer_url;
  })
  .catch((err) => console.log(err));
