document.querySelectorAll(".heart").forEach((heart) => {
    // 1. Elementlər üzərində keçid edərək obyektə məlumatları toplamaq
    const card = heart.parentElement.parentElement;
    const imgSrc = card.children[0].children[1].src;
    const title = card.children[1].children[0].textContent;
    const text = card.children[1].children[1].textContent;
    const price = card.children[1].children[2].textContent;
    
    const product1 = {
        image: imgSrc,
        title,
        description: text,
        price,
    };
    console.log("(1) Element traversal method:", product1);

    // 2. closest() metodundan istifadə edərək obyektə məlumatları toplamaq
    const cardClosest = heart.closest(".card");
    const imgSrc2 = cardClosest.querySelector(".image img").src;
    const title2 = cardClosest.querySelector(".cardTitle").textContent;
    const text2 = cardClosest.querySelector(".cardText").textContent;
    const price2 = cardClosest.querySelector(".cardPrice").textContent;
    
    const product2 = {
        image: imgSrc2,
        title: title2,
        description: text2,
        price: price2,
    };
    console.log("(2) closest() method:", product2);
});

// Task 2. stilleri card elementlerine verin.
const card = document.querySelector(".card");
    // Card stili
    card.style.margin = "50px";
    card.style.width = "300px";
    card.style.border = "1px solid black";
    card.style.padding = "10px";
  
    // Heart stili
    const heart = card.querySelector(".heart");
    heart.style.display = "inline-flex";
    heart.style.alignItems = "center";
    heart.style.justifyContent = "center";
    heart.style.width = "30px";
    heart.style.height = "30px";
    heart.style.borderRadius = "50%";
    heart.style.backgroundColor = "silver";
    heart.style.position = "absolute";
    heart.style.top = "15px";
    heart.style.right = "15px";
    heart.style.cursor = "pointer";
  
    // Image stili
    const image = card.querySelector(".image");
    image.style.width = "100%";
    image.style.height = "300px";
    image.style.position = "relative";
    
    const img = image.querySelector("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.borderRadius = "10px";
  
    // CardContent stili
    const cardContent = card.querySelector(".cardContent");
    cardContent.style.display = "flex";
    cardContent.style.flexDirection = "column";
    cardContent.style.alignItems = "center";
    cardContent.style.gap = "10px";
    cardContent.style.marginTop = "20px";
    cardContent.style.color = "burlywood";
  
    // CardPrice stili
    const cardPrice = card.querySelector(".cardPrice");
    cardPrice.style.display = "inline-block";
    cardPrice.style.padding = "5px";
    cardPrice.style.borderRadius = "5px";
    cardPrice.style.backgroundColor = "rgb(95, 94, 91)";
  
    // ShopBtn stili
    const shopBtn = card.querySelector(".shopBtn");
    shopBtn.style.width = "100%";
    shopBtn.style.padding = "10px";
    shopBtn.style.backgroundColor = "skyblue";
    shopBtn.style.border = "none";
    shopBtn.style.cursor = "pointer";
    shopBtn.style.color = "white";
    shopBtn.style.textTransform = "uppercase";
    shopBtn.style.borderRadius = "5px";
    shopBtn.style.fontWeight = "bold";

 console.log(card);
  

// Task 3. Card elementlerini tek-tek secib contentlerini deyisin. Content serbestdir Her kes ucun.
const cards = document.querySelector(".card");

    const cardTitle = cards.querySelector(".cardTitle");
    const cardText = cards.querySelector(".cardText");
    const cardPricee = cards.querySelector(".cardPrice");
    const shopBtnn = cards.querySelector(".shopBtn");
  
    cardTitle.textContent = `Ayaqqabı`;
    cardText.textContent = `Bu,ayaqqabının təsviridir`;
    cardPricee.textContent = `100 Azn`; 
    shopBtnn.textContent = `Səbətə at`;

console.log(cards);
  