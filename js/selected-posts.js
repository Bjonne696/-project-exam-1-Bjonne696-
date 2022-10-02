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
    const postArray = jsonResults.post;
    console.log(postArray);

    document.querySelector('.loader').classList.add('hide');

    document.title = postArray.title;
    document.querySelector('h1').innerHTML = `${postArray.title}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${postArray.imageUrl}')`;
    document.querySelector('.cmc').innerHTML = `Converted Mana Cost: ${mtgArray.cmc}`;
    document.querySelector('.type').innerHTML = `Type: ${mtgArray.type}`;
    document.querySelector('.rarity').innerHTML = `Rarity: ${mtgArray.rarity}`;
    document.querySelector('.setName').innerHTML = `Set: ${mtgArray.setName}`;
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

getMagic(id);