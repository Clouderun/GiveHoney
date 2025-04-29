let progresso1=0;
const cliqueaqui = document.getElementById('squishoney');
const barraprogress = document.getElementById('barraprog');

function progresso() {
    if (progresso1 < 100) {
        progresso1 += 10; 
        barraprogress.style.width = progresso1 + "%";
    }

    if(progresso1 >= 100) {
        setTimeout(() =>{
            alert('O Urso está cheio!');
        }, 300)
    }
}

cliqueaqui.addEventListener('click', progresso)



