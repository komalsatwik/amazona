import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:"admin1",
            email:"admin1@gmail.com",
            password: bcrypt.hashSync('admin1'),
            isAdmin:true
        },
        {
            name:"user1",
            email:"user1@gmail.com",
            password: bcrypt.hashSync('user1'),
            isAdmin:false,
        },
    ],
    products: [
        {
           // _id : '1',
            name: "Nike Slim shirt",
            slug: "nike-slim-shirt",
            category: "Shirts",
            image: '/images/p1.jpg',
            price:120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {   
            //_id:'2',
            name: "Puma Slim shirt",
            slug: "puma-slim-shirt",
            category: "Shirts",
            image: '/images/p2.jpg',
            price:120,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            //_id:'3',
            name: "Nike Slim Pant",
            slug: "nike-slim-pant",
            category: "Shirts",
            image: '/images/p3.jpg',
            price:120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            //_id:'4',
            name: "Puma Slim pant",
            slug: "puma-slim-pant",
            category: "Pants",
            image: '/images/p4.jpg',
            price:120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
    ],
}

export default data;