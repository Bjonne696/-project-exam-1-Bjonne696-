

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const baseUrl = "https://campspace.one/wp-json/wp/v2/posts?per_page=100&_embed"
const postContainer = document.querySelector(".slides");

function createSlide(post,index) {
  const slide = `
  <div id="slides__${index+1}" class="slide">
  <span class="slide__text">${post.content.rendered}</span>
  <a class="slide__prev" href="#slides__${getPrevious(index+1)}" title="Previous"></a>
  <a class="slide__next" href="#slides__${getNext(index-1)}" title="Next"></a>
  </div>
  `;
  return slide;
}

function getPrevious(currentPost){
  if(currentPost === 1){
    return 4;
  }
  else{
    return currentPost -1;
  }
 }

 function getNext(currentPost){
  if(currentPost === 4){
    return 1;
  }
  else{
    return currentPost +1;
  }
 }

 getPosts(baseUrl);


nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});






async function getPosts(url){
    try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    document.querySelector('.loader').classList.add('hide');
    for(let i = 0; i<4;i++){
      postContainer.innerHTML += createSlide(posts[i],i);
    }
    

    } catch (error) {
        document.querySelector('.alert').innerHTML = alertUser(
            'Error occured (Cannot load content)',
            'error'
            );

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000)

    }

    
}

