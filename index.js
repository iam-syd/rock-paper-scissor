const githubBtn = document.querySelector('#githubBtn');

githubBtn.addEventListener('click', () => {
    const URL = `https://www.instagram.com/himanshu.codes_/`;

    window.open(URL, '_blank');
})

document.querySelector('#playOnline').addEventListener('click', () => {
    location.href = './app/play-online.html'
})

document.querySelector('#playWithComp').addEventListener('click', () => {
    location.href = './app/play-with-comp.html'
})