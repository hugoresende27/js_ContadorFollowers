const contadores = document.querySelectorAll('.contador')

contadores.forEach(cont => {/*PARA CADA OBJECTO COM CLASSE .contador, AGORA NA VAR const contadores, FUNÇÃO ARROW PARA ATRIBUIR innerText='0' A CADA OBJETO */
    cont.innerText = '0'

    const updateContador = () => {
        const alvo = +cont.getAttribute('data-target')/*VAI BUSCAR O ATRIBUTO data-target SINAL + PARA O TORNAR DO TIPO INTEIRO */
        console.log(typeof alvo, alvo)
        const c = +cont.innerText
        
        const incremento = alvo / 300
        console.log(incremento)

        if (c < alvo) {
            cont.innerText = `${Math.ceil(c+incremento)}`/*PARA MOSTRAR O VALOR INCICIAL */
            setTimeout (updateContador,1)
        }
        else {
            cont.innerText = alvo
        }
    }

    updateContador()
})