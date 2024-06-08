function trocarImagem(event)
{
    const src = event.target.src;
    document.getElementById('imagemPrincipal').src = src;
}

    document.getElementById('img1').addEventListener('click', trocarImagem);
    document.getElementById('img2').addEventListener('click', trocarImagem);
    document.getElementById('img3').addEventListener('click', trocarImagem);
    document.getElementById('img4').addEventListener('click', trocarImagem);