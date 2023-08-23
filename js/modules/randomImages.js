const imageUrls = ["/assets/alaskaboy.png", "/assets/alaskaboy2.png"]

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function changeRandomImage() {
  const imgElement = document.getElementById("alaskaimages")
  const randomIndex = getRandomIndex(imageUrls)
  imgElement.src = imageUrls[randomIndex]
}

changeRandomImage()
setInterval(changeRandomImage, 3000)
