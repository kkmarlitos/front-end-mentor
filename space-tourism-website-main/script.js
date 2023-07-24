import {menu} from './menu.js'
import { transform_balls } from './teste.js'

menu.menu_functions()

const dinamic_main = {
    //DOM
    main_dom: document.getElementsByTagName('main')[0],
    home: document.getElementById('home'),
    destination: document.getElementById('embrulho_destinos'),
    crew: document.getElementById('embrulho_crew'),
    technology: document.getElementById('embrulho_technology'),

    //dinamic
    modific_main: function(){
        fetch("starter-code/data.json").then(function(response){
            response.json().then(function(dados){
                let main_now = dinamic_main.home

                //home
                menu.p_home.addEventListener('click', function(){
                    main_now.style.display = 'none'
                    main_now = dinamic_main.home
                    main_now.style.display = 'block'
                })

                //destination
                menu.p_destination.addEventListener('click', function(){
                    main_now.style.display = 'none'
                    main_now = dinamic_main.destination
                    main_now.style.display = 'block'
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
                    main_now.style.display = 'none'
                    main_now = dinamic_main.crew
                    main_now.style.display = 'block'
                    const img_crew = document.querySelector('#img_crew')
                    const bio_crew = document.getElementById('crew_bio')
                    const crew_role = document.getElementById('funcao_crew')
                    const name_crew = document.getElementById('nome_crew')

                    const selections = document.getElementsByClassName('bolinha')
                    let contador = 0
                    for(let c = 0; c < selections.length; c++){
                        selections[c].addEventListener('click', () =>{
                            transform_balls(selections ,c)
                        })
                    }

                    for(let c = 0; c < selections.length; c++){
                        selections[c].addEventListener('click', () =>{
                            if(c == 0){
                                
                                
                                contador = 0
                                img_crew.src = dados.crew[0].images.webp
                                img_crew.style.width = '25vw'
                                bio_crew.textContent = dados.crew[0].bio
                                crew_role.textContent = dados.crew[0].role
                                name_crew.textContent = dados.crew[0].name
                            }
                            else if(c == 1){
                                
                                
                                contador = 1
                                img_crew.src = dados.crew[1].images.webp
                                img_crew.style.width = '25vw'
                                bio_crew.textContent = dados.crew[1].bio
                                crew_role.textContent = dados.crew[1].role
                                name_crew.textContent = dados.crew[1].name
                            }
                            else if(c == 2){
                                
                                
                                contador = 2
                                img_crew.src = dados.crew[2].images.webp
                                img_crew.style.width = '30vw'
                                bio_crew.textContent = dados.crew[2].bio
                                crew_role.textContent = dados.crew[2].role
                                name_crew.textContent = dados.crew[2].name
                            }
                            else if(c == 3){
                                
                               
                                contador = 3
                                img_crew.src = dados.crew[3].images.webp
                                img_crew.style.width = '30vw'
                                bio_crew.textContent = dados.crew[3].bio
                                crew_role.textContent = dados.crew[3].role
                                name_crew.textContent = dados.crew[3].name
                            }
                        })
                    }
                        function mudando(){
                            if(contador == 0){
                                selections[1].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[2].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[3].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[0].style.backgroundColor = 'rgba(255, 255, 255)'
                                img_crew.src = dados.crew[0].images.webp
                                img_crew.style.width = '25vw'
                                bio_crew.textContent = dados.crew[0].bio
                                crew_role.textContent = dados.crew[0].role
                                name_crew.textContent = dados.crew[0].name
                            }else if(contador == 1){
                                selections[0].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[2].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[3].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[1].style.backgroundColor = 'rgba(255, 255, 255)'
                                img_crew.src = dados.crew[1].images.webp
                                img_crew.style.width = '25vw'
                                bio_crew.textContent = dados.crew[1].bio
                                crew_role.textContent = dados.crew[1].role
                                name_crew.textContent = dados.crew[1].name
                            }else if(contador == 2){
                                selections[0].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[1].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[3].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[2].style.backgroundColor = 'rgba(255, 255, 255)'
                                img_crew.src = dados.crew[2].images.webp
                                img_crew.style.width = '30vw'
                                bio_crew.textContent = dados.crew[2].bio
                                crew_role.textContent = dados.crew[2].role
                                name_crew.textContent = dados.crew[2].name
                            }
                            else if(contador == 3){
                                selections[0].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[1].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[2].style.backgroundColor = 'rgba(255, 255, 255, 0.089)'
                                selections[3].style.backgroundColor = 'rgba(255, 255, 255)'
                                img_crew.src = dados.crew[3].images.webp
                                img_crew.style.width = '30vw'
                                bio_crew.textContent = dados.crew[3].bio
                                crew_role.textContent = dados.crew[3].role
                                name_crew.textContent = dados.crew[3].name
                            }
                            contador++
                            if(contador > 3){
                                contador = 0
                            }
                            if(main_now != dinamic_main.crew){
                                clearInterval(interval)
                            }
                        }
                    const interval = setInterval(mudando, 5000)
                })
                
                //technology
                menu.p_technology.addEventListener('click', function(){
                    main_now.style.display = 'none'
                    main_now = dinamic_main.technology
                    main_now.style.display = 'block'

                    const bolinha_tech1 = document.getElementById('bolinha_tech1')
                    const bolinha_tech2 = document.getElementById('bolinha_tech2')
                    const bolinha_tech3 = document.getElementById('bolinha_tech3')
                    const bolinhas_tech = [bolinha_tech1, bolinha_tech2, bolinha_tech3]
                    const terminology = document.getElementById('terminology')
                    const text_tech = document.getElementsByClassName('texts')[1]
                    const img_tech = document.querySelector('#img_tech')
                    
                    
                    let contador = 0
                    for(let c = 0; c < bolinhas_tech.length; c++){
                        bolinhas_tech[c].addEventListener('click', () =>{
                            contador = c
                            if(contador == 0){
                                bolinhas_tech[1].style = `
                                background-color: trasparent;
                                color: white;
                                `
                                bolinhas_tech[2].style = `
                                background-color: trasparent;
                                color: white;
                                `
                                bolinhas_tech[0].style = `
                                background-color: white;
                                color: black;
                                `
                                img_tech.src = dados.technology[0].images.landscape
                                text_tech.textContent = dados.technology[0].description
                                terminology.textContent = dados.technology[0].name
                            }else if(contador == 1){
                                bolinhas_tech[0].style = `
                                background-color: trasparent;
                                color: white;
                                `
                                bolinhas_tech[2].style = `
                                background-color: trasparent;
                                color: white;
                                `
                                bolinhas_tech[1].style = `
                                background-color: white;
                                color: black;
                                `
                                img_tech.src = dados.technology[1].images.landscape
                                text_tech.textContent = dados.technology[1].description
                                terminology.textContent = dados.technology[1].name
                            }else if(contador == 2){
                                bolinhas_tech[0].style = `
                                background-color: trasparent;
                                color: white;
                                `
                                bolinhas_tech[1].style = `
                                background-color: trasparent;
                                color: white;
                                `
                                bolinhas_tech[2].style = `
                                background-color: white;
                                color: black;
                                `
                                img_tech.src = dados.technology[2].images.landscape
                                text_tech.textContent = dados.technology[2].description
                                terminology.textContent = dados.technology[2].name
                            }
                        })
                    }
                    function mudando_tech(){
                        if(contador == 0){
                            bolinhas_tech[1].style = `
                            background-color: trasparent;
                            color: white;
                            `
                            bolinhas_tech[2].style = `
                            background-color: trasparent;
                            color: white;
                            `
                            bolinhas_tech[0].style = `
                            background-color: white;
                            color: black;
                            `
                            img_tech.src = dados.technology[0].images.landscape
                            text_tech.textContent = dados.technology[0].description
                            terminology.textContent = dados.technology[0].name
                        }else if(contador == 1){
                            bolinhas_tech[0].style = `
                            background-color: trasparent;
                            color: white;
                            `
                            bolinhas_tech[2].style = `
                            background-color: trasparent;
                            color: white;
                            `
                            bolinhas_tech[1].style = `
                            background-color: white;
                            color: black;
                            `
                            img_tech.src = dados.technology[1].images.landscape
                            text_tech.textContent = dados.technology[1].description
                            terminology.textContent = dados.technology[1].name
                        }else if(contador == 2){
                            bolinhas_tech[0].style = `
                            background-color: trasparent;
                            color: white;
                            `
                            bolinhas_tech[1].style = `
                            background-color: trasparent;
                            color: white;
                            `
                            bolinhas_tech[2].style = `
                            background-color: white;
                            color: black;
                            `
                            img_tech.src = dados.technology[2].images.landscape
                            text_tech.textContent = dados.technology[2].description
                            terminology.textContent = dados.technology[2].name
                        }
                        contador ++
                        if(contador > 2){
                            contador = 0
                        }
                        if(main_now != dinamic_main.technology){
                            clearInterval(interval)
                        }
                    }
                    let interval = setInterval(mudando_tech, 3000)
                })
            })
        })
    }
}

dinamic_main.modific_main()