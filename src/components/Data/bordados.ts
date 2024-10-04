import { ProductDetails } from '../interfaces/products';
import Bordado1 from '../../assets/SubSections/Bordados/Bordado1.png';
import Bordado2 from '../../assets/SubSections/Bordados/Bordado2.png';

export const bordados: ProductDetails[] = [
  {
    id: '005',
    image: Bordado1,
    title: 'Bordado 1',
    description: 'Descrição do Bordado 1.',
    price: 39.99,
    more: '/produtos/005',
    stock: 1,
    fullDescription:'Oi',
  },
  {
    id: '006',
    image: Bordado2,
    title: 'Bordado 2',
    description: 'Descrição do Bordado 2.',
    price: 49.99,
    more: '/produtos/006',
    stock:1,
    fullDescription:'Oi',
  },
  
];
