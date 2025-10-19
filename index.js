function toggleSwitched(checkBox){
    const curTogleStatus = checkBox.className;
    if (curTogleStatus=== "true"){
        checkBox.className="false";
    }
    else{
        checkBox.className="true";
    }
}
function colorSwap(curButton){
    const prevActive = document.querySelectorAll('.active');
    prevActive.forEach(button => {
        button.classList.replace("active","default");
    })
    curButton.classList.replace("default","active");
}
function showActive(btn) {
    const allCards = document.querySelectorAll(".articleCard");
    allCards.forEach(card => {
        if (card.querySelector(".false")){
            card.style.display = 'none';
        }
        else{
            card.style.display="flex";
        }

    })
    colorSwap(btn);
}
function showAll(btn){
    const allCards=document.querySelectorAll(".articleCard");
    allCards.forEach(card =>{card.style.display="flex"});
    colorSwap(btn);
}
function showInActive(btn){
    const allCards=document.querySelectorAll(".articleCard")
    allCards.forEach(card => {

        if (card.querySelector(".true")){
            card.style.display="none";
        }
        else{
            card.style.display="flex";
        }
    })
    colorSwap(btn);
}