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
        document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/embed/${UsefulSlug}`
    }
    else if (videoURL.includes('watch?v=')) {
        let vList = videoURL.split('v=');
        // console.log(vList[1]);
        document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/embed/${vList[1]}`
    }

    document.getElementById('URLinput').value = ''
}


let windowWidth = window.innerWidth;
let frameWidth = Math.floor(windowWidth * 0.6053)

if (windowWidth < 682) {
    frameWidth = Math.floor(windowWidth * 0.95)
}

let frameHeight = Math.round(frameWidth * 0.5629)

window.onload = function () {
    document.getElementsByTagName('iframe')[0].height = frameHeight;
    document.getElementsByTagName('iframe')[0].width = frameWidth;

}