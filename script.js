const sim = document.getElementById('simbtn');
const nao = document.getElementById('naobtn');
const container = document.getElementById('container');
const h1 = document.getElementById('h1');
const span = document.getElementById('span');

sim.addEventListener('click', () => {
    window.location.href =
        'https://i.pinimg.com/originals/0f/df/a4/0fdfa4e5b4494613f2c2c0083bca7b85.gif';
});

nao.addEventListener('mouseover', () => {
    function posicaoAleatoria(min, max) {
        return Math.random() * (max - min) + min + '%';
    }

    container.style.position = 'relative';
    nao.style.position = 'absolute';
    nao.style.left = posicaoAleatoria(10, 85);
    nao.style.top = posicaoAleatoria(10, 85);
    nao.style.transition = '.3s';
    nao.style.background = 'linear-gradient(to bottom right, #ff512f, #dd2476)';
    nao.style.color = '#fff';
    nao.style.border = '1px solid #fff';
    nao.style.boxShadow = '5px 5px 0px rgba(0,0,0,0.5)';

    sim.classList.add('active');
});

span.addEventListener('click', () => {
    window.location.reload();
});

span.addEventListener('mouseover', () => {
    span.classList.toggle('active');
});
