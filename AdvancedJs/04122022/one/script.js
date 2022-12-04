const digit_div =  document.querySelector('.digit');
const decrease_div = document.querySelector('.decrease');
const reset_div = document.querySelector('.reset');
const increase_div = document.querySelector('.increase');
const msg_div = document.querySelector(".msg");
let val = digit_div.textContent;
msg_div.style.display='none';
decrease_div.addEventListener("click",function(){
    if(val>0){
        val--;
        digit_div.textContent=val;
    }
    else{
        window.setTimeout(msgappear,100);
    }
});



function msgappear(){
    msg_div.style.display = 'block';
}

increase_div.addEventListener("click",function(){
    val++;
    digit_div.textContent = val;
    msg_div.style.display = 'none';
})

reset_div.addEventListener("click",function(){
    val=0;
    digit_div.textContent=val;
    msg_div.style.display = 'none';
})
