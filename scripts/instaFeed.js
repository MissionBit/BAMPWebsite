async function instaFeedRequest(account) {
    const posts = document.querySelector(".instaPosts")
    posts.innerHTML = ""

    const response = await fetch(`https://www.instagram.com/${account}/?__a=1`)
        .then(x => x.json())
        .then(json => {
            console.log(json)
            return json
        })

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
                videoElement.controls = true;
                sourceElement.src = mediaObj.video_url
                videoElement.appendChild(sourceElement)
                posts.appendChild(videoElement)

            } else if (mediaObj.__typename == "GraphSidecar") {
                const sidecarImages = mediaObj.edge_sidecar_to_children.edges
                let carousel = document.createElement("DIV")
                let carouselItems = document.createElement("DIV")
                let carouselSliderPrev = document.createElement("DIV")
                let carouselSliderNext = document.createElement("DIV")
                carousel.classList.add("carousel")
                carouselSliderPrev.className = "carousel--slider carousel--prev"
                carouselSliderNext.className = "carousel--slider carousel--next"
                carouselSliderPrev.innerHTML = "&#10094;"
                carouselSliderNext.innerHTML = "&#10095;"
                carouselItems.classList.add("carousel--items")
                carousel.appendChild(carouselItems)
                carouselItems.appendChild(carouselSliderPrev)
                carouselItems.appendChild(carouselSliderNext)
                console.log("/////////////////////////////")

                for (let item in sidecarImages) {
                    item = sidecarImages[item].node
                    if (item.__typename == "GraphVideo") {
                        console.log(item.video_url)
                        let videoElement = document.createElement("video")
                        let sourceElement = document.createElement("source")
                        videoElement.className = "instaPost carousel--item"
                        videoElement.controls = true;
                        sourceElement.src = item.video_url
                        videoElement.appendChild(sourceElement)
                        carouselItems.appendChild(videoElement)
                    } else if (item.__typename == "GraphImage") {
                        console.log(item.display_url)
                        let imgElement = document.createElement("img")
                        imgElement.className = "instaPost carousel--item"
                        imgElement.src = item.display_url
                        carouselItems.appendChild(imgElement)
                    }
                }
                console.log("/////////////////////////////")
                posts.appendChild(carousel)
            }
        }
    } else {
        alert("No such profile was found.")
        return
    }
}

instaFeedRequest("bayareamuralpro")
