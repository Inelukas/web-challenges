console.clear();

bodyElement = document.querySelector("body");

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
  newArticle = document.createElement("article");
  newP = document.createElement("p");
  newFooter = document.createElement("footer");
  newSpan = document.createElement("span");
  newButton = document.createElement("button");
  newArticle.append(newP, newFooter);
  newFooter.append(newSpan, newButton);
  newArticle.classList.add("post");
  newP.classList.add("post__content");
  newP.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  newFooter.classList.add("post__footer");
  newSpan.classList.add("post__username");
  newSpan.textContent = "@username";
  newButton.classList.add("post__button");
  newButton.setAttribute('type', 'button');
  newButton.setAttribute('data-js', 'like-button');
  newButton.textContent = "♥ Like";
  bodyElement.append(newArticle);

}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
