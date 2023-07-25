function transform_balls(balls, balls_coint){
    balls[balls_coint].style = `background-color:rgba(255, 255, 255, 0.800);`
    for(let c = 0; c < balls.length; c++){
        if(c != balls_coint){
            balls[c].style.backgroundColor = "rgba(255, 255, 255, 0.05)"
        }
    }
}
function transform_balls_timer(counter, balls, main_now, main, interval){
    balls[counter].style = `background-color:rgba(255, 255, 255, 0.800);`
    console.log(counter)
    if(main_now != main){
        clearInterval(interval)
    }
    for(let c = 0; c < balls.length; c++){
        if(c != counter){
            balls[c].style.backgroundColor = "rgba(255, 255, 255, 0.05)"
        }
    }
}

export {transform_balls, transform_balls_timer}
