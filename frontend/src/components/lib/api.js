
import axios from 'axios'


const baseUrl = '/api'

//----Staffs
//-------
export const getAllStaff = () => {
  return axios.get(`${baseUrl}/staffs/`)
}

export const getSingleStaff = id => {
  return axios.get(`${baseUrl}/staffs/${id}`)
}

//----Products
//--------
export const getAllProducts = () => {
  return axios.get(`${baseUrl}/products/`)
}

export const getSingleProduct = id => {
  return axios.get(`${baseUrl}/products/${id}`)
}

//---Services
//---------
export const getAllServices = () => {
  return axios.get(`${baseUrl}/services/`)
}

export const getSingleService = id => {
  return axios.get(`${baseUrl}/services/${id}`)
}
