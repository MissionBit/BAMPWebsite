/**
 * Renders Instagram feed JSON response in the given DOM target.
 */
function renderFeed(media, target, length) {
    const grid = $('<div>').addClass('gridBox gridBox-col4 gridBox-center')

    for (let i = 0; i < length && i < media.length; i++) {
        const node = media[i].node
        const type = node.__typename
        let post = $('<div>').addClass('fixedRatio')
        let contents = null

        if (type === 'GraphImage' || type === 'GraphSidecar') {
            contents = $('<img>').attr('src', node.display_url)
        } else if (type === 'GraphVideo') {
            const source = $('<source>').attr('src', node.video_url)
            contents = $('<video>').attr('controls', true).append(source)
        } else {
            continue
        }
        post.append(contents.addClass('fixedRatio--contents'))
        grid.append(post)
    }
    $(target).empty().append(grid)
}

/**
 * Fetches IG account feed JSON and renders (if valid response) into the given target.
 */
async function fetchAndRenderFeed(account, target, length) {
    try {
        const response = await fetch(`https://www.instagram.com/${account}/?__a=1`).then(x => x.json())
        const media = response.graphql.user.edge_owner_to_timeline_media.edges
        renderFeed(media, target, length)
    } catch (error) {
        console.log(`Error: could not load IG profile for {accountName}.`)
        console.log(error)
    }
}

// hide behind a button during development (TODO: remove for production)
$('.js-showInstaFeed').click(event => {
    fetchAndRenderFeed('bayareamuralpro', $('.instagramFeed')[0], 8)
    event.target.disabled = true
    event.target.style.display = 'none'
})
