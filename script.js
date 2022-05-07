/*
=========================================================================
Nome do Projeto: Simulador Bateria - Mini
Finalidade: Treinamento & aperfeiçoamento 
Fonte Base: Projetos do Curso B7Web - https://b7web.com.br/ 
Autor: Denny Paulista Azevedo Filho
License: MIT License
========================================================================= 
*/

document.body.addEventListener('keyup', (event)=>{
    //console.log(event.code); // Mostrar que tecla apertamos
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    //console.log("Musica: ", song); // Verificar o que foi digitado
    if(song != '') {
        let songArray = song.split('');
        //console.log(songArray); // Mostrar o array criado
        playComposition(songArray);
    }
    
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0; // reinicia o som, acelerando sua execução continuada
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');
        //Acrescenta um tempo de espera, em milesegundos e excecuta
        //uma ação programada
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        //Se não for colocado Timeout o for é muito rápido,
        //parce que os sons são tocados ao mesmo tempo. 
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}