export interface Product {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    more: string;
    category?: 'panos_de_prato' | 'toalhas' | 'bordados'; 
}
