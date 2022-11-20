import {ILoginFormInt} from '@/type/login'
import request  from './index'

export const login = (params:ILoginFormInt) => request({
    url:'/login',
    method:'post',
    params
})

export const commodityList = () => request({
    url:'/commodityList',
    method:'get'
})

export const role = () => request({
    url:'/role',
    method:'get'
})

export const nick = () => request({
    url:'/nick',
    method:'get'
})

export const authority = () => request({
    url:'/authority',
    method:'get'
})