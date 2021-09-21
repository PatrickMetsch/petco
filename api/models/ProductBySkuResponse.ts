import { Page } from "./Page"
import { Product } from "./Product"
import { User } from "./User"

export type ProductBySkuResponse = {
	page: Page
	product: Product,
	user: User
}
