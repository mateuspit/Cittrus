let bottle5 = 0;
let bottle2 = 0;
let bottle1 = 0;
let bottle500 = 0;
let bottle300= 0;

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
}