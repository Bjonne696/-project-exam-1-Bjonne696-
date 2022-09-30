const baseUrl = "https://campspace.one//wp-json/wp/v2/posts"
const postContainer = document.querySelector(".posts");

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    createHTML(posts)
}


getPosts(baseUrl);

function createHTML(posts){
    posts.forEach(function(post){
        postContainer.innerHTML += `<div class="post">
        <h2>${post.content}</h2>

        </div>`;
    })
}
       // <img src="${post.images[0].src}" alt="${post.name}"> //
