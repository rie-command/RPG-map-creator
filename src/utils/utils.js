import options from "../options"

export function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}


export function isNull(value) {
    return value === null;
}

export function isEmpty(value) {
    return (value === null || value === undefined);
}

export function array2ObjectByKey(array=[], key = 'id') {
    let obj = {};
    array.forEach(element => {
        "use strict";
        obj[element[key]] = element;
    })
    return obj;
}

export function object2ArrayBykey(object = {}, key = 'mac') {
    return Object.values(object)
                 .map(obj => obj[key]);
}

export function concatArrays(...arrays) {
    let array = new Set([].concat(...arrays));
    return [...array]
}

export function macs2Options(macs = [], devices = {}) {
    return macs.map(mac => {
        const device = devices[mac]
            , title = device && device.title;
        return {label: `${title || mac}`, value: mac}})
}

//если расчихлять без массива можно, то зачихлять обратно нельзя, поэтому он нужен
const dataKeysArray = ['position'];

export function convertServer2ClientCarrier(carrier={}){
    carrier.data && dataKeysArray.forEach(key=> carrier[key] = carrier.data[key]);
    return carrier
}

export function convertClient2ServerCarrier(carrier={}){
    !carrier.data && (carrier.data = {});
    carrier && dataKeysArray.forEach(key=> carrier.data[key] = carrier[key]);
    return carrier
}

export const patterns = {
    login: '^[a-zA-ZА-Яа-яё 0-9\\-]{3,50}$',
    fullName: '^[a-zA-ZА-Яа-яё 0-9\\-]{0,50}$',
    password: '^[a-zA-ZА-Яа-яё 0-9\\-]{3,50}$'
}

export function isValid(name, value){
    if(!patterns[name]) return true;
    return RegExp(patterns[name]).test(value);
}
