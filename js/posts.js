// const baseUrl = '';
// getPost();
// async function getPost() {
//     try {
//         const response = await fetch('https://campspace.one/wp-json/wp/v2/posts?per_page=100&_embed');
//         const jsonFromServer = await response.json();
//         console.log(jsonFromServer.posts);
//         const postResults = jsonFromServer.posts;  !!!!!

//         document.querySelector('.loader').classList.add('hide');

//         postResults.forEach(function (value) {
//         document.querySelector('main').innerHTML += `
//             <div class="post-container">
//             <div class="card-title"><h2>${value.title.rendered}</h2>
//             <img src="${value._embedded?.["wp:featuredmedia"][0].source_url}" alt="${value._embedded?.["wp:featuredmedia"][0].alt_text}" />
//             <a class="button" href="selected-post.html?id=${value.id}">Read More</a>
//             </div>`;
//         });
//     } catch (error) {
//         document.querySelector('.alert').innerHTML = alertUser(
//             
//             
//         
//     } finally {
//         
//             
//         
//     }
// }






const baseUrl = "https://campspace.one/wp-json/wp/v2/posts?per_page=100&_embed"
const postContainer = document.querySelector(".posts");

getPosts(baseUrl);

async function getPosts(url){
    try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    document.querySelector('.loader').classList.add('hide');
    posts.forEach(function(post){
    postContainer.innerHTML += createPost(post); 
    })
    

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

function createPost(post){
    const createdPost=`
    <div class="card">
    <div class="card-title"><h2>${post.title.rendered}</h2>
     <img src="${post._embedded?.["wp:featuredmedia"][0].source_url}" alt="${post._embedded?.["wp:featuredmedia"][0].alt_text}" />
     <a class="button" href ="selected-post.html?id=${post.id}">Read More</a>
    </div>    
    </div>
    `
console.log(createdPost);
    return createdPost;
}
