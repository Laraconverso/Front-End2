let button = document.querySelector('button');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let inputText = documen.querySelector('#comentario').value;
    comments.push(inputText);
    showComments();
});

let comments=[];

function showComments(){
    let container = document.querySelector('.comentarios');
    container.innerHTML = '';
    comments.forEach((comment, index)=>{
        let div = document.createElement('div');

        div.innerHTML +=`<p>${comment}</p>`
        let button = document.createElement('button');
        button.textContent = 'Borrar';
        button.addEventListener('click', ()=>{
            deleteComment(index);
            showComments();
        });
        div.appendChild(button);
        container.appendChild(div);
    })
}

function deleteComment(index){
    comments.splice(index,1);
}

let now = new Date();

// retrasamos el consle.log por 2 seg
// setTimeout(()=>{
//     console.log(new Date() - now);
// }, 2000);

//Mostramos el console log cada 3 seg
setInterval(()=>{
    console.log(new Date() - now);
}, 3000);

let key = '_key1'

//confirm de storage, si si lo guardo y si no 