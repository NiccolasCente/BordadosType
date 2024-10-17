import { ProductDetails } from '../interfaces/products';
import Toalhas1 from '../../assets/SubSections/Toalhas/Toalhas1.png';
import Toalhas2 from '../../assets/SubSections/Toalhas/Toalhas2.png';

export const toalhas: ProductDetails[] = [
  {
    id: '005',
    image: Toalhas1,
    title: 'Banho do Príncipe',
    description: 'Uma linda toalha de banho com um ursinho nele.',
    price: 25.00,
    more: '/produtos/005',
    stock:1,
    fullDescription:"oi",
    favoriteIcon: 'fa-heart',
    cartIcon: 'fa-cart-plus',
    quantity: 1,
  },
  {
    id: '006',
    image: Toalhas2,
    title: 'Hora do Banho',
    description: 'Descrição da Toalha 2.',
    price: 25.00,
    more: '/produtos/006',
    stock:1,
    fullDescription:"oi",
    favoriteIcon: 'fa-heart',
    cartIcon: 'fa-cart-plus',
    quantity: 1,
  },
];
