function changeRandomImage() {
  const imgElement = document.getElementById("alaskaimages");
  const imageUrls = ["/assets/alaskaboy.png", "/assets/alaskaboy2.png"];
  const length = imageUrls.length;
  const randomIndex = Math.floor(Math.random() * length);
  imgElement.src = imageUrls[randomIndex];
}

changeRandomImage();
setInterval(changeRandomImage, 3000);