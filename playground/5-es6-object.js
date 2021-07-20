const name = 'ss'
const age = 12

const user = {
    name,
    age,
    location: 'Da Nang'
}

console.log(user)

const product = {
    label: 'Book',
    stock: 123,
}

const transaction = (type, {label, stock}) => {
    console.log(type)
    console.log(label, stock)
}

transaction('Buy', product)
