const allLiNavNext = document.querySelectorAll("#navScrollNextShop li");
const allLiNavTop = document.querySelectorAll("#navScrollTopShop li");
const allLike = document.querySelectorAll(".like");
const allNum = document.querySelectorAll(".numberProduct");
allLiNavNext.forEach((item) => {
    item.addEventListener("click", (event) => {
        allLiNavNext.forEach((item) => {
            item.className = "btnNavShopL";
        })
        event.target.className = "btnNavShopP";
    });
})
allLiNavTop.forEach((item) => {
    item.addEventListener("click", (event) => {
        allLiNavTop.forEach((item) => {
            item.className = "btnNavShopL";
        })
        event.target.className = "btnNavShopP";
    });
})
allLike.forEach((item) => {
    item.addEventListener("click", (event) => {
        if(event.target.className == "padd like"){
            event.target.className = "padd like liked";
        }
        else{
            event.target.className = "padd like";
        }
    });
})
