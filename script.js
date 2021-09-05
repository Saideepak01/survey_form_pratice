function rate(num){
  const gold1 = document.querySelector(".star1");
  const gold2 = document.querySelector(".star2");
  const gold3 = document.querySelector(".star3");
  const gold4 = document.querySelector(".star4");
  const gold5 = document.querySelector(".star5");
  
  if(num === 1){
    gold1.style.color = "#FFD700";
  }
  else if(num === 2){
    gold1.style.color = "#FFD700";
    gold2.style.color = "#FFD700";
  }
  else if(num === 3){
    gold1.style.color = "#FFD700";
    gold2.style.color = "#FFD700";
    gold3.style.color = "#FFD700";
  }
  else if(num === 4){
    gold1.style.color = "#FFD700";
    gold2.style.color = "#FFD700";
    gold3.style.color = "#FFD700";
    gold4.style.color = "#FFD700";
  }
  else if(num === 5){
    gold1.style.color = "#FFD700";
    gold2.style.color = "#FFD700";
    gold3.style.color = "#FFD700";
    gold4.style.color = "#FFD700";
    gold5.style.color = "#FFD700";
  }
}
