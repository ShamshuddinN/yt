const HandleInput = (e) => {
    if (e.ctrlKey && e.key == 'Enter') {
        changeSlug(e.target.value)
        e.target.value = ''
}
}


const getVideo = () => {
    changeSlug(document.getElementById('URLinput').value)
}


const changeSlug = (videoURL) => {
    if (videoURL.includes('youtu.be')) {
        let startIndx = videoURL.indexOf('.be/') + 4
        let endIndx = videoURL.indexOf('?si=');
        let UsefulSlug = videoURL.slice(startIndx, endIndx)
        // console.log(UsefulSlug)
        document.getElementsByTagName('iframe')[0].src = `https://piped.video/watch?v=${UsefulSlug}`
        ShowLink(`https://piped.video/watch?v=${UsefulSlug}`)
    }
    else if (videoURL.includes('watch?v=')) {
        let vList = videoURL.split('v=');
        // console.log(vList[1]);
        document.getElementsByTagName('iframe')[0].src = `https://piped.video/watch?v=${vList[1]}`
        ShowLink(`https://piped.video/watch?v=${vList[1]}`)
    }

    document.getElementById('URLinput').value = ''
}

const ShowLink = (theLink) => {
    let LinkEle = document.getElementById('linkElement')
    let theAnchor = document.getElementById('LinkAnchor')
    if (LinkEle.classList.value.includes('d-none')) {
        LinkEle.classList.remove('d-none');
    };
    theAnchor.href = theLink
}

let windowWidth = window.innerWidth;
let frameWidth = Math.floor(windowWidth * 0.8053)

if (windowWidth < 682) {
    frameWidth = Math.floor(windowWidth * 0.95)
}

let frameHeight = Math.round(frameWidth * 0.6)

window.onload = function () {
    document.getElementsByTagName('iframe')[0].height = frameHeight;
    document.getElementsByTagName('iframe')[0].width = frameWidth;

}