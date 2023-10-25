import axios from "axios"


export async function fetchAllitems() {
    const response = await fetch("https://fakestoreapi.com/products")
    const result = await response.json()
    console.log(result)
    return result
}