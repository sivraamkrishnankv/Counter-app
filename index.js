let count = 0
let countel = document.getElementById("counter-cl")
let saveel = document.getElementById("save-element")
function increment(){
    count +=1
    countel.innerText=count
}
function decrement(){
    count -=1
    countel.innerText=count
    if (count<0){
        count =0
    }
    countel.innerText=count
}
function save(){
    saveel.textContent+=count+'-'
    count=0
    countel.innerText=count
}
function reset(){
    count =0
    countel.innerText=count
    saveel.textContent='Previous History:'
}
