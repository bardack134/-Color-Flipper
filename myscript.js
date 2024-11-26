function changeColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    // const element = array[i];

    let number=Math.random()*16;

    // console.log(number, "numero aproximadop es:",Math.floor(number));
    // console.log("-");
    color += letters[Math.floor(number)];
        
  } 
  document.getElementById("nowColor").innerHTML=color;
  document.body.style.backgroundColor=color;
  
  
}