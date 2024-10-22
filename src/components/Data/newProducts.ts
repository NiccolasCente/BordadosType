import { ProductDetails } from "../interfaces/products";
import Pano3 from "../../assets/Sections/NewProducts/mestre_churrasco.png";

export const newProducts: ProductDetails[] = [
    {
        id: "007",
        image: Pano3,
        title: "Mestre do Churrasco",
        description: "Um lindo pano de prato para você usar em um churrasco.",
        price: 30.00,
        more: "/produtos/007",
        stock:1,
        fullDescription:"Um pano de prato você usar em um churrasco",
        favoriteIcon: "fa-heart",
        cartIcon: "fa-cart-plus",
        quantity:1,
    },
];