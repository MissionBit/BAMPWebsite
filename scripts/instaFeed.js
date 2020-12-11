async function instaFeedRequest(account) {
    const posts = document.querySelector(".instaPosts")
    posts.innerHTML = ""

    const response = await fetch(`https://www.instagram.com/${account}/?__a=1`)
        .then(x => x.json())
        .then(json => {
            console.log(json)
            return json
        })
    console.log(response)
    if (response.graphql) {
        let media = response.graphql.user.edge_owner_to_timeline_media.edges
        for (const value in media) {
            let mediaObj = media[value].node
            if (mediaObj.__typename == "GraphImage") {
                let imgElement = document.createElement("img")
                imgElement.classList.add("instaPost")
                imgElement.src = mediaObj.display_url
                posts.appendChild(imgElement)

            } else if (mediaObj.__typename == "GraphVideo") {
                let videoElement = document.createElement("video")
                let sourceElement = document.createElement("source")
                videoElement.classList.add("instaPost")
                videoElement.controls = "Play";
                sourceElement.src = mediaObj.video_url
                videoElement.appendChild(sourceElement)
                posts.appendChild(videoElement)

            } else if (mediaObj.__typename == "GraphSidecar") {
                let imgElement = document.createElement("img")
                imgElement.className = "instaPost carousel--item"
                imgElement.src = mediaObj.display_url
                posts.appendChild(imgElement)
            }
        }
    } else {
        alert("No such profile was found.")
        return
    }
}

instaFeedRequest("bayareamuralpro")
