import request from '@/utils/request.js'
export function getSliders(data){
    return request({
        url:'/Dishes?id='+data
    })
}
export function getAll(){
    return request({
        url:'/Dishes'
    })
}
export function posttt(data){
    return request({
        url:'/Dishes',
        method:'post',
        data
    })
}
export function getuser(){
    return request({
        url:'/user'
    })
}
export function putuser(data1,data2){
    return request({
        url:'/Dishes/'+data1,
        method:'put',
        data2
    })
}