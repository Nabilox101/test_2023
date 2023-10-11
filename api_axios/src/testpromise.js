
function testpromise() {
    const value = 2
    const promise = new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 3)
        console.log(random)
        if (random === value) {
            resolve('m3allem')
        }else {
            reject('3iyan')
        }
    })

    promise.then((data) => console.log(data)).catch((err) => console.log(err)) 

}

export default testpromise
