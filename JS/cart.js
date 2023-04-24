let cart = JSON.parse(localStorage.getItem("cartItem")) || [];


console.log(cart)


// if(cart.length>0){
//     displayCart(cart) ;
// }else{
//     document.getElementById("#cardM").textContent="No items present in the cart"
// }


function displayCart(cart) {


    cart.map(function (element, index) {
        let card1 = document.createElement("div");
        card1.setAttribute("class", "card p-4");


        //   all element will be inside row1//

        let row1 = document.createElement("div");
        row1.setAttribute("class", "row");

        let div1 = document.createElement("div")
        div1.setAttribute("class", "col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img");


        let imgInDiv1 = document.createElement("img");
        imgInDiv1.setAttribute("src", element.image_url);
        imgInDiv1.setAttribute("class", "img-fluid");



        let div2 = document.createElement("div");
        div2.setAttribute("class", "col-md-7 col-11 mx-auto px-4 mt-2");

        let row2 = document.createElement("div");
        row2.setAttribute("class", "row");

        let div3 = document.createElement("div");
        div3.setAttribute("class", "col-6 card-title");

        // div 3and div4 inside row2 





        let h1InDiv3 = document.createElement("h1");
        h1InDiv3.setAttribute("class", "mb-4 product_name");
        h1InDiv3.textContent = element.name;

        let p1InDiv3 = document.createElement("p");
        p1InDiv3.setAttribute("class", "mb-2");
        p1InDiv3.textContent = element.about;

        // let p2InDiv3 = document.createElement("p");
        // p2InDiv3.setAttribute("class", "mb-2");
        // p2InDiv3.textContent = element.about;


        let p3InDiv3 = document.createElement("p");
        p3InDiv3.setAttribute("class", "mb-2");
        p3InDiv3.textContent = element.description;



        let div4 = document.createElement("div");
        div4.setAttribute("class", "col-6");



        // all li will be appendend into ul1 
        let ul1 = document.createElement("ul");
        ul1.setAttribute("class", "pagination justify-content-end set_quantity");



        let li1 = document.createElement("li");
        li1.setAttribute("class", "page-item");

        let decrBtn = document.createElement("button");
        decrBtn.setAttribute("class", "page-link ");

        decrBtn.addEventListener("click", function () {
            decreaseNumber(('textbox', 'itemval'));
        })


        let i1 = document.createElement("i");
        i1.setAttribute("class", "fas fa-minus");







        let li2 = document.createElement("li");
        li2.setAttribute("class", "page-item");

        let inp1 = document.createElement("input");
        inp1.setAttribute("type", "text");
        inp1.setAttribute("name", "");
        inp1.setAttribute("class", "page-link");
        inp1.setAttribute("value", "0");
        inp1.setAttribute("id", "textbox");




        let li3 = document.createElement("li");
        li3.setAttribute("class", "page-item");

        let incrBtn = document.createElement("button");
        incrBtn.setAttribute("class", "page-link ");

        incrBtn.addEventListener("click", function () {
            increaseNumber(('textbox', 'itemval'));
        })

        // this i2  will be  insde incrBtn ;
        let i2 = document.createElement("i");
        i2.setAttribute("class", "fas fa-plus");








        //  row2 and row3 will be appenend in div2 


        let row3 = document.createElement("div");
        row3.setAttribute("class", "row");

        let div5 = document.createElement("div");
        div5.setAttribute("class", "col-8 d-flex justify-content-between remove_wish");

        let p1InDiv5 = document.createElement("p");
        let i4 = document.createElement("i");
        i4.setAttribute("class", "fas fa-trash-alt");

        i4.addEventListener("click", function () {
            dltItem(element);
        })
        i4.setAttribute("onClick", "window.location.reload()")

        p1InDiv5.textContent = "REMOVE";


        let p2InDiv5 = document.createElement("p");

        let i5 = document.createElement("i");
        i5.setAttribute("class", "fas fa-heart");

        p2InDiv5.textContent = "ADD TO WISHLIST ";

        i5.addEventListener("click", function () {
            addToWishlist(element);
        })




        let div6 = document.createElement("div");
        div6.setAttribute("class", "col-4 d-flex justify-content-end price_money")


        let h3InDiv6 = document.createElement("h3");

        let spanInh3InDiv6 = document.createElement("span");
        spanInh3InDiv6.setAttribute("id", "itemval");
        spanInh3InDiv6.textContent = "$ "+element.price;


        div1.append(imgInDiv1);

        row1.append(div1, div2);
        div3.append(h1InDiv3, p1InDiv3, p3InDiv3);//div3 work done
        // div3.append(h1InDiv3, p1InDiv3, p2InDiv3, p3InDiv3);//div3 work done


        row2.append(div3, div4); //row2 done 

        div4.append(ul1); // div4 done
        decrBtn.append(i1);

        li1.append(decrBtn);
        li2.append(inp1);
        li3.append(incrBtn);

        incrBtn.append(i2);

        ul1.append(li1, li2, li3);
        p1InDiv5.append(i4);

        p2InDiv5.append(i5);
        div5.append(p1InDiv5, p2InDiv5)
        h3InDiv6.append(spanInh3InDiv6)
        div6.append(h3InDiv6);


        row3.append(div5, div6);

        div2.append(row2, row3);

        row1.append(div1, div2);
        //  row1.append( imgInDiv1,div2) ;





        let chilldDiv = document.createElement("div");

        chilldDiv.setAttribute("class", "card p-4");

        chilldDiv.append(row1);

        document.querySelector("#cardM").append(chilldDiv)

    })
}


displayCart(cart);
sumPrice(cart);

function dltItem(product) {
    cart.splice(product, 1);
    localStorage.setItem("cartItem", JSON.stringify(cart));
    displayCart();
    // localStorage.removeItem("")
}


let wishListLtem = JSON.parse(localStorage.getItem("wishListLtem")) || [];

function addToWishlist(product) {
    console.log(product);
    wishListLtem.push(product)
    localStorage.setItem("wishListItem", JSON.stringify(wishListLtem))
}


function sumPrice(cart){

    var sum = cart.reduce(function(acc, element){
        return acc + Number(element.price);
    }, 0);

   document.getElementById("product_total_amt").textContent = sum;
   document.getElementById("total_cart_amt").textContent = 50 + sum;
//    console.log(sum);
}

function btnDown(){

    let num = document.getElementById("textbox").value ;

    if(num > 0){
        num = num-1;
        document.getElementById("textbox").value  =num;
    }
  
    console.log(i)
}
var num =0;
function btnInc(){

   num = document.getElementById("textbox").value ;
    num = Number(num)+1;
    document.getElementById("textbox").value  =num;
}
