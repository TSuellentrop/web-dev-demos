function getPost() {
    const postList = document.querySelector( '.posts-list' ); // Set a variable to the empty unordered list we'll add items to.
    let rawUrl = 'https://www.timsuellentrop.com'; // Base site URL.
    let queryURL = `${rawUrl}/wp-json/wp/v2/posts/?categories=4`; // WP REST API target. The "Listening" category ID is 4. Our URL Parameter narrows posts to just that category.
    fetch( queryURL ) // Get our data.
        .then( response => response.json() ) // If we get a valid response.
        .then(( data) => { // Let's do something.
            for( let posts of data ) { // Loop through the data object.
                let listItem = document.createElement( 'li' ); // Create the list-item.
                listItem.innerHTML = `<h2 class="post-title">${posts.title.rendered}</h2><a href="${posts.acf.spotify_url}">Listen on Spotify</a>`; // Add HTML of a Post Title and Spotify URL (which is an Advanced Custom Fields Post Meta).
                postList.append ( listItem ); // Add the new list-item to the end of the list.
            }
        });
}
getPost();