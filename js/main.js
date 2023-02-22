fetch('https://fakestoreapi.com/products')
    .then((resp) => resp.json())
    .then(data => {
        data.forEach(cart => {
            new Cart(
                cart.image,
                cart.title,
                cart.description,
                cart.price,
                '.carts'
            ).render()

        }),
        data.forEach(btn => {
            new Button(
                btn.category,
                '.header'
            ).render()

        })
    })



// .then(data => console.log(data))



class Button {
    constructor(category, parentSelector) {
        this.category = category;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        const btn = document.createElement('button');
        btn.classList.add('button-menu');

        btn.innerHTML = `${this.category}`

        this.parent.append(btn);
    }

}

class Cart {
    constructor(image, title, description, price, parentSelector) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('cart');

        element.innerHTML = `
            <img class="cart__img" src=${this.image} alt="">
            <div class="cart__titile">${this.title}</div>
            <div class="cart__descr">${this.description}</div>
            <div class="cart__price">${this.price}</div>
            <div class="cart__bottom">
                <div class="button cart__buy">Byu</div>
                <div class="button cart__card">Add card</div>
            </div>
            `
        this.parent.append(element);
    }
} 