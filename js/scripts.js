function onPageLoad() {
  document.querySelector("h1").remove();
  const h1Element = document.createElement("h1");
  const pElement = document.createElement("p");
  const imgElement = document.createElement("img");
  const h1Element2 = document.createElement("h1");
  const ulElement = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const h2Element = document.createElement("h2");
  const aElement = document.createElement("a");
  const bodyElement = document.querySelector("body");
  h1Element.append("Webpage Recreation Practice");
  pElement.append("The HTML of this webpage was created with Javascript.");
  imgElement.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgElement.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgElement.setAttribute("style", "width:50%");
  h1Element2.append("Facts about the Multicolored Tanager");
  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ulElement.append(liOne, liTwo);
  h2Element.append("Source");
  aElement.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
  aElement.append("Wikipedia");
  bodyElement.append(h1Element);
  bodyElement.append(pElement);
  bodyElement.append(imgElement);
  bodyElement.append(h1Element2);
  bodyElement.append(ulElement);
  bodyElement.append(h2Element);
  bodyElement.append(aElement);
}

window.addEventListener("load", onPageLoad);