/**
 * Renders Instagram feed JSON response in the given DOM target.
 */
function renderFeed(response, target) {
    target.innerHTML = ""
    let media = response.graphql.user.edge_owner_to_timeline_media.edges
    for (const value in media) {
        const mediaObj = media[value].node
        if (mediaObj.__typename == "GraphImage") {
            let imgElement = document.createElement("img")
            imgElement.classList.add("instagramFeed--post")
            imgElement.src = mediaObj.display_url
            target.appendChild(imgElement)

        } else if (mediaObj.__typename == "GraphVideo") {
            let videoElement = document.createElement("video")
            let sourceElement = document.createElement("source")
            videoElement.classList.add("instagramFeed--post")
            videoElement.controls = "Play";
            sourceElement.src = mediaObj.video_url
            videoElement.appendChild(sourceElement)
            target.appendChild(videoElement)

        } else if (mediaObj.__typename == "GraphSidecar") {
            let imgElement = document.createElement("img")
            imgElement.className = "instagramFeed--post carousel--item"
            imgElement.src = mediaObj.display_url
            target.appendChild(imgElement)
        }
    }
}

/**
 * Fetches IG account feed JSON and renders (if valid response) into the given target.
 */
async function fetchAndRenderFeed(accountName, target) {
    const response =
      await fetch(`https://www.instagram.com/${accountName}/?__a=1`).then(x => x.json())

    if(!response || !response.graphql) {
        console.log(`Error: could not load IG profile for {accountName}.`)
        return
    }

    renderFeed(response, target)
}

// hide behind a button for now, so we don't make a bunch of unnecessary requsts
// TODO: remove this when it becomes appropriate
document.querySelector(".js-showInstaFeed").addEventListener("click", event => {
    fetchAndRenderFeed("bayareamuralpro", document.querySelector(".instagramFeed"))
    event.target.disabled = true
    event.target.style.display = "none"
})
