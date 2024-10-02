import { Product } from '../interfaces/products';

import Pano1 from '../../assets/SubSections/Panos/Pano_001.jpeg'
import Pano2 from '../../assets/SubSections/Panos/Pano_002.jpeg';

export const panosDePrato: Product[] = [
  {
    id: '001',
    image: Pano1,
    title: 'Dias da Semana',
    description: 'Vários panos de prato com os dias da semana.',
    price: 19.99,
    more: '/produtos/pano_de_prato_1',
  },
  {
    id: '002',
    image: Pano2,
    title: 'Feliz Natal',
    description: 'Pano de prato com uma mensagem de Natal.',
    price: 10.00,
    more: '/products/pano_de_prato_2',
  },
];
