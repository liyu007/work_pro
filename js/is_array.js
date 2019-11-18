/**
 * 判断一种类型是否为数组
 * */
function is_arr_by_instance_of(obj) {
    // 根据构造函数判断
    return obj instanceof Array; 
}

function is_array_by_proto(obj) {
    // 根据原型对象判断
    // return obj.__proto__ === Array.prototype; //浏览器可能不支持
    return Object.getPrototypeOf(obj) === Array.prototype;
}

function is_arr_by_is_array(obj) {
    // 浏览器内置方法，注意有些浏览器不支持
    return Array.isArray(obj)
}

function is_arr_by_class(obj) {
    // 组精准的判断方法，其实就是isArray的原理
    return Object.prototype.toString().call(obj) === "[object Array]";
}