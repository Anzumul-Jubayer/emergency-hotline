
const callHistory=[]

// resuseable function

function getId(id){
    const elements=document.getElementById(id)
    return elements
}

const callbtns=document.getElementsByClassName('call-btn ')

// call function
 for(const callbtn of callbtns){
    callbtn.addEventListener('click',function(event){
        const serviceName=callbtn.parentNode.parentNode.children[1].innerHTML
        const serviceNum=callbtn.parentNode.parentNode.children[3].innerHTML
        alert(serviceName+' :  '+serviceNum)
        console.log(serviceNum)
        const coinElement=getId('coin-count')
        const coinValue= Number(coinElement.innerText)
        if(coinValue<20){
         return alert("আপনার পর্যাপ্ত কয়েন নেই")
        }
        const uCoinValue=coinValue-20
        coinElement.innerText=uCoinValue

        const callData={
            time: new Date().toLocaleTimeString()
        }
        callHistory.push(callData)
        const createDiv=document.createElement('div')
        createDiv.innerHTML=`<div class="flex flex-col md:flex-row justify-center md:justify-between items-center bg-gray-200 p-3 mt-5 rounded-2xl">
          <div>
           <h1 class="font-semibold">${serviceName}</h1>
           <p>${serviceNum}</p>
         </div>
         <div>
          <p>${callData.time}</p>
         </div>
           </div>`
    const historyDiv=getId('call-history')
    historyDiv.appendChild(createDiv)
    })
   
    

 }

