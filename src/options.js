/**
 * Created by Sinires on 03.08.2016.
 */

import {getCookie} from "./utils/utils"

window.options = {
    // server_ip: location.origin,
    // socket_ip: location.origin.replace("http", "ws"),
    server_ip:"https://172.20.176.66:19003",
    socket_ip: "https://172.20.176.66:19003".replace("http", "ws"),

    url: ()=> `${options.server_ip}`,
    socket: (name)=> `${options.socket_ip}${name ? `/${name}` : ''}`,

    rtlsMapId: "mapid",

    user: getCookie("user") || {},

    api:{
        user:"user",
        device:"device"
    }
};
export default options;