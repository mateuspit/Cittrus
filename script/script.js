const wappNumber = "+556284098615";
let bottle5 = 0;
let bottle2 = 0;
let bottle1 = 0;
let bottle500 = 0;
let bottle300= 0;
const bottleArrayPhrase = [ 
    "5 litros.",
    "2 litros.", 
    "1 litro.", 
    "500 mL.", 
    "300 mL."
 ]
const bottleArrayPrice = [38,18,10,6,4];
let globalBottleArrayNumber;
let globalHowManyBottle;

function decrementar(thisDecButton){
    const decButtonParent = thisDecButton.parentNode;
    const decButtonGrand = decButtonParent.parentNode;
    const changeNumber = decButtonGrand.querySelector(".valor");
    // const decButtonGreat = decButtonGrand.parentNode;
    // console.log(decButtonParent);
    // console.log(decButtonGrand);
    // console.log(decButtonGreat);

    // console.log(thisDecButton.classList.contains("l5"));

    if(thisDecButton.classList.contains("l5") && (bottle5 > 0)){
        // console.log(thisDecButton.classList.contains("l5"));
        bottle5--;
        changeNumber.innerHTML = `${bottle5}`;
    }
    else if ((thisDecButton.classList.contains("l2") && (bottle2 > 0))){
        // console.log(thisDecButton.classList.contains("l2"));
        bottle2--;
        changeNumber.innerHTML = `${bottle2}`;
    }
    else if ((thisDecButton.classList.contains("l1") && (bottle1 > 0))){
        // console.log(thisDecButton.classList.contains("l1"));
        bottle1--;
        changeNumber.innerHTML = `${bottle1}`;
    }
    else if ((thisDecButton.classList.contains("l500") && (bottle500 > 0))){
        // console.log(thisDecButton.classList.contains("l500"));
        bottle500--;
        changeNumber.innerHTML = `${bottle500}`;
    }
    else if ((thisDecButton.classList.contains("l300") && (bottle300 > 0))){
        // console.log(thisDecButton.classList.contains("l300"));
        bottle300--;  
        changeNumber.innerHTML = `${bottle300}`;      
    }

    // changeNumber.innerHTML = "T1";

    if(bottle5 == 0 && bottle2 == 0 && bottle1 == 0 && bottle500 == 0 && bottle300 == 0){
        // console.log(document.querySelector(".selectOrder"));
        const disableButton = document.querySelector(".selectOrder");
        disableButton.disabled = true;
        disableButton.classList.add("unfinishedButton");
        disableButton.classList.remove("finishedButton");
        disableButton.innerHTML = "Selecione pelo menos uma garrafa de qualquer tamanho";        
    }
}

function incrementar(thisInButton){
    const inButtonParent = thisInButton.parentNode;
    const inButtonGrand = inButtonParent.parentNode;
    const changeNumber = inButtonGrand.querySelector(".valor");
    // const inButtonGreat = inButtonGrand.parentNode;
    // console.log(inButtonParent);
    // console.log(inButtonGrand);
    // console.log(inButtonGreat);

    // console.log(thisInButton.classList.contains("l5"));

    if(thisInButton.classList.contains("l5") && (bottle5 >= 0)){
        // console.log(thisInButton.classList.contains("l5"));
        bottle5++;
        changeNumber.innerHTML = `${bottle5}`;
    }
    else if ((thisInButton.classList.contains("l2") && (bottle2 >= 0))){
        // console.log(thisInButton.classList.contains("l2"));
        bottle2++;
        changeNumber.innerHTML = `${bottle2}`;
    }
    else if ((thisInButton.classList.contains("l1") && (bottle1 >= 0))){
        // console.log(thisInButton.classList.contains("l1"));
        bottle1++;
        changeNumber.innerHTML = `${bottle1}`;
    }
    else if ((thisInButton.classList.contains("l500") && (bottle500 >= 0))){
        // console.log(thisInButton.classList.contains("l500"));
        bottle500++;
        changeNumber.innerHTML = `${bottle500}`;
    }
    else if ((thisInButton.classList.contains("l300") && (bottle300 >= 0))){
        // console.log(thisInButton.classList.contains("l300"));
        bottle300++;  
        changeNumber.innerHTML = `${bottle300}`;      
    }

    // changeNumber.innerHTML = "T2";

    if(bottle5 > 0 || bottle2 > 0 || bottle1 > 0 || bottle500 > 0 || bottle300 > 0){
        // console.log(document.querySelector(".selectOrder"))
        const enableButton = document.querySelector(".selectOrder");
        enableButton.disabled = false;
        enableButton.classList.add("finishedButton");
        enableButton.classList.remove("unfinishedButton");
        enableButton.innerHTML = "Fechar pedido!";
    }
}

function finalizandoPedido(){
    clientName = prompt("Qual o nome de quem receberá o pedido?");
    clientTarget = prompt("Qual o endereço do pedido?");
    let itemPrice = 0;
    let urlencodedtext = "";
    let total = 0;
    let orderFinalMessage = 
`Olá, gostaria de fazer o pedido:

`;

    for(let i = 0; i < globalHowManyBottle; i++){
        itemPrice = (bottleArrayPrice[i]*globalBottleArrayNumber[i]).toFixed(2);   
        itemPrice = Number(itemPrice);
        total += itemPrice;  
        if(globalBottleArrayNumber[i]){
            orderFinalMessage += `- ${globalBottleArrayNumber[i]} Garrafa(s) de ${bottleArrayPhrase[i]}
`;
        }
    }

    total = total.toFixed(2);
orderFinalMessage += `Total: R$ ${total}
    
Nome: ${clientName}
Endereço: ${clientTarget}`;

    // console.log(orderFinalMessage);

    // https://wa.me/whatsappphonenumber?text=urlencodedtext
    urlencodedtext = encodeURIComponent(orderFinalMessage);
    // console.log(orderFinalMessage);
    orderFinalMessage = `https://wa.me/${wappNumber}?text=${urlencodedtext}`
    // console.log(orderFinalMessage);
    // window.location.href = orderFinalMessage;
    if((clientName != undefined) && (clientTarget != undefined)){
        window.location.href = orderFinalMessage;
    }
}

function plotOrderResume(){
    const elementThirdLayer = document.querySelector(".thirdLayer");
    const howManyBottle = Boolean(bottle5) + Boolean(bottle2) + Boolean(bottle1) + Boolean(bottle500) + Boolean(bottle300);
    const bottleArrayNumber = [ bottle5, bottle2, bottle1, bottle500, bottle300 ]
    globalBottleArrayNumber = bottleArrayNumber;
    


    elementThirdLayer.innerHTML = `
    <div class="detailsOrder">
        <div class="title">
            Confirmar seu pedido
        </div>
    `;

    let itemPrice = 0;

    globalHowManyBottle = howManyBottle;
    for(let i = 0; i < howManyBottle; i++){
        itemPrice = (bottleArrayPrice[i]*bottleArrayNumber[i]).toFixed(2);     
        if(bottleArrayNumber[i]){
            elementThirdLayer.innerHTML += `
                    <div class="item">
                        <div class="itemText">
                        ${bottleArrayNumber[i]} Garrafa(s) de ${bottleArrayPhrase[i]}
                        </div>
                        <div class="itemPrice">
                            R$ ${itemPrice}
                        </div>
                    </div>
            `;
        }
    }

    let totalPrice = 0;
    for(let i = 0; i < howManyBottle; i++){
        totalPrice += bottleArrayPrice[i]*bottleArrayNumber[i];
    }

    totalPrice = 

    elementThirdLayer.innerHTML += `
                    <div class="total">
                        <div class="totalText">
                            TOTAL
                        </div>
                        <div class="totalPrice">
                        R$ ${totalPrice.toFixed(2)}                        
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <div onclick="finalizandoPedido()" class="buttonMakeOrder">
                        Tudo certo, pode pedir!
                    </div>
                    <div onclick="cancelOrder()" class="buttonCancel">
                        Cancelar
                    </div>     
                </div> 

    `;
}

function showOthersLayers(){
    const elementSecondLayer = document.querySelector(".secondLayer");
    elementSecondLayer.classList.remove("hide");
    const elementThirdLayer = document.querySelector(".thirdLayer");
    elementThirdLayer.classList.remove("hide");

    plotOrderResume();
}

function cancelOrder(){
    const elementSecondLayer = document.querySelector(".secondLayer");
    elementSecondLayer.classList.add("hide");
    const elementThirdLayer = document.querySelector(".thirdLayer");
    elementThirdLayer.classList.add("hide");    
}
