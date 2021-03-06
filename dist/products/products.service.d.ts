import { Model } from 'mongoose';
import { Product } from './product.model';
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Promise<{
        id: any;
        title: string;
        description: string;
        price: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        title: string;
        descreption: string;
        price: number;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<void>;
    deleteProduct(prodId: string): Promise<void>;
    private findProduct;
}
