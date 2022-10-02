const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPost(postId) {


  try {

    const response = await fetch(
        'https://campspace.one/wp-json/wp/v2/posts/' + postId + "?_embed"
    );
    const jsonResults = await response.json();

    document.querySelector('.loader').classList.add('hide');

    document.title = jsonResults.title.rendered;
    console.log(jsonResults);

    document.querySelector('h1').innerHTML = `${jsonResults.title.rendered}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${jsonResults._embedded?.["wp:featuredmedia"][0].source_url}')`;
    document.querySelector('.text').innerHTML = `${jsonResults.excerpt.rendered}`

 
 } catch (error) {
    document.querySelector('.alert').innerHTML = alertUser(
        'Error occured (Cannot load content)',
        'error'
    );
console.log(error);
 } finally {
    setTimeout(function () {
        document.querySelector('.alert').innerHTML = '';
    }, 3000)
 }
}

getPost(id);
