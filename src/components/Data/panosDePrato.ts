import { ProductDetails } from '../interfaces/products';
import Pano1 from '../../assets/SubSections/Panos/Pano_001.png';
import Pano2 from '../../assets/SubSections/Panos/Pano_002.png';

export const panosDePrato: ProductDetails[] = [
  {
    id: '001',
    image: Pano1,
    title: 'Dias da Semana',
    description: 'Vários panos de prato com os dias da semana.',
    price: 19.99,
    more: '/produtos/001', 
    stock: 10,
    fullDescription: 'Uma descrição completa e detalhada do produto.',
    favoriteIcon: 'fa-heart', 
    cartIcon: 'fa-cart-plus',  
    quantity: 10,
  },
  {
    id: '002',
    image: Pano2,
    title: 'Feliz Natal',
    description: 'Pano de prato com uma mensagem de Natal.',
    price: 10.00,
    more: '/produtos/002', 
    stock: 5,
    fullDescription: 'Outra descrição completa e detalhada.',
    quantity: 5,
  },
];
