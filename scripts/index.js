function toggleSwitched(checkBox){
    const curTogleStatus = checkBox.className;
    if (curTogleStatus=== "true"){
        checkBox.className="false";
    }
    else{
        checkBox.className="true";
    }
}
function showActive() {
    const allCards = document.querySelectorAll(".articleCard");
    allCards.forEach(card => {
        if (card.querySelector(".false")){
            card.style.display = 'none';
        }
        else{
            card.style.display="flex";
        }

    })
}
function showAll(){
    const allCards=document.querySelectorAll(".articleCard");
    allCards.forEach(card =>{card.style.display="flex"})
}
function showInActive(){
    const allCards=document.querySelectorAll(".articleCard")
    allCards.forEach(card => {

        if (card.querySelector(".true")){
            card.style.display="none";
        }
        else{
            card.style.display="flex";
        }
    })
}