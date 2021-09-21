import express from 'express'
import { dogFoodPage } from './api/data/dogFoodPage'
import { products } from './api/data/products'
import { testUser } from './api/data/testUser'
import { AllProductsResponse } from './api/models/AllProductsResponse'
import { Product } from './api/models/Product'
import { ProductBySkuResponse } from './api/models/ProductBySkuResponse'
import { jsonString } from './utils/json/jsonString'
import { loggedInStatus } from './utils/user/loggedInStatus'

const app = express()
const port = 3000

type S = {
	products: Array<Product>,
	eVar11: string
}

const allProductsResponse:AllProductsResponse = {
	page: dogFoodPage,
	products: products,
	user: testUser,
}

const productBySkuResponse = 
	(sku:string):ProductBySkuResponse => ({
		page: dogFoodPage,
		product: products.find(product => product.product_sku === sku)!,
		user: testUser
	})

app.get('/question/1', (req, res) => {
	let s:S = {
		products: [],
		eVar11: ""
	}
	
	s.eVar11 = loggedInStatus(allProductsResponse.user)

	res.send(`User is: ${s.eVar11}`)
})

app.get('/question/2', (req, res) => {
	let s:S = {
		products: [],
		eVar11: ""
	}

	s.products = [
		...s.products,
		productBySkuResponse("12345678901").product
	]

	res.send(`<pre>${jsonString({"s.products": s.products})}</pre>`)
})

app.get('/question/3', (req, res) => {
	let s:S = {
		products: [],
		eVar11: ""
	}

	s.products = allProductsResponse.products

	res.send(`<pre>${jsonString({"s.products": s.products})}</pre>`)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})