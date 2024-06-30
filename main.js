let product = [
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
    {
        id: 1,
        name: "laptop",
        gambar: "https://id-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08227569_10.png",
        price: "IDR 5.900.000,00",
        model: "hp"
    },
];



let big = document.querySelector(".container")
big.style.width = "100%"
big.style.height = "100vh"
big.style.gap = "20px"
big.style.display = "flex"
big.style.alignItems = "center"
big.style.flexDirection = "column"


product.forEach((p) => {

    let image = document.createElement("img")
    image.src = p.gambar
    image.style.width = "300px"
    image.style.height = "300px"
    let nama = document.createElement("h1")
    nama.textContent = p.name
    let harga = document.createElement("h2")
    harga.textContent = p.price


    let beli = document.createElement("button")
    beli.textContent = "beli sekarang"
    beli.addEventListener("click", () => {
        confirm(`apakah anda yakin ingin membeli?`);
    })

    let like = document.createElement("button")
    like.textContent = "like"
    like.addEventListener("click", () => {
        alert(`anda menyukai product ini`);
    })

    let coment = document.createElement("button")
    coment.textContent = "coment"
    coment.addEventListener("click", () => {
        prompt(`apa pendapat anda tentang product ini`);
    })

    
    big.appendChild(image)
    big.appendChild(nama)
    big.appendChild(harga)
    big.appendChild(beli) 
    big.appendChild(like) 
    big.appendChild(coment) 
})

