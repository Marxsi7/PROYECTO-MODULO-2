
function traer(){
    fetch("hola.json")
    .then(res => res.json())
    .then(data => {
        /*/
        const app = document.getElementById("prueba")
        data.results.map((per) => app.insertAdjacentHTML("beforeend", `<p>${per.name.first}</p>`))/*/
        escribir= ``
        document.getElementById("Terror").innerHTML = escribir
        for(peli of data.peliculas){
            document.getElementById("Terror").innerHTML = escribir+=
            `<div class="col-6 col-sm-4 col-lg-2">
                <img class="card" src="${peli.poster}" style="width:200px; height:200px;paddin:5px;margin:5px ">
                <h3>${peli.Nombre}</h3>
                <h4>${peli.Año}</h4>    
            </div>
            `

        }
        }       
        ).catch(console.log("error"))
        
    }
    traer();

    var corr = localStorage.getItem("Correo")
    document.getElementById("si").innerHTML = "Bienvenid@ " + corr
    
    