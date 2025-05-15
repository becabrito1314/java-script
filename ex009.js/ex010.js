var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var segu = agora.getSeconds()
console.log(`Agora são ${hora} horas e ${min} minutos e ${segu} segundos`)
if(hora >= 1 && hora < 12){
    console.log('boa dia :)')
} else{
    if(hora >= 12 && hora < 18){
        console.log('boa tarde :/')
    } else{
        if(hora >= 18 && hora < 23){
            console.log('boa noite :3')
        }
    }
}
