export interface Product {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    more: string;
    category?: 'panos_de_prato' | 'toalhas' | 'bordados';
    favoriteIcon?: string;
    cartIcon?: string;
    quantity: number; 
    
  }
  
  export interface ProductDetails extends Product {
    fullDescription: string; 
    stock: number; 
  }
  