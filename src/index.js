

  const handleClick = (ramen) => {
    const detailImg = document.querySelector("#ramen-detail > .detail-image");
    const detailName = document.querySelector("#ramen-detail > .name");
    const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");
    const detailsRating = document.getElementById("rating-display");
    const detailsComment = document.getElementById("comment-display");
  
    detailImg.alt = ramen.image;
    detailImg.src = ramen.image;
    detailName.innerText = ramen.name;
    detailRestaurant.innerText = ramen.restaurant;
    detailsRating.innerText = ramen.rating.toString();
    detailsComment.innerText = ramen.comment;
  };
  
  const displayRamen = (ramenObj) => {
    const ramenMenuDiv = document.getElementById("ramen-menu");
    const ramenImg = document.createElement("img");
    ramenImg.alt = ramenObj.name;
    ramenImg.src = ramenObj.image;
    ramenImg.classList.add("image-slider");
    ramenImg.addEventListener("click", () => handleClick(ramenObj)); // Remove 'event' parameter
    ramenMenuDiv.appendChild(ramenImg);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target['new-name'].value;
    const rating = event.target.rating.value;
    const restaurant = event.target.restaurant.value;
    const image = event.target.image.value;
    const comment = event.target['new-comment'].value;
    const newRamen = { name, restaurant, image, rating, comment };
    event.target.reset();
    displayRamen(newRamen);
  };
  
  const addSubmitListener = () => {
    const ramenForm = document.querySelector("#new-ramen");
    if (ramenForm) {
      ramenForm.addEventListener("submit", handleSubmit);
    }
  };
  
  const displayRamens = () => {
    fetch("http://localhost:3000/ramens")
      .then((response) => response.json())
      .then((ramens) => {
        document.getElementById("ramen-menu").innerHTML = "";
        ramens.forEach(displayRamen);
      })
      .catch((error) => console.log(error));
  };
  
  const main = () => {
    addSubmitListener();
    displayRamens();
  };
  
  module.exports = {
    displayRamens,
    displayRamen,
    addSubmitListener,
    handleClick,
    handleSubmit,
    main,
  };