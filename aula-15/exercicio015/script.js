function verify () {

    var data = new Date()
    var year = data.getFullYear()

    var ano = document.getElementById("year")
    var masc = document.getElementById("masc")
    var fem = document.getElementById("fem")
    var res = document.querySelector("div#res")

    if(ano.value.length == 0 || Number(ano.value) > ano) {
        window.alert("Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = year - Number(ano.value)
        var genero = ''
        var img = document.getElementById("res")
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
               img.innerHTML = `<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"`
            } else if (idade < 21) {
                
            } else if (idade < 50) {

            } else {
            }
          
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){

            } else if (idade < 21) {

            } else if (idade < 50) {

            } else {
                
            }
        }
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos`
        

    }



    

    

}