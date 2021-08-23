let date = new Date()

let currenthour = date.getHours()
console.log(currenthour)

let currentday = date.getDay()
console.log(currentday)

const logger = (req, res, next) => {
    if (currenthour > 8 && currenthour < 17 && currentday > 0 && currentday < 6 ) {
        next()
    }else{
        res.send("<h1> Sorry we are closed </h1>")
    }
}

module.exports = logger