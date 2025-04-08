
// sekilde verilen card-ı js-de interactive elements istifade ederek hazirlamaq(stiller js-de verilecek).
// card konteyneri
const card = document.createElement("div");
card.style.width = "360px";
card.style.border = "1px solid #ddd";
card.style.borderRadius = "10px";
card.style.overflow = "hidden";
card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
card.style.fontFamily = "Arial, sans-serif";
card.style.margin = "20px auto";
card.style.backgroundColor = "#fff";

// Şəkil
const image = document.createElement("img");
image.src = "https://picsum.photos/360/200";
image.alt = "House";
image.style.width = "100%";
image.style.height = "200px";
image.style.objectFit = "cover";
card.appendChild(image);

// Məzmun konteyneri
const content = document.createElement("div");
content.style.padding = "16px";

const title = document.createElement("div");
title.textContent = "DETACHED HOUSE • 5Y OLD";
title.style.fontWeight = "bold";
title.style.fontSize = "14px";
title.style.color = "#555";
content.appendChild(title);

const price = document.createElement("div");
price.textContent = "$750,000";
price.style.fontSize = "24px";
price.style.fontWeight = "bold";
price.style.margin = "8px 0";
content.appendChild(price);

const address = document.createElement("div");
address.textContent = "742 Evergreen Terrace";
address.style.color = "#777";
address.style.marginBottom = "12px";
content.appendChild(address);

// bedrooms
const details = document.createElement("div");
details.style.display = "flex";
details.style.justifyContent = "space-between";
details.style.marginBottom = "16px";

const bedrooms = document.createElement("div");
bedrooms.textContent = "🛏 3 Bedrooms";
details.appendChild(bedrooms);

const bathrooms = document.createElement("div");
bathrooms.textContent = "🛁 2 Bathrooms";
details.appendChild(bathrooms);

content.appendChild(details);

// contact hissə
const realtor = document.createElement("div");
realtor.style.display = "flex";
realtor.style.alignItems = "center";
realtor.style.borderTop = "1px solid #eee";
realtor.style.paddingTop = "12px";

const avatar = document.createElement("img");
avatar.src = "https://randomuser.me/api/portraits/women/44.jpg";
avatar.style.borderRadius = "50%";
avatar.style.marginRight = "12px";
avatar.style.width = "40px";
avatar.style.height = "40px";

const realtorInfo = document.createElement("div");

const name = document.createElement("div");
name.textContent = "Tiffany Heffner";
name.style.fontWeight = "bold";

const phone = document.createElement("div");
phone.textContent = "(555) 555-4321";
phone.style.fontSize = "14px";
phone.style.color = "#666";

realtorInfo.appendChild(name);
realtorInfo.appendChild(phone);

realtor.appendChild(avatar);
realtor.appendChild(realtorInfo);

content.appendChild(realtor);
card.appendChild(content);

// nəticə
document.getElementById("app").appendChild(card);
