import { myAxios } from "./helper"

export const getAllStudent=()=>{
    return myAxios.get("/").then(resp=>resp.data)
}

export const submitStudent=(student)=>{
    // console.log(student)
    return myAxios.post('/', student).then(resp=>resp.data)
}

export const getSingleStudent=(rollNo)=>{
    return myAxios.get(`/${rollNo}`).then(resp=>resp.data)
}

export const updateStudent=(student, rollNo)=>{
    // console.log(student)
    return myAxios.put(`/${rollNo}`, student).then(resp=>resp.data)
}

export const deleteStudent=(rollNo)=>{
    return myAxios.delete(`/${rollNo}`).then(resp=>resp.data)
}

export const getByEmail=(email)=>{
    return myAxios.get(`/search/${email}`).then(resp=>resp.data)
}