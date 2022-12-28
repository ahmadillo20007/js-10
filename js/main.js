var elBtn = document.querySelector('.btn')
var elInp = document.querySelector('.inp')
var elPas = document.querySelector('.pas')
var elText = document.querySelector('.text')
var elCon = document.querySelector('.container')


var arr = ['frondend','bekend','android','IOS','grafik dizayner','smm','menegar','copywriter','pdp','java script','html','css','react','not js','c++','java','']

var bosh = []

elBtn.addEventListener('click', function(){

    for(var i = 0; i < arr.length; i++){
        if(elInp.value == arr[i]){
            elInp.classList.add('gren')
        }
        else if(elInp.value != arr[i]){
            elInp.classList.add('green')
        }
    }

})
var par =[0007,0077,7777,0707,0770,]
var bos = []
elBtn.addEventListener('click',function(){
    for(var u = 0; u<par.length; u++){
        if(elPas.value == par[u]){
            elPas.classList.add('red')
        }
    }
})


function kirish(){
    for(let i=0; i< arr.length; i++){
        for(let u = 0; u< par.length; u++){
        if(elInp.value == arr[i] && elPas.value == pas[u]){
            
        }
    }
    }
}











