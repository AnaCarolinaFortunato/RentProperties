
async function getContent (){
	try {
        const response = await fetch('http://my-json-server.typicode.com/AnaCarolinaFortunato/Mockend/praia')

        
        //console.log(response)

        const data = await response.json()
        show(data)


    } catch (error) {
        console.log('ERRO')
    }
}


getContent ()

function show(properties){

    let output = ''

    for( let property of properties){
        output += `
         
        
        <div class="cards">
        
        <div class="cardsproperty">
        <img class="imageprop" src="${property.photo}"></img>
        <span>${property.name}<span>
        

        
        </div>
        </div>
         ` 
    }

    document.querySelector('.cards').innerHTML = output

}