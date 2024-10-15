import { ProductDetails } from '../interfaces/products';
import Bordado1 from '../../assets/SubSections/Bordados/Bordado1.png';
import Bordado2 from '../../assets/SubSections/Bordados/Bordado2.png';

export const bordados: ProductDetails[] = [
  {
    id: '003',
    image: Bordado1,
    title: 'Bordado 1',
    description: 'Descrição do Bordado 1.',
    price: 39.99,
    more: '/produtos/003',
    stock: 1,
    fullDescription:'Oi',
    quantity: 1,
    
  },
  {
    id: '004',
    image: Bordado2,
    title: 'Bordado 2',
    description: 'Descrição do Bordado 2.',
    price: 49.99,
    more: '/produtos/004',
    stock:1,
    fullDescription:'Oi',
    quantity: 1,
  },
];
