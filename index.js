const loadData=(tools,dataundefiend)=>
{

  console.log(dataundefiend)
  const url=`https://openapi.programming-hero.com/api/ai/${tools}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.data.tools,dataundefiend))

}

const displayData=(data,dataundefiend)=>{

    console.log(data[0])

    const cardId=document.getElementById('cardId')
    cardId.innerHTML=" "
    const btnclassopen=document.getElementById('btnclassopen')
  
   
    if(dataundefiend && data.length>6){
        data=data.slice(0,6)
        
        btnclassopen.classList.remove('d-none')
       
    }

    else{
      btnclassopen.classList.add('d-none')


    }

    

    data.forEach(dataload=>{
        
        const div=document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`<div class="card h-100 p-4">
        <img src="${dataload.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-title">1. ${dataload.features[0]
          }</p>
          <p class="card-title">2. ${dataload.features[1]
          }</p>
          <p class="card-title">3. ${dataload.features[2] ? dataload.features[2] :"Not found"
          }</p>

          <hr>
        <div class="cardnamebetween">
                <div>
                <h5 class="card-title">${dataload.name}</h5>
                <p class="card-text"><i class="fa-solid fa-calendar-days"></i><span> ${dataload.published_in}</span></p>
                
                </div>
                         <div>     
                         
                         <i onclick="myFunction('${dataload.id}')" class="fa-solid fa-circle-arrow-right largemaking fa-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                              
        
                         </div>
          
          
        </div>
      </div>`

      cardId.appendChild(div)

    })
    toogleloader(false)
}


const myFunction=id=>{
                   
                      const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`
                     
                      fetch(url)
                      .then(res=>res.json())
                      .then(data=>modelDataload(data.data))




}

 
const modelDataload=modelinside=>{
  
  console.log(modelinside)

  document.getElementById('chatgptdetalies').innerText=`${modelinside.description}`
  document.getElementById('pricingten').innerText=`${modelinside.pricing[0].price} 
   ${modelinside.pricing[0].plan} `
  document.getElementById('pricingfifty').innerText=`${modelinside.pricing[1].price} 
   ${modelinside.pricing[1].plan} `
  document.getElementById('pricingcontect').innerText=`${modelinside.pricing[2].price} 
   ${modelinside.pricing[2].plan} `
  document.getElementById('lione').innerText=`${modelinside.features[1].feature_name}`
  document.getElementById('litwo').innerText=`${modelinside.features[2].feature_name}`
  document.getElementById('lithree').innerText=`${modelinside.features[3].feature_name}`
  document.getElementById('lifour').innerText=`${modelinside.integrations[0]}`
  document.getElementById('lifive').innerText=`${modelinside.integrations[1]}`
  document.getElementById('lisix').innerText=`${modelinside.integrations[2]}`


  document.getElementById('imagesetup').src=`${modelinside.image_link[0]}`
 
  document.getElementById('accuracy').innerText=`${modelinside.accuracy.score ? modelinside.accuracy.score : 'not a '
  }`
  document.getElementById('howAreYou').innerText=`${modelinside.input_output_examples[0].input
  }`
  document.getElementById('imdoingwell').innerText=`${modelinside.input_output_examples[0].output ? modelinside.input_output_examples[0].output:"not a found"
  }`


}

document.getElementById('seeMore').addEventListener('click',function(){

  toogleloader(true)
   loadData('tools')

})

const toogleloader=loading=>{

  const spinnerborder=document.getElementById('spinnerborder')

  if(loading){

    spinnerborder.classList.remove('d-none')
  }
  else{
    spinnerborder.classList.add('d-none')
  }

}

loadData('tools',undefined=6)