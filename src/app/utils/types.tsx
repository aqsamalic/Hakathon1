import { StaticImageData} from "next/image";

export type Product={
    id: number,
    title: string,
    image?: string[]| StaticImageData | undefined,
    price: number,
    description: string,
    category: string,
    Products: string,
    size: string[],
    quantity: number,
    color: string,
    discount?: number,
   
}

export type Cart={
    id: number,
    title: string,
    image?: string[]| StaticImageData | undefined,
    price: number,
    description: string,
    category: string,
    Products: string,
    size: string,
    quantity: number,
    discount?: number,
   
}