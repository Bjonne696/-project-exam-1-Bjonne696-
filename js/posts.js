



const magicUrl = '';

async function getMagic() {
    try {
        const response = await fetch('https://campspace.one/wp-json/wp/v2/posts?per_page=100&_embed');
        const jsonFromServer = await response.json();
        console.log(jsonFromServer.posts);
        const magicResults = jsonFromServer.posts;

        document.querySelector('.loader').classList.add('hide');

        magicResults.forEach(function (value) {
        document.querySelector('main').innerHTML += `
            <div class="card-title">
            <h2>${value.title}</h2>
            <img src="${post._embedded?.["wp:featuredmedia"][0].source_url}" alt="${post._embedded?.["wp:featuredmedia"][0].alt_text}" />
            <a class="button" href="selected-post.html?id=${post.id}"></a>
        </div>`;
        });
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

getMagic(magicUrl);

