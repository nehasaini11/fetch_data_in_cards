fetch("https://dummyjson.com/products").then((data)=>{
    //console.log(data);
    return data.json();
}).then((completeData)=>{
    //console.log(completeData.products[0].title);
    let data2 = "";
    completeData.products.map((values)=>{
        data2 += `<div class="card">
        <img class="images" src=${values.images[0]} alt="image">
        <div class="container">
            <h4 class="title">${values.title}</h4>
            <p class="description">${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price"> Rs. ${values.price}</p>
        </div>
    </div>`;
    });
    document.getElementById("cards").innerHTML = data2;
}).catch((err)=>{
    console.log(err);
})