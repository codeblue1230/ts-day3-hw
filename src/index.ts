import { v4 as uuidv4 } from "uuid"

// User and Item Type

type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

type User = {
    id: string,
    name: string,
    age: number,
    cart: Item[]
}

// Function to create a User

function createUser(name:string, age:number):User {
    let aUser:User = {
        name: name,
        id: uuidv4(),
        age: age,
        cart: []
    }
    return aUser
}

// Function to create an Item

function createItem(name:string, price:number, description:string):Item {
    let anItem:Item = {
        name: name,
        id: uuidv4(),
        price: price,
        description: description
    }
    return anItem
}

// Function to add an item to a user's cart as well as a variable representing an item and a user

function addToCart(oneUser:User, oneItem:Item):User {
    oneUser.cart.push(oneItem)
    return oneUser
}

// Function to remove from cart

function removeFromCart(item:Item, user:User):void {
    const newList: Item[] = user.cart.filter((x) => {
        return x.id !== item.id
    })
    user.cart = newList
}

// Function to remove quantity from cart

let nickUser:User = {
    name: "Nick",
    id: uuidv4(),
    age: 26,
    cart: [
        {
            name: "cheese",
            id: uuidv4(),
            price: 5,
            description: "Mozzarella"
        },
        {
            name: "eggs",
            id: uuidv4(),
            price: 4,
            description: "A dozen eggs"
        }, 
        {
            name: "cheese",
            id: uuidv4(),
            price: 5,
            description: "Mozzarella"
        },
        {
            name: "sausage",
            id: uuidv4(),
            price: 5,
            description: "some links"
        }
    ]
}

function removeQuantityFromCart(anItem:Item, oneUser:User, quantity:number):object {
    for (let i of oneUser.cart) {
        if (i.name === anItem.name && quantity > 0) {
            quantity - 1
            oneUser.cart.splice(oneUser.cart.indexOf(i), 1)
        }
    }
    return oneUser
}

console.log(removeQuantityFromCart({
    name: "cheese",
    id: uuidv4(),
    price: 5,
    description: "Mozzarella"
}, nickUser, 2))

// Function to get total of cart

function cartTotal(aUser:User):number {
    let total = 0
    for (let i of aUser.cart) {
        total += i.price
    }
    return total
}

// Function to print items in cart

function printCart(aUser:User):void {
    let itemList = []
    for (let item of aUser.cart) {
        itemList.push(item.name)
    }
    console.log(itemList)
}


// Emulate a front end user

// Create a User
const marc = createUser("Marc", 24)
console.log(marc)

// Create 3 items to add to the user's cart
const egg = createItem("eggs", 8, "2 dozen eggs")
const ham = createItem("ham", 9, "1 pound of ham")
const cheese = createItem("cheese", 8, "1/2 pound of swiss")
const cracker = createItem("crackers", 3, "box of crackers")

// Add item A to the user's cart
addToCart(marc, egg)

// Print contents of user's cart
printCart(marc)

// Print total of user's cart
console.log(cartTotal(marc))

// Add 3 items to the user's cart
addToCart(marc, ham)
addToCart(marc, cheese)
addToCart(marc, cracker)

// Print the contents of the user's cart
printCart(marc)

// Print total of user's cart
console.log(cartTotal(marc))

// Use remove (not removeByQuantity) to remove all items from cart
removeFromCart(cracker, marc)
removeFromCart(cheese, marc)
removeFromCart(ham, marc)
removeFromCart(egg, marc)

// Print the contents of the user's cart
printCart(marc)

// Print total of user's cart
console.log(cartTotal(marc))