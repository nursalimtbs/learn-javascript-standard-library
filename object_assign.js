const target = {
    name: "Alice",
    position: "Developer"
};

const source = {
    position: "Senior Developer",
    department: "Engineering"
};

Object.assign(target, source);

console.log(target);