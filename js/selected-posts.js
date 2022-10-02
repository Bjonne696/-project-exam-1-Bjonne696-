const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPost(postId) {
  try {
    console.log(postId);
    const response = await fetch(
        'https://campspace.one/wp-json/wp/v2/posts?per_page=100&_embed' + postId
    );
    const jsonResults = await response.json();
    const postArray = jsonResults.results;
    console.log(postArray);

    document.querySelector('.loader').classList.add('hide');

    document.title = postArray.title.rendered;
    document.querySelector('h1').innerHTML = `${postArray.title.rendered}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${postArray._embedded?.["wp:featuredmedia"][0].source_url}')`;
    document.querySelector('.text').innerHTML = `${postArray.excerpt.rendered}`


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

getPost(id);