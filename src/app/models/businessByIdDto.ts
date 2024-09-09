import { BusinessDto } from "./businessDto";
import { Product } from "./product";
import { Service } from "./service";

export interface BusinessByIdDto extends BusinessDto {
    products: Product[];
    services: Service[];
}