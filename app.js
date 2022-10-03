//calculate color value
function getBackgroundColor(octVal){
    let color='#'
    for (let index = 0; index <=5; index++) {
        color+= octVal[Math.floor(Math.random()*16)]       
    }
    return color;
}

//event listener to call color function
document.getElementById('button').addEventListener('click',()=>{
const octVal = "0123456789ABCDEF";
document.getElementById('canvas').style.backgroundColor=getBackgroundColor(octVal);
}
)