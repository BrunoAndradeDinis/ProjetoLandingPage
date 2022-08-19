    /* quando cliacar na seta para avançar temos que esconder
    todas as imagens e mostrar a próxima imagem

    A imagem atual começa em 0
    Assim que for clicado no avançar eu preciso adicionar + 1 ao contador
    de imagens, pra poder saber que agora eu vou mostrar a segunda imagem

    Basicamente +1 = próxima imagem começando pelo 0 até 2 contando 3
    indice = |0|1|2|

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar

    mostrar a próxima imagem
        pegar todas as imagens, descobrer qual é a próxima, e colocar a classe mostrar nela
    */

    const imagensPainel = document.querySelectorAll('.imagem-painel');
    const setAvancar = document.getElementById('btn-avancar');
    const setVoltar = document.getElementById('btn-voltar');
    let imagemAtual = 0;
    /*  setas desaparece quando chega na ultima ou na primeira imagem.
        chama as setas pra gente tratar

    */
    const setas = document.querySelectorAll('.seta')
    let setaAtual = 0;

    // quando cliacar na seta pra avançar  temos que esconder todas as imagens para avançar

    setAvancar.addEventListener('click', function () {

        const totalDeImagens = imagensPainel.length - 1;
        // testa se o contador da imagem atual é igual ao total de imagens
        if (imagemAtual === totalDeImagens) {

            return;
        }
        if (imagemAtual === totalDeImagens - 1){
            setaAvancar.classList.remove('mostrar');
        }

        if (imagemAtual === totalDeImagens - 1){
            setaAvancar.classList.remove('mostrar');
        }
        
        /* ao clicar no avançar i++ */
        imagemAtual++

        /* esconder todas as imagens. */

        imagensPainel.forEach(imagem => {
            imagem.classList.remove('mostrar');
        })

        /*mostrar a próxima imagem
            pegar todas as imagens, descobrer qual é a próxima, e colocar a classe mostrar nela
         */

        imagensPainel[imagemAtual].classList.add('mostrar');

    })

    setVoltar.addEventListener('click', function () {
        if (imagemAtual === 0) {

            return;
        }

        if(imagemAtual === 1){
            setaVoltar.classList.remove('mostrar');
        }

        imagemAtual--;

        imagensPainel.forEach(imagem => {
            imagem.classList.remove('mostrar');
        });
        imagensPainel[imagemAtual].classList.add('mostrar');
        while(imagemAtual == 2){
            setaAvancar.style.opacity='0.5'
        }
    })
