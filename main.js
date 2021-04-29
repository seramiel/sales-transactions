

//GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
//DIVS
var phonesDIV = document.getElementById("phonesDIV");
var laptopsDIV = document.getElementById("laptopsDIV");
var accessoriesDIV = document.getElementById("accessoriesDIV");
//INFORMATION
var PHONES=[
  {name:'Iphone6' ,price:15000},
  {name:'Samsung' ,price:30000},
  {name:'Oppo' ,price:10000},
  {name:'Vivo' ,price:10000},
  {name:'RealMe' ,price:15000},
  {name:'Iphone12' ,price:67000},
  ];
var LAPTOPS=[
  {name:'Acer' ,price:32000},
  {name:'HP' ,price:36000},
  {name:'Macbook' ,price:50000},
  ];
var ACCESSORIES=[
  {name:'Iphone7 Case' ,price:150},
  {name:'Iphone5 Case' ,price:150},
  {name:'IphoneXS Case' ,price:150},
];
//HTML
function HTMLphonesProduct(con){
    let URL = `img/phones/phones${con}.jpeg`;
    let btn = `btnPhones${con}`;
    return`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" styles="height:16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">Name: ${PHONES[con-1].name}</p>
                    <p class="card-text">Price: ${PHONES[con-1].price}</p>
                    <p class="d-flex justify-content-between
                    align-items-center">
                        <div class="btn-group>
                            <button type="button" onclick="cart2('${PHONES[con-1]
                            .name}','${PHONES[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${PHONES[con-1]
                            .name}','${PHONES[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to cart</button>                           
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLlaptopsProduct(con){
    let URL = `img/laptops/laptops${con}.jpeg`;
    let btn = `btnLaptops${con}`;
    return`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" styles="height:16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">Name: ${LAPTOPS[con-1].name}</p>
                    <p class="card-text">Price: ${LAPTOPS[con-1].price}</p>
                    <p class="d-flex justify-content-between
                    align-items-center">
                        <div class="btn-group>
                        <button type="button" onclick="cart2('${LAPTOPS[con-1]
                            .name}','${LAPTOPS[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${LAPTOPS[con-1]
                            .name}','${LAPTOPS[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to cart</button>                           
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLaccessoriesProduct(con){
    let URL = `img/accessories/accessories${con}.jpeg`;
    let btn = `btnAccessories${con}`;
    return`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" styles="height:16rem;" src="${URL}"
                alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">Name: ${ACCESSORIES[con-1].name}</p>
                    <p class="card-text">Price: ${ACCESSORIES[con-1].price}</p>
                    <p class="d-flex justify-content-between
                    align-items-center">
                        <div class="btn-group>
                            <button type="button" onclick="cart2('${ACCESSORIES[con-1]
                            .name}','${ACCESSORIES[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a href="cart.html" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${ACCESSORIES[con-1]
                            .name}','${ACCESSORIES[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to cart</button>                           
                        </div>
                        <small class="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
//ANIMATION
function animation(){
    const toast=Swal.fire({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000,
        type:'success',
        title:'Added to Shopping Cart'
    })
}
//CART FUNCTION

function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if (storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else{
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
//RENDER
function render(){
    for (let index = 1; index <= 6; index++){
        phonesDIV.innerHTML+=`${HTMLphonesProduct(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        laptopsDIV.innerHTML+=`${HTMLlaptopsProduct(index)}`;
        accessoriesDIV.innerHTML+=`${HTMLaccessoriesProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null){
        
    } else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
}