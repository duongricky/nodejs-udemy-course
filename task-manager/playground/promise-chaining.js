require('../src/db/mongoose')
const User = require('../src/models/user')

//using async await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count;
}

updateAgeAndCount('61051562db3891b7c11f117d', 2).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
