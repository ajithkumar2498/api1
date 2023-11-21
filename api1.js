function covidData(){
  let showCovidData = new Promise ((resolve, reject)=>{

    let request= new XMLHttpRequest() 
    request.open('GET',"https://data.covid19india.org/v4/min/data.min.json")
    request.send()
    request.onload = (function (){
                  var data            
               if(request.status==200){
                data= JSON.parse(request.response)
                resolve(data);
               }else{
                reject("data")
               }  }
    )
  })
   showCovidData.then((data)=>{console.log(data) 
   let input = document.getElementsByClassName('datas')[0].value
   console.log(input)
   let getData= data.filter((state)=>{
    state.input==data
   })
   console.log(getData)
   let card =document.getElementsByClassName('card-body')
   card.innerHTML=`<p class="card-text card-head">Covid-19 Data</p>
   <p class="card-text1" >Confirmed:${getData.confirmed}</p>
   <p class="card-text2">Deceased:</p>
   <p class="card-text3">Recovered:</p>
   <p class="card-text4">Tested:</p>
   <p class="card-text5">Vaccinated1:</p>
   <p class="card-text6">Vaccinated2:</p>`
 
  }).catch((err)=>{console.log(err)})
 }




