const numItemsToGenerate = 10; //how many gallery items you want on the screen
const numImagesAvailable = 70; //how many total images are in the collection you are pulling from
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 2565034; //the collection ID from the original url
const galleryContainer = document.querySelector('.gallery-container');
let keywords = ['paris','music','books'];

function renderGalleryItem(randomNumber){
  let url = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}` ; 
  // let url2 = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?${keywords[2]}`;
  
  fetch(url) 
    .then((response)=> {    
      let galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      // console.log(response.url) ; 
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
      `
      galleryContainer.appendChild(galleryItem);
    })
    
}

function getImage(){
    for(let i=0;i<numItemsToGenerate;i++){
        let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
        // console.log(randomImageIndex) ; 
        renderGalleryItem(randomImageIndex);
      }
}
