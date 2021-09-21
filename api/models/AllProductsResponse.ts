import { Page } from "./Page";
import { Product } from "./Product";
import { User } from "./User";

export type AllProductsResponse = {
	page: Page
	products: Product[],
	user: User
}