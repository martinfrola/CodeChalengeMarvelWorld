import CryptoJS from 'crypto-js'
export const PUBLIC_KEY ="9c161c7ee80616a60123f98ba0ed6f05"
export const PRIVATE_KEY = "fb6bd5d99db5f5af02d9ee5ee90821690f1cd2e0"
export const URL = "https://gateway.marvel.com/"

export const ts = new Date().getTime();
export const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()