
function tossDice(){
    var num1=Math.random();
    num1=Math.floor(num1*10)+1;
    var num2=Math.random();
    num2=Math.floor(num2*10)+1;
    if(num1>6){
        num1=num1-6;
    }
    if(num2>6){
        num2=num2-6;
    }
    address1="./images/dice"+num1+".png";
    address2="./images/dice"+num2+".png";
    document.querySelector(".img1").setAttribute("src",address1);
    document.querySelector(".img2").setAttribute("src",address2);
    if(num1>num2){
        document.querySelector("h1").textContent="Player1 wins!";
    }
    else if(num1<num2){
        document.querySelector("h1").textContent="Player2 wins!";        
    }
    else{
        document.querySelector("h1").textContent="Draw!";
    }
}