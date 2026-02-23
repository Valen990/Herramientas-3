function obtener(){
    console.log("Obteniendo información...");
}

function mostrar(){
    console.log("Mostrando información...");
}

function procesar(a, funcion){
    console.log("Procesando información...");
    funcion();
}

function ejecutar(a,funcion){
    console.log("Ejecutando función...");
    obtener();
    mostrar();
    procesar();
    funcion();
}

/*
//Función que se pasa como parámetro dentro de otra función (callback).
ejecutar(1, function(){
    procesar(1, function() {
        obtener(2, function(){
            //.... La vaina del infierno - CallBack Hell
        })
    })
})
*/

const miPromesa = new Promise((resolve, reject) => {
    let bien = true
    if(bien){
        resolve("La promesa se ha cumplido")
    }else{
        reject("La promesa no se ha cumplido")
    }
})

const URL= 'https://api.spaceflightnewsapi.net/v4/articles/'
const cards = document.getElementById('cards')

fetch(URL)
.then(response => response.json())
.then(response =>{
    //console.log(response.results)
    let noticias = ''
    for(let n of response.results){
        noticias = noticias + `       
            <div class="col">
                <div class="card">
                    <img src="${n.image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${n.title}</h5>
                        <p class="card-text">${n.summary}</p>
                    </div>
                </div>
            </div>
        `
    }
    cards.innerHTML = noticias
})
.catch(error => console.log(error))

// CON ASYNC - AWAIT
/*
* try {
    const responseJSON = await fetch(URL)
    const response = await responseJSON.json()
    console.log(response.results)
}catch (error) {
    console.log(error)
}

async function AsyncFunction(){
}
*/