let wishList =JSON.parse(localStorage.getItem("wishListItem"))||[] ;



if(wishList.length>0){
    displayWishList(wishList) ;
}else{
    window.location.href="./empty.html" ;

}





function displayWishList(wishList){
    // event.preventDefault();

    
    wishList.map(function(element, index){
        let card1=document.createElement("div") ;
          card1.setAttribute("class" ,"card p-4") ;

          let row1 =document.createElement("div") ;
           row1.setAttribute("class" ,"row") ;

           let div1 =document.createElement("div")
          div1.setAttribute("class" , "col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img" ) ;


                let imgInDiv1 =document.createElement("img") ;
                  imgInDiv1.setAttribute("src" ,element.image_url) ;
                  imgInDiv1.setAttribute("class" , "img-fluid") ;

                  
                  
                  let div2 =document.createElement("div") ;
                  div2.setAttribute("class" ,"col-md-7 col-11 mx-auto px-4 mt-2") ;
                  
                  let row2 =document.createElement("div") ;
                  row2.setAttribute("class" ,"row") ;
                  
                  let div3 =document.createElement("div") ;
                  div3.setAttribute("class" ,"col-6 card-title") ;
        
                  // div 3and div4 inside row2 
        
        
                  
                  
                  
                  let h1InDiv3 =document.createElement("h1") ;
                  h1InDiv3.setAttribute("class" ,"mb-4 product_name") ;
                  h1InDiv3.textContent=element.name ;
                  
                  let  p1InDiv3 =document.createElement("p") ;
                  p1InDiv3.setAttribute("class" ,"mb-2") ;
                  p1InDiv3.textContent=element.about ;
                  
                  let  p2InDiv3 =document.createElement("p") ;
                  p2InDiv3.setAttribute("class" ,"mb-2") ;
        p2InDiv3.textContent=element.description ;
        
        
        let  p3InDiv3 =document.createElement("p") ;
        p3InDiv3.setAttribute("class" ,"mb-2") ;
        p3InDiv3.textContent=element.size;
        
        
        
        let div4 =document.createElement("div") ;
        div4.setAttribute("class" ,"col-6") ;
            
        
        let row3 =document.createElement("div") ;
        row3.setAttribute("class" ,"row") ;
        
        let div5=document.createElement("div") ;
        div5.setAttribute("class" ,"col-8 d-flex justify-content-between remove_wish") ;
        
        let p1InDiv5 =document.createElement("p") ;
        let i4 =document.createElement("i") ;
        i4.setAttribute("class" ,"fas fa-trash-alt");

        i4.addEventListener("click" ,function(){
            dltItem(element) ;
        })
        i4.setAttribute("onClick" ,"window.location.reload()")
        
        p1InDiv5.textContent="REMOVE ITEM" ;
        

        
        let div6 =document.createElement("div") ;
        div6.setAttribute("class" ,"col-4 d-flex justify-content-end price_money")
        
        
        let h3InDiv6 =document.createElement("h3") ;
        
        let spanInh3InDiv6 =document.createElement("span") ;
        spanInh3InDiv6.setAttribute("id" ,"itemval") ;
        spanInh3InDiv6.textContent=element.price ;
        
   
        
        div1.append(imgInDiv1) ;
        
        row1.append(div1,div2) ;
        div3.append(h1InDiv3 ,p1InDiv3,p2InDiv3,p3InDiv3) ;//div3 work done
        
        
     row2.append(div3 ) ; //row2 done 
        
         p1InDiv5.append(i4) ;
         
        //  p2InDiv5.append(i5) ;
         div5.append(p1InDiv5 )
        //  div5.append(p1InDiv5 ,p2InDiv5)
         h3InDiv6.append(spanInh3InDiv6)
         div6.append(h3InDiv6) ;


         row3.append(div5,div6) ;

         div2.append(row2,row3) ;

         row1.append(div1,div2) ;
       

         let chilldDiv =document.createElement("div") ;

         chilldDiv.setAttribute("class" ,"card p-4") ;

         chilldDiv.append(row1) ;

        document.querySelector("#cardM").append(chilldDiv)

    })
}


// displayWishList(wishList) ;

function dltItem(product){
    // event.preventDefault();
    wishList.splice(product,1)  ;
    localStorage.setItem("wishListItem" ,JSON.stringify(wishList)) ;
    displayCart() ;
    // localStorage.removeItem("")
    }
































