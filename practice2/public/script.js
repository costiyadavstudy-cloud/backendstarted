let click = document.getElementsByClassName('button')[0];

click.addEventListener('click', async () => {
    await fetch('/',{
        method: 'post'
    });
})