import axios from "axios";


export const PostForm = async (data, route) => {
    try {
        const response = await axios.post(`http://localhost:3002/api/${route}`, data)
        return response;
    } catch (err) {
        console.error(err)
        console.log("POSTcall to API FAILED!!!===>", err);
    }
}

export const EditForm = async (data, route) => {
    try {
        const response = await axios.put(`http://localhost:3002/api/${route}`, data)
        if (response.status == 200 || 201) {
            return response;
        } else {
            return response;
        }
    } catch (err) {
        console.error(err)
        console.log("EDITcall to API FAILED!!!===>", err);
    }
}

export const DeleteForm = async (data, route) => {
    try {
        const response = await axios.delete(`http://localhost:3002/api/${route}`, data)
        if (response.status == 200 || 201) {
            return response;
        } else {
            console.log(`call.api.Delete response.status  ===> ${response.status}`);
            return response;
        }
    } catch (err) {
        console.error(err)
        console.log("Deletecall to API FAILED!!!===>", err);
    }
}

export const getOneById = async (id, route) => {
    try {
        const response = await axios.get(`http://localhost:3002/api/${route}${id}`)
        if (response.status == 200 || 201) {
           return response;
        } else {
            console.log(`!!!--- call.api.GetOneById response.status  ===> ${response.status}---!!!`);
            return response;
        }
    } catch (err) {
        console.error(err)
        console.log("getOneById call to API FAILED!!!===>", err);
    }
}

export const getAll = async (route) => {
    try {
        const response = await axios.get(`http://localhost:3002/api/${route}`)
        if (response.status == 200 || 201) {
            return response;
        } else {
            console.log(`!!!--- call.api.GetAll response status ===> ${response.statusText} ---!!!`);
            return response;
        }
    } catch (err) {
        console.error(err)
        console.log("getAll call to API FAILED!!!===>", err);
    }
}






