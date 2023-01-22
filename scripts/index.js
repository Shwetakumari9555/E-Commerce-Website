// let data=[
//     {
//       "img":  "Images\Men.webp",
//       "name": "Mens"
//     },
//     {
//         "img":  "Images\women.webp",
//         "name": "Women"
//       },
//       {
//         "img":  "Images\kids.webp",
//         "name": "Kids"
//       },
//       {
//         "img":  "Images\footwear.webp",
//         "name": "Footwear"
//       },
//       {
//         "img":  "Images\accessories.webp",
//         "name": "Accessories"
//       }
    
// ];

let alist = document.querySelectorAll("#menu-bar-men li");

alist.forEach(el => {
  el.href='products.html';
});