
const callHistory=[]
const historyDiv=getId('call-history')
let heartCount=0
let copyCount=0
// resuseable function

function getId(id){
    const elements=document.getElementById(id)
    return elements
}

// call function

const callbtns=document.getElementsByClassName('call-btn')
 for(const callbtn of callbtns){
    callbtn.addEventListener('click',function(event){
        // coin alert
        const coinElement=getId('coin-count')
        const coinValue= Number(coinElement.innerText)
        if(coinValue<20){
         return alert("❌ আপনার পর্যাপ্ত কয়েন নেই")
        }
        const uCoinValue=coinValue-20
        coinElement.innerText=uCoinValue
        // call alert
        const serviceName=callbtn.parentNode.parentNode.children[1].innerHTML
        const serviceNum=callbtn.parentNode.parentNode.children[3].innerHTML
        alert('📞Calling '+serviceName+' : '+serviceNum)
        // call history
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
    
    historyDiv.appendChild(createDiv)
 
    })
 }

// copy btn 
const copyButtons = document.getElementsByClassName('copy-btn');
for (const copyBtn of copyButtons) {
    copyBtn.addEventListener('click', function() {
       const copyValue=getId('copy-value')
       const copyValueNum=Number(copyValue.innerText)
       const copyUVal=copyValueNum+1
       copyValue.innerText=copyUVal
    
         const serviceNum=copyBtn.parentNode.parentNode.children[3].innerHTML
        navigator.clipboard.writeText(serviceNum)
            .then(() => {
                alert('নাম্বার কপি হয়েছে : '+serviceNum);
            })
           

            
    });
}

// heart
const heartClicks=document.getElementsByClassName('heart-click')
 for(const heartClick of heartClicks){
   heartClick.addEventListener('click',function(){
       const heartValue=getId('heart-value')
       const heartValueNum=Number(heartValue.innerText)
       const newHeartValue=heartValueNum+1
       heartValue.innerText=newHeartValue
   })

 }



// clear-btn
  getId('clear-btn').addEventListener('click',function(){
     historyDiv.innerHTML=""
})
 


