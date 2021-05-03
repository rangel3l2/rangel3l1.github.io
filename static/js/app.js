

const container =document.querySelector('#container')

const grid=document.createElement('div')
grid.classList.add('grid')
let width=4
let height=4
let cont=0
let storeArray = []  
let getSuffle=[]
const SortImg=[]
const squares=[]
let sort=[]
let contad1=0
let divImage
let SelectImg=1
let selectGlobalImg=0
let effect3d=[]
let interval
let movimentos =document.createElement('div')


gameName()
masterEffect()

createbutton()











function gera_cor(){
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++ ) {
  //E concatena à variável cor
      cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}
var myVar = setInterval(effectAction,1000);




function masterEffect(){
 
  
 
  
  let effects=document.createElement('div')
   
  effects.classList.add('allEffect')
  container.appendChild(effects)
  
   
   
  for(i=0;i<30;i++){
   
   
    let effect= document.createElement('div')
  
    effects.appendChild(effect)
  
   
   
   
   effect.classList.add('effect')
   effect.id=`effect${i}`
  
   effect3d.push(effect)
   
 
  
  
 
}

}
var cont1=0
function effectAction(){
  

 
  if(cont1<=6){
    cont1++
    console.log(cont1);
  
    
    
  
  }
  contad1++
  cor= gera_cor()
  for(i=0;i<30;i++){
  if(i%2==0){
    effect3d[i].style.backgroundColor=`${cor}`
  }
  if(i%2==1){
    cor2=gera_cor()
    effect3d[i].style.backgroundColor=`${cor2}`
  }
 
  
   var widthContainer= window.innerWidth
  //var heightContainer=window.innerHeight
 

 
effect3d[i].style.width=`${widthContainer/30}px`
effect3d[i].style.maxWidth=`${widthContainer/30}`
effect3d[i].style.height=`${window.innerHeight/30}px`
effect3d[i].style.maxHeight=`${widthContainer/30}`
  }

}
function  gameName(){
  const name= document.createElement('div')
  container.appendChild(name)
  name.id='titleGame'
  name.classList.add('designGame')
  var p= document.createElement('h1')
  name.appendChild(p)
  p.innerHTML='Picture Puzzle 2021'
}


function createImage() {
 
  
 
  if(selectGlobalImg==0){
    console.log(divImage);
    
    if(divImage!=undefined){
      container.removeChild(divImage)
        }
        
  
  divImage = document.createElement('div')
 container.appendChild(divImage)
 

 divImage.id='divImage'
 divImage.style.top='50px'
 divImage.style.display='block'
 let picIntro = document.createElement('img')
 divImage.appendChild(picIntro)
 
 picIntro.id='picIntro'
 picIntro.src='./static/img/myImage.jpg'
 subImg= document.createElement('p')
 divImage.appendChild(subImg)
 subImg.textContent='Escolha uma imagem'
 subImg.id='subImg'
 

 divImage.addEventListener('click',function(){
  behavorPictureSelection()

  
  
  toSortImg()
})
}
if(selectGlobalImg==1){
  if(divImage!=undefined){
    container.removeChild(divImage)
      }
     
divImage = document.createElement('div')
container.appendChild(divImage)

divImage.id='divImage'

let picIntro = document.createElement('img')
divImage.appendChild(picIntro)
divImage.style.display='block'
divImage.style.top='50px'
picIntro.id='picIntro'
picIntro.src='./static/img/myImage1.png'
 subImg= document.createElement('p')
divImage.appendChild(subImg)
subImg.textContent='Escolha uma imagem'
subImg.id='subImg'

divImage.addEventListener('click',function(){
 behavorPictureSelection()
  
  SelectImg=2
  
toSortImg()
})
 
 

}
if(selectGlobalImg==2){
  if(divImage!=undefined){
    container.removeChild(divImage)
      }
      
 divImage = document.createElement('div')
container.appendChild(divImage)
divImage.style.display='block'
divImage.style.top='50px'
divImage.id='divImage'
let picIntro = document.createElement('img')
divImage.appendChild(picIntro)
picIntro.id='picIntro'
picIntro.src='./static/img/myImage2.jpg'
 subImg= document.createElement('p')
divImage.appendChild(subImg)
subImg.textContent='Escolha uma imagem'
subImg.id='subImg'
divImage.addEventListener('click',function(){
 
 
  behavorPictureSelection()
  
  SelectImg=3
  toSortImg()
  

})
}
if(selectGlobalImg==3){
  if(divImage!=undefined){
    container.removeChild(divImage)
      }
      
 divImage = document.createElement('div')
container.appendChild(divImage)
divImage.style.display='block'
divImage.style.top='50px'
divImage.id='divImage'
let picIntro = document.createElement('img')
divImage.appendChild(picIntro)
picIntro.id='picIntro'
picIntro.src='./static/img/myImage3.jpg'
 subImg= document.createElement('p')
divImage.appendChild(subImg)
subImg.textContent='Escolha uma imagem'
subImg.id='subImg'
divImage.addEventListener('click',function(){
 
 
  behavorPictureSelection()
  
  SelectImg=4
  toSortImg()
  

})
}
}
function behavorPictureSelection(){
  button1.style.display='none'
  button2.style.display='none'
 divImage.style.display='none'
 divImage.style.marginLeft='300px'
 divImage.style.transition='0.5s ease-out'
 divImage.style.visibility='hidden'
 grid.style.display='flex'
 grid.style.marginTop='150px'
 movimentos.style.display='block'

 h2.style.display='block'
 h2.innerHTML='Controles'
 h2.style.marginLeft=' 40px'
 h2.style.marginBottom='0px'
 button7.style.display='block'
 button6.style.marginTop='80px'
 button6.style.display='block'
 

 button6.innerHTML=""
 button6.innerHTML='voltar'
}
function createbutton() {
  test =5
  const botãofather = document.createElement('div')
  container.appendChild(botãofather)
  botãofather.classList.add('Botões')  
  window.h2=document.createElement('h2')
  botãofather.appendChild(h2)
  h2.id='painelControle'
  h2.innerHTML='Escolha dificuldade'
  h2.classList.add('designGame')  
  

  for(let i=0;i<=9;i++){
    const button = document.createElement('button')
    container.appendChild(button)
  
    botãofather.appendChild(button)
    button.id=`button${i}`
    button.classList.add('button')
   
   
    
    buttonActions(button,i)
  }

 
}



function toCreateSquares() {
  
 grid.classList.add('grid')
 container.appendChild(grid)
 
  
   
    let col=0
    let row=0 
 //criar quadrados
 
 for(let i=0;i<width*height;i++){
   
    if(i>0){
        col++
         if(i%width==0){
             row++     
             col=0
         }
        }
  
     let square= document.createElement('div')    
    square.classList.add('squares')
    
   
    grid.appendChild(square)
    square.id=`d${row}${col}` 
    squares.push(square)
     
  }
  
}



function buttonActions(button,i) {
  if(i==0){
    //botão start

    button.innerHTML='START GAME'
     button.onclick= function  (){
     limpar= clearInterval(myVar)
     let button0 = document.querySelector('button0')
     button.style.display='none'
      let painelControle =document.querySelector('#painelControle')
     painelControle.style.display='block'
     painelControle.style.marginLeft='350px'
     painelControle.style.marginTop='80px'
     let button3 =document.querySelector('#button3')
     let button4 =document.querySelector('#button4')
     let button5 =document.querySelector('#button5')
   
      
     
     button3.style.display='block'
     button4.style.display='block'
     button5.style.display='block'
     button3.style.marginLeft='370px'
     button4.style.marginLeft='370px'
     button5.style.marginLeft='370px'
     button3.style.marginTop='70px'
     
    
    
    
    
    }
  }
  if(i==1){
    var button1=document.querySelector('#button1')
 
    button1.style.backgroundImage="url('./static/img/setaLeft.png')"
    console.log(selectGlobalImg,'select global img button');
    button1.style.Top='500px'
    button1.style.left='250px'
    //botão seta esquerda
    console.log('botao esquerda ',selectGlobalImg);
  
    button1.onclick =function(){
     

      
      if(selectGlobalImg>=0 && selectGlobalImg<3){
        selectGlobalImg=selectGlobalImg-1
        createImage()
      }
      if(selectGlobalImg<0){  
       
       
        selectGlobalImg=2
        createImage()
    
      }
    }
  

  }
  if(i==2){
   
    //botao seta direita
  
    var button2=document.querySelector('#button2')
    button2.style.backgroundImage="url('./static/img/setaRight.png')"
    button2.style.Top='500px'
    button2.style.left='250px'
    button2.onclick =function(){
      if(selectGlobalImg>=0 && selectGlobalImg<4){
        selectGlobalImg=selectGlobalImg+1

      

      
        createImage()
       }
      if(selectGlobalImg>2){   
        selectGlobalImg=0
      
       
        createImage()
    
      }
    }
    
  }
  if(i==3){
    button.innerHTML='Fácil'
    button3.onclick = function(){
      SelectImg=5
      button3.style.display='none'
      button4.style.display='none'
      button5.style.display='none'
    
    
      button1=document.querySelector('#button1')
      button2=document.querySelector('#button2')
      button1.style.display='block'
      button2.style.display='block'
      painelControle.style.display='none'
      button1.style.top='200px'
      button1.style.left='250px'
      button2.style.top='200px'
      button2.style.left='430px'
      grid.style.width='240px'
      grid.style.height='240px'
      grid.style.marginLeft='38%'
      
       width=3
       height=3
       movimentos.style.position='none'
       movimentos.style.marginTop='-350px'
       movimentos.style.width='180px'
       movimentos.style.marginLeft='40%'
        
  
      
      createImage()
      toCreateSquares()
       createTakeId()
     
    }
  }
  if(i==4){
    button.innerHTML="Normal"
    
    button4.onclick = function(){
    
       button3.style.display='none'
      button4.style.display='none'
      button5.style.display='none'
   
    
      button1=document.querySelector('#button1')
      button2=document.querySelector('#button2')
      button1.style.display='block'
      button2.style.display='block'
      
      painelControle.style.display='none'
     
      button1.style.top='200px'
      button1.style.left='250px'
      button2.style.top='200px'
      button2.style.left='430px'
      grid.style.width='240px'
      grid.style.height='240px'
      squares.innerHTML=''
      grid.style.width='320px'
      grid.style.height='240px'
      movimentos.style.position='none'
       movimentos.style.marginTop='-340px'
       movimentos.style.width='180px'
       movimentos.style.marginLeft='39%'

      
       width=4
       height=3
     
          
      createImage() 
     
      
      
    

      toCreateSquares()
      createTakeId()
     //Id(squares)
    }
    
  }
  if(i==5){
    button.innerHTML='Difícil'
    button5.onclick = function(){
      SelectImg=1
      button3.style.display='none'
     button4.style.display='none'
     button5.style.display='none'
        button1=document.querySelector('#button1')
      button2=document.querySelector('#button2')
 
     button1.style.display='block'
     button2.style.display='block'
     button1.style.top='200px'
      button1.style.left='250px'
      button2.style.top='200px'
      button2.style.left='430px'
     painelControle.style.display='none'

    grid.style.width='320px'
    grid.style.height='320px'
    
     width=4
     height=4
     createImage() 
  
    
    
    toCreateSquares()
    createTakeId()
 

   }
      
      
    
  }
  if(i==6){
    let button6 =document.querySelector('#button6')
   
    button.innerHTML='Novo Jogo'
    button6.onclick=function(){
       //RESET
              
       grid.style.display='flex'
       button0.style.display='none'
       history.go(0)
       
    }
  }
  if(i==7){
    let button7 =document.querySelector('#button7')
    button8 =document.querySelector('#button8')
    
    button.innerHTML='Embaralhar'
    button7.style.marginTop='30px'
    
  
   
    button7.onclick= function(){
      button7.style.display='none'
      button6.innerHTML='Novo Jogo'
      button8.style.display='block'
      button8.style.marginTop='50px'
      button9.style.display='block'
      clearInterval(interval);
      interval=null

      
      movimentos.style.display='block'
      if(cont<1){
        toMessImg()
    }
    else{
       saveMoves()
    }
     
    }
  }
  if(i==8){
    //resolva sozinho
    button8 =document.querySelector('#button8')
  
    button.innerHTML='Resolva Sozinho'
    button8.style.marginBottom='-10px'
    button8.onclick= function(){
     
      if(interval==null){
        button8.innerHTML='Parar'
        button8.style.marginTop='80px'
   
        button6.style.display='block'
        button7.style.display='none'
        button9.innerHTML='Ver Imagem'
      
       interval= setInterval(automaticMove,500)
       
       if(cont<1){
        toMessImg()

    }
    else{
       saveMoves()
    }
     
        
  
      } 
      else{
      button8.innerHTML='Resolva Sozinho'
      button6.style.display='block'
      button9.style.display='block'
      button9.innerHTML='Ver Imagem'
      clearInterval(interval)   
      interval=null
      }
    }
  }
  if(i==9){
    let button9=document.querySelector('#button9')
    button9.innerHTML='Ver Imagem'
    button9.style.marginTop='30px'
    button9.onclick=function(){
     button9.innerHTML='Ver Imagem'
   button9.style.display='none'
 
   button7.style.display='block'
    button7.innerHTML='Voltar'
    button7.style.marginTop='100px'
    button8.style.marginTop='-80px'
    button6.style.display='block'
    clearInterval(interval);
     interval=null
    
     toSortImg()  
    }

  }


}  
  


function toSortImg(){
   
  //imagem consertada
  let col=0
  let row=0 
 
 for(i=0;i<width*height;i++) {
      squares[i].removeEventListener('click',moveEvent);
      squares[i].innerHTML=''
     if(i>0){
         col++
          if(i%width==0){
              row++     
              col=0
          }
         }
    
     if(i<(width*height)-1){
       
      img=document.createElement('img')
        
      img.src=`./static/img/my_Image${SelectImg}[${i}].jpg`  
      img.id=`p${row}${col}` 
      
           
       
           
       squares[i].appendChild(img)
     
      
    
    
     }
    
     
 
 }

}
function toMessImg(){
  getSuffle = randomStore()  
   //bagunçar imagem
   let col=0
   let row=0 
 
  
  for(i=0;i<width*height;i++) {
      
      squares[i].innerHTML=''
      if(i>0){
          col++
           if(i%width==0){
               row++     
               col=0
           }
          }
      
      //metodo map vc pega todos os elementos do antigo array e adiciona o que quiser a eles;
           if(i<(width*height)-1){
           
          img=document.createElement('img')          
             
          img.id=`p${row}${col}`
            
          if(cont<1){
              sort[i]=getSuffle[i] 
              img.src=`./static/img/my_Image${SelectImg}[${getSuffle[i]}].jpg` 
              console.log(sort[i]);
              
            
          }  
          
         
           
           squares[i].appendChild(img)
         
           
          
          
          }
           if(cont<1){
              squares[i].addEventListener('click',moveEvent) 
              squares[i].addEventListener('touch',moveEvent)
           }
       
       
       
        
          
         
      }
     // getSuffle.length = 0;---APAGA OS ITENS DO ARRAY
 
 
}
function callRamdom(){
  var randomNumber = Math.floor(Math.random() * ((width*height)-1));   
  return randomNumber
}

function randomStore(){ 
  
  let localValue = callRamdom()      
  let status = false

  for(i=0;i<(width*width)-1; i++){
  
  let aa = storeArray[i]
 
  
      if(aa!=localValue){
        
          //valor do i
          if(i==(width*height)-2){
              status=true        
          }

      }   
      else
      break

  }

  if(status==true){

      storeArray.push(localValue)   
  }
  if(storeArray.length!=(width*height)-1){
       randomStore()
  }   
  
  return storeArray
}   
  

//fazer funcionar da qualquer jeito


var esquerda
var direita
var emcima
var embaixo



function detectionNear(empty,event){
  
     
  for(i=0;i<width*height;i++){
      
         
      if(squares[i].childNodes.length==0){  
         if(i%width<width-1){
          direita= squares[i+1]

          
          var moveRight=document.querySelector(`.grid #${direita.id} img`);
          if(event.currentTarget.id==direita.id ){
              aux1=sort[i]
              sort[i]=sort[i+1]
              sort[i+1]=aux1
              
              squares[i+1].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
              
              
          }
         
          
         }
        
         if(i%width>0){
          esquerda=squares[i-1]
          
          var moveLeft= document.querySelector(`.grid #${esquerda.id} img`)
         
              
           if(event.currentTarget.id==esquerda.id ){
                  
              aux1=sort[i]
              
              sort[i]=sort[i-1]
              sort[i-1]=aux1
                 
                  
                  squares[i-1].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
                  
              }
          
         }
         if(i>width-1){
         
          emcima= squares[i-width]
          var moveTop= document.querySelector(`.grid #${emcima.id} img`)
          if(event.currentTarget.id==emcima.id){
            
              aux1=sort[i]
              sort[i]=sort[i-width]
              sort[i-width]=aux1
                 
              squares[i-width].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
             

          }
       
         }
         if(i<(width*height)-width){
            
          embaixo=squares[i+width]
          
          var moveDown= document.querySelector(`.grid #${embaixo.id} img`)
          if(event.currentTarget.id==embaixo.id){
              aux1=sort[i]
              sort[i]=sort[i+width]
              sort[i+width]=aux1
              squares[i+width].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg`
             
              
          }
         }
         
      }
   
  

  }


 
 
      moveLogic(event,empty,moveLeft,moveRight,moveTop,moveDown)
}
function moveLogic(event,empty,moveLeft,moveRight,moveTop,moveDown){

  
  
 
 if(event.target==moveLeft ||event.target==moveTop ||event.target==moveRight || event.target==moveDown )
 {
 
  contador( )
 takeId()

    empty.appendChild(event.target)
    aux=empty.id
    empty.id=event.currentTarget.id
    event.currentTarget.id=aux
    event.target.innerHTML=''
    console.log(sort,'sort em clique');
    
   
   //empty.appendChild()
    
     
    
  }
}

function isEmpty(){

  for(i=0;i<width*height;i++){
    
      if(squares[i].childNodes.length==0){
        var empty=squares[i]
      
              

      }
     
    
  }

  

  return empty
}

function contador( ){
  
  
  cont++

  
  movimentos.id='contador'
  movimento=document.querySelector(`#movimentos`)
  movimentos.innerHTML=`Movimentos  ${cont}`
 
  movimentos.style.backgroundColor='#e0d8d7'
  movimentos.style.textAlign='center';
  
  movimentos.style.border='black solid 1px'
  movimentos.style.lineHeight='180%'
  
  container.appendChild(movimentos);

  return cont
  
}

function moveEvent(event){
 


 
  //chamar função isEmpty para saber onde esta vazio

 
  


  moveLogic(event)
 
 
  empty=isEmpty()
  detectionNear(empty,event)


}
function saveMoves(){
  //bagunçar imagem
let col=0
let row=0 


for(i=0;i<width*height;i++) {

squares[i].innerHTML=''
if(i>0){
    col++
     if(i%width==0){
         row++     
         col=0
     }
    }

//metodo map vc pega todos os elementos do antigo array e adiciona o que quiser a eles;
     if(i<(width*height)){
      if(sort[i]!=undefined){ 
    img=document.createElement('img')          
       
    img.id=`p${row}${col}` 
              
    img.src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
    
      console.log(sort,'sort na font');
      
     
     squares[i].appendChild(img)
   
     
    
      }
     
    }
  
  if(cont>=1 && interval==null){
    squares[i].addEventListener('click',moveEvent)
  }

}


}

/////////////////etapa 2 como automatizar o codigo
function canMoveLeft(){

  empty=isEmpty()
  for(i=0;i<width*height;i++){
      if(i%width>0){
    
          
          if(empty.id==squares[i].id){
              
              return true
          }
      }
     
      
      
  }
 return false
}

function canMoveRight(){
  empty=isEmpty()
  for(i=0;i<width*height;i++){
      if(empty==squares[i]){
          if(i%width<width-1){
     
         
              return true
          }
      }
     
      
      
  }
 return false
}

function canMoveUp(){
  empty=isEmpty()
  for(i=0;i<width*height;i++){
      if(empty==squares[i]){
          if(i>width-1){
      
         
              return true
          }
      }
     
      
      
  }
 return false
}
function canMoveDown(){
  empty=isEmpty()
  for(i=0;i<width*height;i++){
      
      if(empty==squares[i]){
          if(i<(width*height)-width){
      
         
              return true
          }
      }
     
      
      
  }
 return false
}
let elemCurrentIndex=width*height-1
function automaticMove(){

//   console.log(elemCurrentIndex,'elemento corrente index geral');
   
  
   empty=isEmpty()
  
   var randomMoves= Math.floor(Math.random() * 4);   
  console.log(randomMoves,'numero aleatorios');
   
   for(i=0;i<width*height;i++){  
       
       console.log(sort,'sort vetor em automatic');
        
       if(squares[i]==empty){
          if(randomMoves==0 &&canMoveLeft() && i%width>0){
              if(cont<1){
                  toMessImg()
              }
              else{
                  toMessImg()
                 saveMoves()
                
              }
              ///////////////////////////////////////////
            //  console.log(canMoveLeft(),'canmoveleft')
             // console.log(elemCurrentIndex,'elemento corrente index left');
              //////////////////////////////////
              moveLeft(empty)
           //   console.log(elemCurrentIndex,'elemento corrente index left');
              wayToRun(empty)
             // console.log(elemCurrentIndex,'elemento corrente index left');
            contador()
              
              
          }
      
          if(randomMoves==1 &&canMoveRight() && i%width<width-1){
              if(cont<1){
                  toMessImg()
              }
              else{
                  toMessImg()
                 saveMoves()
                 resulted()
                
              }
              //////////////////////////////////////////
           //   console.log(canMoveRight(),'canmoveright')
           //   console.log(elemCurrentIndex,'elemento corrente index right');
              ///////////////////////////////////
              moveRight(empty)
            //  console.log(elemCurrentIndex,'elemento corrente index right');
              wayToRun(empty)
             // console.log(elemCurrentIndex,'elemento corrente index right');             
              contador()
             takeId()
              resulted()
          }
          
          if(randomMoves==2 &&canMoveUp() && i>width-1 ){
              if(cont<1){
                  toMessImg()
              }
              else{
                  toMessImg()
                 saveMoves()
                
              }

            //  console.log(canMoveUp(),'canmoveup')
             // console.log(elemCurrentIndex,'elemento corrente index up');
              moveUp(empty)
              
          
             // console.log(elemCurrentIndex,'elemento corrente index up');
              wayToRun(empty)
             // console.log(elemCurrentIndex,'elemento corrente index up');
            
              contador()
             takeId()
              resulted()
          }
          
          if(randomMoves==3 &&canMoveDown() && i<(width*height)-1){
                  if(cont<1){
                      toMessImg()
                  }
                  else{
                      toMessImg()
                     saveMoves()
                    
                  }
           //   console.log(canMoveDown(),'canmovedown')
            //  console.log(elemCurrentIndex,'elemento corrente index down');
              moveDown(empty)
              console.log(elemCurrentIndex,'elemento corrente index down');
              wayToRun(empty)
            //  console.log(elemCurrentIndex,'elemento corrente index down');
            
              contador()
              resulted()
              takeId()
          }
      }
  }
 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveLeft(empty){

  for(i=0;i<width*height;i++){
      
      
      if(squares[i]==empty){
          if(i%width>0){
            //  console.log(i,'i');
              elemCurrentIndex=i
              squares[elemCurrentIndex-=1]
             // console.log(elemCurrentIndex);
              aux1=sort[i]
              sort[i]=sort[i-1]
              sort[i-1]=aux1
              
              squares[i-1].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
              return elemCurrentIndex

          }
        
      }
      
  }
 
}
function moveRight(empty){
  for(i=0;i<width*height;i++){
      if(squares[i]==empty){
          if(i%width<height-1){
         //     console.log(i,'i');
              elemCurrentIndex=i  
              squares[elemCurrentIndex+=1]
              aux1=sort[i]
              sort[i]=sort[i+1]
              sort[i+1]=aux1
              
              squares[i+1].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
               return elemCurrentIndex

          }
         
            
           
            
        }
        

      
  }

}
function moveUp(empty){
   
  for(i=0;i<width*height;i++){
      if(squares[i]==empty ){
           if(i>width-1){
          //    console.log(i,'i');
              elemCurrentIndex=i  
            squares[elemCurrentIndex-=width]
            aux1=sort[i]
            sort[i]=sort[i-width]
            sort[i-width]=aux1
            
            squares[i-width].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg`
        //    console.log(elemCurrentIndex,'up index');
           
            return elemCurrentIndex 
           } 
        }
       
  }
  
}
function moveDown(empty){
  for(i=0;i<width*height;i++){
      if(squares[i]==empty){
          if( i<(width*height)-1){
             // console.log(i,'i');
           elemCurrentIndex=i 
             
              squares[elemCurrentIndex+=width]
              aux1=sort[i]
              sort[i]=sort[i+width]
              sort[i+width]=aux1
              
              squares[i+width].children[0].src=`./static/img/my_Image${SelectImg}[${sort[i]}].jpg` 
       
               return elemCurrentIndex 
          }
            
           
        }
    
      
  }

}

function wayToRun(empty){
  for(i=0;i<width*height;i++){
      if(empty==squares[i]){
   //  console.log(empty, ' vazio');
    // console.log(squares[i], 'quadrado');

     
     
      console.log(i,'posição do vetor 1');
      
      console.log(elemCurrentIndex,'correntindex');
    
    //empty// 
     aux=squares[i].id
     squares[i].appendChild(squares[elemCurrentIndex].children[0])
         
  
    // console.log(aux);
     
     squares[i].id=squares[elemCurrentIndex].id
     squares[elemCurrentIndex].id=aux
    
    
    

    // console.log(empty,'vazio');
   //  console.log(squares[i],'squares');
      }
      
  }
}

function createTakeId(){
  let divIdAtual = document.createElement('div')
  container.appendChild(divIdAtual)
  divIdAtual.id='posição'
   
  divIdAtual.style.backgroundColor='#e0d8d7'
  divIdAtual.style.textAlign='center';
  divIdAtual.style.border='black solid 1px'
  divIdAtual.style.lineHeight='180%'
  if(width==4 &&height==3){
    divIdAtual.style.width='160px'
    divIdAtual.style.marginLeft='39%'

  }
  if(width==3 &&height==3){
    divIdAtual.style.width='160px'
    divIdAtual.style.marginLeft='40%'

  }
 
}


 function takeId(){
  let  divIdAtual=document.querySelector('#posição')
  
   divIdAtual.style.display='block'
   let col=0
    let row=0 
 //criar quadrados
 let position
 for(let i=0;i<width*height;i++){
   
    if(i>0){
        col++
         if(i%width==0){
             row++     
             col=0
         }
        }
     
     //console.log(squads);
   //  console.log(sort[i],'sort em takeid');
     if(sort[i]==undefined){
       console.log(i,'i em taked id');
       divIdAtual.innerHTML=`Posição:${row},${col}`
     }
     
   }
  
  
  
  
 

 }
function resulted() {
let cont2=0
  for (i = 0; i < (width * height)-1; i++) {
      console.log(sort);

      if (sort[i]<sort[i+1]) {
          cont2++
          console.log(cont2);
          
          if(cont2>=13){

              clearInterval(interval)   
              interval=null
          alert(`Parabens você venceu em ${cont} movimentos`)
          }

      }

  }
 
//    console.log(o,'teste');
    
}


function solveGame(){

  let value;
  let newSort=sort;
  for(i=0;i<width*height;i++){
      if(squares[i]==empty)
      if(newSort[i]==i)
      {
          value=4
          //4 undefined

      }
      if(newSort[i-1]!=i-1 || newSort[i-width]!=i-width || newSort[i-width+1]!=i-width+1)
      {

          value=0  //repetir esse movimento duas vezes
          //0 = left


      }
      
      if(newSort[i-1]==i-1){

      
       value= 2    
      }
      if(newSort[i-width]==i-width){
          value=0

      }

  }
  //sentido de movimento horario
  
}
var links = document.getElementsByTagName('img');




for (var i=0; i<links.length; ++i) {

   console.log(links[i].src);

   var partsArr = links[i].src.split('/');
   console.log(partsArr);

   var imageName = partsArr[partsArr.length -1];
   console.log(imageName);


}
 

 
 

