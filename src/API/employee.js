import API from './config'

export function getEmployees(query=''){
    
    return API.get(`employees?${query}`)
        .then(response=> {
            let data = response.data

            return data
        })
}

export function addEmployee(body){
    
    return API.post(`employees`,body)
        .then(response=> {
            let data = response.data

            return data
        })
}

export function updateEmployee(params,body){
    
    return API.put(`employees/${params}`,body)
        .then(response=> {
            let data = response.data

            return data
        })
}

export function deleteEmployee(params){
    
    return API.delete(`employees/${params}`)
        .then(response=> {
            let data = response.data

            return data
        })
}