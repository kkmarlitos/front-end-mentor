function transform_balls(balls, balls_coint){
    balls[balls_coint].style = `background-color:rgba(255, 255, 255, 0.800);`
    for(let c = 0; c < 5; c++){
        if(c != balls_coint){
            balls[c].style.backgroundColor = "rgba(255, 255, 255, 0.05)"
        }
    }
}
function transform_balls_timer(){
    
}

export {transform_balls}
