const numItemsToGenerate = 5; //how many gallery items you want on the screen
const numItemsToUpdate = 2 ; //how many gallery items you want to update the screen
const numImagesAvailable = 70; //how many total images are in the collection you are pulling from
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels

let collectionID = 858095; //the collection ID from the unsplash 
let themeCollectionID = [3356576,3356570,858095,148987,3330455] ; 
let keywords = ['paris','music','books'];

const galleryContainer = document.querySelector('.gallery-container');

let button0 = document.getElementById('button0') ; 
button0.onclick = function(){
  collectionID = themeCollectionID[0] ; 
  updateGallery(numItemsToGenerate); 
};

let button1 = document.getElementById('button1') ; 
button1.onclick = function(){
  collectionID = themeCollectionID[1] ; 
  updateGallery(numItemsToGenerate); 
};

let button2 = document.getElementById('button2') ; 
button2.onclick = function(){
  collectionID = themeCollectionID[2] ; 
  updateGallery(numItemsToGenerate); 
};


let button3 = document.getElementById('button3') ; 
button3.onclick = function(){
  collectionID = themeCollectionID[3] ; 
  updateGallery(numItemsToGenerate); 
};

let button4 = document.getElementById('button4') ; 
button4.onclick = function(){
  collectionID = themeCollectionID[4] ; 
  updateGallery(numItemsToGenerate); 
};


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

function updateGallery(numofItems = 0 ){
  let count = numItemsToUpdate ; 
  if(numofItems !== 0 ) {
    count = numofItems;
  }
  for(let i=0;i<count;i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable); 
    updateGalleryItem(i,randomImageIndex);
  }
}

setInterval(updateGallery, 8000);