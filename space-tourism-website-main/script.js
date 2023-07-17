import {menu} from './menu.js'

menu.menu_functions()

const dinamic_main = {
    //DOM
    main_dom: document.getElementsByTagName('main')[0],
    home: document.getElementById('home'),
    destination: document.getElementById('embrulho_destinos'),

    //dinamic
    modific_main: function(){
        fetch("starter-code/data.json").then(function(response){
            response.json().then(function(dados){
                let main_now = dinamic_main.home

                //home
                menu.p_home.addEventListener('click', function(){
                    main_now.style.display = 'none'
                    main_now = dinamic_main.home
                    dinamic_main.home.style.display = 'block'
                })

                //destination
                menu.p_destination.addEventListener('click', function(){
                    main_now.style.display = 'none'
                    main_now = dinamic_main.destination
                    dinamic_main.destination.style.display = 'block'
                    const planets = document.getElementsByClassName('planets')
                    for(let c = 0; c < planets.length; c++){
                        planets[c].addEventListener('click', () =>{
                            const name_planet = document.getElementsByTagName('h4')[0]
                            const img_planet = document.getElementById('planeta_img')
                            const description_planet = document.getElementById('description_planet')
                            const distance_planet = document.getElementById('distancia')
                            const travel_planet = document.getElementById('tempo_estimado')

                            name_planet.textContent = dados.destinations[c].name
                            img_planet.src = dados.destinations[c].images.webp
                            description_planet.textContent = dados.destinations[c].description
                            distance_planet.textContent = dados.destinations[c].distance
                            travel_planet.textContent = dados.destinations[c].travel
                        })
                    }
                })

                //crew
                menu.p_crew.addEventListener('click', function(){
                    const selecao1 = document.getElementById('selecao1')
                    const selecao2 = document.getElementById('selecao2')
                    const selecao3 = document.getElementById('selecao3')
                    const selecoes = [selecao1, selecao2, selecao3]
                    let contador = 0

                    for(let c = 0; c < selecoes.length; c++){
                        selecoes[c].addEventListener('click', () =>{
                            if(c == 0){
                                selecoes[1].style.backgroundColor = 'transparent'
                                selecoes[2].style.backgroundColor = 'transparent'
                                selecoes[0].style.backgroundColor = 'red'
                                contador = 0
                            }
                            else if(c == 1){
                                selecoes[0].style.backgroundColor = 'transparent'
                                selecoes[2].style.backgroundColor = 'transparent'
                                selecoes[1].style.backgroundColor = 'red'
                                contador = 1
                            }
                            else if(c == 2){
                                selecoes[0].style.backgroundColor = 'transparent'
                                selecoes[1].style.backgroundColor = 'transparent'
                                selecoes[2].style.backgroundColor = 'red'
                                contador = 2
                            }
                        })
                    }
                        function mudando(){
                            if(contador == 0){
                                selecoes[1].style.backgroundColor = 'transparent'
                                selecoes[2].style.backgroundColor = 'transparent'
                                selecoes[0].style.backgroundColor = 'red'
                            }else if(contador == 1){
                                selecoes[0].style.backgroundColor = 'transparent'
                                selecoes[2].style.backgroundColor = 'transparent'
                                selecoes[1].style.backgroundColor = 'red'
                            }else if(contador == 2){
                                selecoes[0].style.backgroundColor = 'transparent'
                                selecoes[1].style.backgroundColor = 'transparent'
                                selecoes[2].style.backgroundColor = 'red'
                            }

                            contador++
                            if(contador > 2){
                                contador = 0
                            }
                        }
                    setInterval(mudando, 5000)
                })
            })
        })
    }
}

dinamic_main.modific_main()