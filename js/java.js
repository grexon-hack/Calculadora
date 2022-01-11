const mostrar = document.getElementById('mostrar');
const tecla1 = document.getElementById('tecla1');
const tecla2 = document.getElementById('tecla2');
const tecla3 = document.getElementById('tecla3');
const tecla4 = document.getElementById('tecla4');
const tecla5 = document.getElementById('tecla5');
const tecla6 = document.getElementById('tecla6');
const tecla7 = document.getElementById('tecla7');
const tecla8 = document.getElementById('tecla8');
const tecla9 = document.getElementById('tecla9');
const tecla0 = document.getElementById('tecla0');
const teclaSumar = document.getElementById('teclaSumar');
const teclaRestar = document.getElementById('teclaRestar');
const teclaDividir = document.getElementById('teclaDividir');
const teclaBorrar = document.getElementById('teclaBorrar');
const teclaMultip = document.getElementById('teclaMultip');
const teclaIgual = document.getElementById('teclaIgual');
const tecladel = document.getElementById('teclaDel');
const teclaParent = document.getElementById('teclaParent');
const teclaParent2 = document.getElementById('teclaParent2');
const teclaPunto = document.getElementById('teclaPunto');
const sonidoTecla = document.getElementById('sonido'); 


tecla1.addEventListener('click', () => mostrar.innerHTML += 1);
tecla2.addEventListener('click', () => mostrar.innerHTML += 2);
tecla3.addEventListener('click', () => mostrar.innerHTML += 3);
tecla4.addEventListener('click', () => mostrar.innerHTML += 4);
tecla5.addEventListener('click', () => mostrar.innerHTML += 5);
tecla6.addEventListener('click', () => mostrar.innerHTML += 6);
tecla7.addEventListener('click', () => mostrar.innerHTML += 7);
tecla8.addEventListener('click', () => mostrar.innerHTML += 8);
tecla9.addEventListener('click', () => mostrar.innerHTML += 9);
tecla0.addEventListener('click', () => mostrar.innerHTML += 0);
teclaSumar.addEventListener('click', () => mostrar.innerHTML += '+');
teclaRestar.addEventListener('click', () => mostrar.innerHTML += '-');
teclaDividir.addEventListener('click', ()=> mostrar.innerHTML += '/');
teclaMultip.addEventListener('click', ()=> mostrar.innerHTML += '*');
teclaBorrar.addEventListener('click', () => mostrar.innerHTML = '');
teclaParent.addEventListener('click', () => mostrar.innerHTML += '(');
teclaParent2.addEventListener('click', () => mostrar.innerHTML += ')');
teclaPunto.addEventListener('click', () => mostrar.innerHTML += '.');

teclaIgual.addEventListener('click', () => mostrar.innerHTML = eval(mostrar.innerHTML))

tecladel.addEventListener('click', () => {
    let indice = mostrar.innerHTML.length;
    mostrar.innerHTML = mostrar.innerHTML.replace(mostrar.innerHTML[indice - 1], '')
    
    
})

function sonido() {
    sonidoTecla.play()
    
}