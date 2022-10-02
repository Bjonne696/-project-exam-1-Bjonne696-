const baseUrl = "https://campspace.one/wp-json/wp/v2/posts?per_page=100&_embed"
const postContainer = document.querySelector(".posts");

getPosts(baseUrl);

async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    posts.forEach(function(post){
    postContainer.innerHTML += createPost(post); 
    })
}

function createPost(post){
    const createdPost=`
    <div class="card">
    <div class="card-title"><h2>${post.title.rendered}</h2>
     <img src="${post._embedded?.["wp:featuredmedia"][0].source_url}" alt="${post._embedded?.["wp:featuredmedia"][0].alt_text}" />

    <a href="selected-post.html?id=${post.id}"></a>
    </div>    
    </div>
    `
console.log(createdPost);
    return createdPost;
}
