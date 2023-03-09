import axios from "axios"

let apiHandle = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

let Get = (endPoint) => {
    return apiHandle.get(endPoint)
}
let GetById = (endPoint , id) => {
    return apiHandle.get(`${endPoint}/${id}`)
}
let Post = (endPoint , body) => {
    return apiHandle.get(endPoint,body)
}
let Put = (endPoint) => {
    return apiHandle.get(endPoint)
}
let Del = (endPoint) => {
    return apiHandle.get(endPoint)
}

export { Get, GetById, Post, Put, Del }