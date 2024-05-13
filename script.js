async function apiCall(){
    try{
        let api_content = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        let usa_apival = await api_content.json()
        let usa_data = usa_apival.data
        let data = []
        let parent_div = document.createElement("div")
        parent_div.className = "par_div"
        parent_div.innerHTML = `<div class="card bg-primary mb-3" style="width: 18rem;">
        <div class="card-header">
        <b>USA Population Data</b>
        </div>
        <ul class="list-group list-group-flush">
    
    ${
        (function iterate_item(){
            
            for(let i=0;i<usa_data.length;i++){
                data.push (`<li class="list-group-item"><center>Year:<b> ${usa_data[i].Year}</b><br>
                Population: ${usa_data[i].Population}</center></li>`)
            }
            return (data.join(''))
        } 
        )()
    }
    </ul> 
    </div>`
    document.body.append(parent_div)
    }catch(error){
        console.log(error)
    }
}

apiCall()