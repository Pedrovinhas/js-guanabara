function hora() {
    var msg = document.getElementById('msg')
    var img = document.getElementById("foto")
    var body = document.querySelector('body')

    var data = new Date()
    var seconds = data.getSeconds()
    var minutes = data.getMinutes()
    var time = data.getHours()
    
    if (time < 10){
        time = `0${time}`
    }

    if (seconds < 10){
        seconds = `0${seconds}`
    }
    
    if (minutes < 10){
        minutes = `0${minutes}`
    }

    msg.innerHTML = `Agora são ${time} horas e ${minutes} minutos e ${seconds} segundos `

    if (time >= 5 && time < 12) {
        img.innerHTML = '<img src="https://i.pinimg.com/474x/ed/ea/cb/edeacbbc9098ddb7787595c9b239a45a.jpg" alt="Manhã" id="imagem">' 
        body.style.background = "#DECF40"
    } else if (time >= 12 && time < 18) {
        img.innerHTML = '<img src="https://wallpapercave.com/wp/wp7167501.jpg" alt="Manhã" id="imagem">' 
        body.style.background = "#F98107"
    } else {
        img.innerHTML = '<img src="https://c4.wallpaperflare.com/wallpaper/42/258/528/minimalist-minimalism-artist-landscape-wallpaper-preview.jpg" alt="Noite" id="imagem"></img>' 
        body.style.background = "#022E53"
    }
}

