function covidData(){
  let showCovidData = new Promise ((resolve, reject)=>{

    let request= new XMLHttpRequest() 
    request.open('GET',"https://data.covid19india.org/v4/min/data.min.json")
    request.send()
    request.onload = (function (){
                            
               if(request.status==200){
                var data= JSON.parse(request.response)
                resolve(data);
               }else{
                reject("data")
               }  }
    )
  })
   showCovidData.then((data)=>{
    console.log(data) 
   let select = document.querySelector('.states-value').value
  //  console.log(select)
  //  let getData = data.forEach(element => {
  //   element[key]===input
  //  });
    
   
  //  console.log(getData)
   let card =document.querySelector('.card-body')
   
   card.innerHTML=`
   <p class="card-text1" >Confirmed: &nbsp${data[select].total.confirmed}</p>
   <p class="card-text2">Deceased: &nbsp${data[select].total.deceased}</p>
   <p class="card-text3">Recovered: &nbsp${data[select].total.recovered}</p>
   <p class="card-text4">Tested: &nbsp${data[select].total.tested}</p>
   <p class="card-text5">Vaccinated1: &nbsp${data[select].total.vaccinated1}</p>
   <p class="card-text6">Vaccinated2: &nbsp${data[select].total.vaccinated2}</p>`

  // document.querySelector('.card-text1')

  //  document.body.append('card')
 
  }).catch((err)=>{console.log(err)})
 }




