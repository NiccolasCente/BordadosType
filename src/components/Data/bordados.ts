import { ProductDetails } from '../interfaces/products';
import Bordado1 from '../../assets/SubSections/Bordados/Bordado1.png';
import Bordado2 from '../../assets/SubSections/Bordados/Bordado2.png';

export const bordados: ProductDetails[] = [
  {
    id: '003',
    image: Bordado1,
    title: 'Ursinha Dormindo',
    description: 'Uma ursinha dormindo em seu travesseiro.',
    price: 25.00,
    more: '/produtos/003',
    stock: 1,
    fullDescription:'Oi',
    quantity: 1,
    
  },
  {
    id: '004',
    image: Bordado2,
    title: 'Conjunto de Bordados',
    description: 'Um conjunto de bordados, 4 bordados por um preço de 50 reais.',
    price: 49.99,
    more: '/produtos/004',
    stock:1,
    fullDescription:'Oi',
    quantity: 1,
  },
];
