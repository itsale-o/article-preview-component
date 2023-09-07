const popup = document.querySelector('.popup');
const shareButton = document.querySelector('.share-button');
const shareButtonImage = document.getElementById('share-button-img');

shareButton.addEventListener("click", showPopup);

function showPopup(){
    popup.classList.remove('hidden');
    shareButton.classList.remove('share-button');
    shareButton.classList.add('active-share-button-desktop');
    shareButtonImage.src = "images/white-icon-share.svg";
};