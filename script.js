let fake =fetch('https://fakestoreapi.com/products')

.then(function response(event){
   return event.json()

})
.then(function res(api){
    console.log(api)

    let box= document.querySelector('.row')
   
    for(let i=0;i<api.length; i++ )
    {
    let column = document.createElement('div')
    column.className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2'

     let card = document.createElement('div')
     card.className='card'
     

     let image= document.createElement('img')
     image.className='card-img-top'
     image.src=`${api[i].image}`
     image.style='height:200px'

     let cardBody= document.createElement('div')
     cardBody.className='card-body'
    


     let cardTitle= document.createElement('h5')
     cardTitle.className='card-title'
    cardTitle.innerHTML=`${api[i].title}`

     let cardText= document.createElement('p')
     cardText.className='card-text '
     cardText.innerHTML=`${api[i].description}`
    

     let price = document.createElement('p')
     price.className='card-text text-success '
     price.innerHTML=`Price:$${api[i].price}`

     let button = document.createElement('a')
     button.className='btn btn-primary'
     button.innerHTML='Buy'


     cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(price)
        cardBody.appendChild(button)

    
     card.appendChild(image)
     card.appendChild(cardBody)
     column.appendChild(card)
     box.appendChild(column)
     


    }
   

})