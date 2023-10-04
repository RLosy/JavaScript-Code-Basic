
// var message = "hello xiaoming"
// console.log(message);
// console.log(message.length); //14


// (function(){
// var message = "hello xiaoming"
// console.log(message);
// console.log(message.length);
// })()

//创建模块对象
var xmModule = (function () {
    var xmModule = {}

    var message = "hello xiaoming"
    console.log(message);
    console.log(message.length);

    xmModule.message = message //有点疑问
    return xmModule

})()