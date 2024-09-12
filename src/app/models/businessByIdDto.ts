import { BusinessDto } from "./businessDto";
import { Location } from "./location";
import { Product } from "./product";
import { Service } from "./service";

export interface BusinessByIdDto extends BusinessDto {
    products: Product[];
    services: Service[];
    location : Location| null;
}