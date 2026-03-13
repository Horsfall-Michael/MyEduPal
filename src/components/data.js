import book_image from "../assets/images/Frame 19.png";
import chemistry_group_image from "../assets/images/Frame 69.png";
import engineering_group_image from "../assets/images/Frame 69 (1).png"
import law_group_image from "../assets/images/Frame 69 (2).png";


export const books = [
  {
    id: 1,
    name: "Engineering 101",
    author: "Ike Jumbo",
    price: 3500,
    actualPrice: 12000,
    location: "UNN",
    seller: "Adeze Bryson",
    img: book_image,
    condition: "Fairly Used",
  },
  {
    id: 2,
    name: "Maths 101",
    author: "Kelvin Achugo",
    price: 3000,
    actualPrice: 12000,
    location: "ABU",
    seller: "Usman Zachari",
    img: book_image,
    condition: "Fairly Used",
  },
  {
    id: 3,
    name: "English Structure",
    author: "Smith Elizabeth",
    price: 3500,
    actualPrice: 12000,
    location: "LASU",
    seller: "Adeze Okafor",
    img: book_image,
    condition: "Fairly Used",
  },
  {
    id: 4,
    name: "Database and Algorithm",
    author: "Raymond Dogood",
    price: 3500,
    actualPrice: 12000,
    location: "LASU Tech",
    seller: "Benson Okafor",
    img: book_image,
    condition: "Fairly Used",
  },
];



export const groups =[
  {
    id:1,
    image: chemistry_group_image ,
    name: "CHM 101 Study Squad",
    subject:"General Chemistry",
    members: 24,
    state:"Active",
    lastSeen:2
  },
  {
    id:2,
    image: engineering_group_image ,
    name: "Engineerin Math Warriors",
    subject:"Math 201",
    members: 19,
    state:"Active",
    lastSeen:4
  },
  {
    id:3,
    image: law_group_image,
    name: "Law 200 Level Gang",
    subject:"Constituntional Law",
    members: 31,
    state:"Active",
    lastSeen:10
  }
];

