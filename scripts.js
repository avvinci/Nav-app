const numItemsToGenerate = 2; //how many gallery items you want on the screen
const numImagesAvailable = 70; //how many total images are in the collection you are pulling from
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 2565034; //the collection ID from the original url
const galleryContainer = document.querySelector('.gallery-container');
let keywords = ['paris','music','books'];

let counter = 0;  

function renderGalleryItem(randomNumber){
  let galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  let imgID = 'imgID'+ counter ; 
  galleryItem.setAttribute('id' , imgID) ; 
  galleryContainer.appendChild(galleryItem);
  counter++ ; 

  let url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}` ;   
  fetch(url) 
    .then((response)=> {    
      // console.log(response.url) ; 
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
      `
    })

}


function getImage(){
    for(let i=0;i<numItemsToGenerate;i++){
        let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
        // console.log(randomImageIndex) ; 
        renderGalleryItem(randomImageIndex);
      }
}

function updateGalleryItem(i,randomNumber){
  console.log('updating' , i);
  let imgID = 'imgID'+ i ; 
  let galleryItem = document.getElementById(imgID);

  let url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}` ; 
  fetch(url)
  .then((response) => {
    galleryItem.innerHTML = `
    <img class="gallery-image" src="${response.url}" alt="gallery image"/>
    `
  })

}

function updateGallery(){
  // counter = 0 ; 
  for(let i=0;i<numItemsToGenerate;i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable); 
    updateGalleryItem(i,randomImageIndex);
  }
}

window.onload = getImage ; 

setInterval(updateGallery, 5000);