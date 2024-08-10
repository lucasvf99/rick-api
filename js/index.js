const apiRick = "https://rickandmortyapi.com/api/character/"

let contRick = document.getElementById("cont-rick")

function mostrarPersonajes (el){

    contRick.innerHTML +=`
   <div class="cart-personajes">
           <div class="caja-img">
               <img src="${el.image}">
           </div>
           <div class="cart-info">
                   <div>
                        <h3>${el.name}</h3>
                   </div>
                   <div>
                       <p>${el.location.name}</p>
                       <p>${el.species}</p>
                       <p>${el.origin.name}</p>
                       <p>${el.status}</p>
                       <p>${el.gender}</p>
                   </div>
           </div>
   </div>
`

}



const datosApi = async () => {

    const res = await fetch(apiRick)
    const data = await res.json()
    
        let personajes =  data.results
    
        contRick.innerHTML= ""
        personajes.forEach(el => {
            mostrarPersonajes(el)
        })

        //pagina ant

        // pagina sig
        
      // paginaSiguiente(data)
        
}

datosApi()

//pag siguiente
let botonSiguiente = document.getElementById("boton-sig")
let botonAnterior = document.getElementById("boton-ant")


let contador = 1
    
function  paginaSiguiente  ()  {

    botonSiguiente.addEventListener("click", async () => {
        contador = contador +1 

       if(contador <=42){
        let paginas =  `https://rickandmortyapi.com/api/character/?page= ${ contador}`
        
        const res2 = await fetch(paginas)
        const data2 = await res2.json()


        contRick.innerHTML= ""
         data2.results.forEach(el => {
            mostrarPersonajes(el)
        })
        console.dir(botonSiguiente)

       }
    })
    botonAnterior.addEventListener("click", async () => {
        contador = contador - 1 

       if(contador >=1){
        let paginas =  `https://rickandmortyapi.com/api/character/?page= ${ contador}`
        
        const res2 = await fetch(paginas)
        const data2 = await res2.json()


        contRick.innerHTML= ""
         data2.results.forEach(el => {
            mostrarPersonajes(el)
        })
        console.dir(botonSiguiente)

       }
    })
}

paginaSiguiente()

/// filtrado de rick
const rickVivos = `https://rickandmortyapi.com/api/character/?name=rick&status=Alive`

//boton
let botonRickAlive = document.getElementById("boton-fil-rick-ali")

const  filtradoDeRicks  = async ()=>{

    const res = await fetch(rickVivos)
    const data = await res.json()
    console.log(data)
    const res2 = await fetch(data.info.next)
    const data2 = await res2.json()
    console.log(data2)


   botonRickAlive.addEventListener("click", ()=>{
    contRick.innerHTML=""
    data2.results,data.results.forEach(el =>{
        mostrarPersonajes(el)
    })

   })



}

filtradoDeRicks()




