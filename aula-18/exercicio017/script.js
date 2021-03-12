function Tabuada(){
    var textnum = document.getElementById('num')
    var res = document.getElementById('res')
    if (textnum.value.length == 0){
        alert('[ERRO] Preencha o campo número!')
    } else {
        res.innerHTML = ' '
        var n = Number(textnum.value)
        for (var i = 1; i <= 10; i++){
            res.innerHTML += ` ${n} x ${i} = ${n*i}` + "\n"
        }
    }
}
