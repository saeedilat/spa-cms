const datas = [
    { name: 'Jan', sale: 122_000 },
    { name: 'Feb', sale: 99_000 },
    { name: 'Mar', sale: 12_000 },
    { name: 'Apr', sale: 85_000 },
    { name: 'May', sale: 75_000 },
    { name: 'Jun', sale: 65_000 },
    { name: 'Jul', sale: 55_000 },
    { name: 'Agu', sale: 59_000 },
    { name: 'Sep', sale: 95_000 },
    { name: 'Oct', sale: 22_000 },
    { name: 'Nov', sale: 32_000 },
    { name: 'Des', sale: 46_000 },
]
const members = [
    {
        id: 1,
        username: 'saeed ilatm',
        title: 'frontend',
        img: 'images/2.jpg'
    },  {
        id: 2,
        username: 'reza moradi',
        title: 'backend',
        img: 'images/1.jpg'
    },  {
        id: 3,
        username: 'zahra dehghn',
        title: 'mobile',
        img: 'images/3.jpg'
    },  {
        id: 4,
        username: 'mahya bano',
        title: 'hacker',
        img: 'images/4.jpg'
    }
]

const transaction =[
    {id:1,customer:'saeed ilat',date:'2 may 2024',amout:'$199.15',status:'Approved',img:'images/2.jpg'},
    {id:2,customer:'mohammad khan',date:'23 jun 2024',amout:'$19.15',status:'Declined',img:'images/4.jpg'},
    {id:3,customer:'naser atayi',date:'14 mar 2024',amout:'$25.45',status:'Pending',img:'images/3.jpg'},
    {id:4,customer:'hasan norali',date:'25 sep 2025',amout:'$215.35',status:'Approved',img:'images/5.jpg'},
    {id:5,customer:'hamid behyar',date:'13 des 2023',amout:'$113.15',status:'Declined',img:'images/1.jpg'},
]

const userRows = [
    {id:1,username:'saeed ilat',transaction:'$139.52',avatar:'images/2.jpg',status:'active',email:'saeed@gmail.com'},
    {id:2,username:'amin rad',transaction:'$129.13',avatar:'images/1.jpg',status:'non-active',email:'amin@gmail.com'},
    {id:3,username:'mohammad naseeri',transaction:'$119.12',avatar:'images/3.jpg',status:'active',email:'mohammad@gmail.com'},
    {id:4,username:'sina parastesh',transaction:'$109',avatar:'images/4.jpg',status:'non-active',email:'sina@gmail.com'},
    {id:5,username:'nader esmaeili',transaction:'$113',avatar:'images/5.jpg',status:'active',email:'nader@gmail.com'},
]

const products =[
    {id:1,
        title:'Asus',
        avatar:'images/asus.webp',
        price:890
    },  {id:2,
        title:'Dell',
        avatar:'images/dell.webp',
        price:650
    },  {id:3,
        title:'Lenovo',
        avatar:'images/lenovo.webp',
        price:700
    },  {id:4,
        title:'Apple',
        avatar:'images/apple.webp',
        price:960
    },
]
const productsData =[
    {sale:4000,name:'Jan'},
    {sale:2000,name:'Feb'},
    {sale:5000,name:'Mar'},
]

export { datas ,members,transaction,userRows,products,productsData} 