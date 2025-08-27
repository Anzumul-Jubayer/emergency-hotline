// resuseable function

function getId(id){
    const elements=document.getElementById(id)
    return elements
}

const callbtns=document.getElementsByClassName('call-btn ')
// call function
 for(const callbtn of callbtns){
    callbtn.addEventListener('click',function(event){
        
        const coinElement=getId('coin-count')
        const coinValue= Number(coinElement.innerText)
        if(coinValue<20){
         return alert("আপনার পর্যাপ্ত কয়েন নেই")
        }
        const uCoinValue=coinValue-20
        coinElement.innerText=uCoinValue
    })
 }
 
