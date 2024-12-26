let texto = document.querySelector('input').value;
let p = document.querySelector('p');

document.querySelector('button').addEventListener('click', ()=> {
    let texto = document.querySelector('input').value;
    return(reverseString(texto));
})

function reverseString(parametro){
    let parte = parametro.split('');
    let reverso = parte.reverse();
    let resultado = reverso.join('');
    p.innerHTML = resultado
}

