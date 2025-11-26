const target = {}

const handler = {
    get: function (target, property) {
        console.log(`Getting value of '${property}'`);
        return target[property];
    },

    set: function (target, property, value) {
        console.log(`Setting value '${value}' to '${property}'`);
        target[property] = value;
    }
};

const proxy = new Proxy(target, handler);

proxy.name = 'John Doe';
console.log(proxy.name); // John Doe

proxy.age = 30;
console.log(proxy.age); // 30   
console.log(target); // { name: 'John Doe', age: 30 }