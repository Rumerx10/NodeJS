const {v4: uuidv4} = require("uuid");
const users = [
    {
        id:uuidv4(),
        usesrName:"anisul islam",
        email:"ai@gmail.com"
    },
    {
        id:uuidv4(),
        usesrName:"Hasibul islam",
        email:"hi@gmail.com"
    },
    {
        id:uuidv4(),
        usesrName:"saiful islam",
        email:"si@gmail.com"
    },
]

module.exports = users; 