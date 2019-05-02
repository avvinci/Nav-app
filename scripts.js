const numItemsToGenerate = 5; //how many gallery items you want on the screen
const numItemsToUpdate = 2 ; //how many gallery items you want on the screen
const numImagesAvailable = 70; //how many total images are in the collection you are pulling from
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 858095; //the collection ID from the original url
let themeCollectionID = [159165,148987,1236,208403,148984] ; 
let keywords = ['paris','music','books'];

const galleryContainer = document.querySelector('.gallery-container');
let button4 = document.getElementById('button4') ; 

button4.onclick = function(){
  collectionID = themeCollectionID[3] ; 
  updateGallery(); 
} ; 
window.onload = getImageGallery ; 

// function updateGalleryCollection(newid){
 
// }


function setImageItem(galleryItem, randomNumber){
  let url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}` ;   
  fetch(url) 
    .then((response)=> {    
      // console.log(response.url) ; 
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
      `
    })
}

let counter = 0;  
function renderGalleryItem(randomNumber){
  let galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  let imgID = 'imgID'+ counter ; 
  galleryItem.setAttribute('id' , imgID) ; 
  galleryContainer.appendChild(galleryItem);
  counter++ ; 
  setImageItem(galleryItem, randomNumber) ; 

}

function getImageGallery(){
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
  setImageItem(galleryItem, randomNumber) ; 
}

function updateGallery( ){
  for(let i=0;i<numItemsToUpdate;i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable); 
    updateGalleryItem(i,randomImageIndex);
  }
}

setInterval(updateGallery, 8000);