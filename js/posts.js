const baseUrl = "https://campspace.one/wp-json/wp/v2/posts?per_page=100"
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
    // var StrippedString = post.content.rendered.replace(/<p>*<\/p>/g, "");
    // const decodedPost= JSON.parse(StrippedString);
    // console.log(post);
    const createdPost=`
    <div class="card">
    <div class="card-title"><h2>${post.title.rendered}</h2>
    ${post.content.rendered}
    </div>    
    </div>
    `
  
   
     //console.log(StrippedString);
     // console.log(createdPost);
    return createdPost;
    const finalPost = document.querySelector('.p');
    finalPost.style.display = none; 

}



