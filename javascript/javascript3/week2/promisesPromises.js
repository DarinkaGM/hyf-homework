const myAsyncPromise = (resolveAfter) => {
    return new Promise ((resolve) => {
        setTimeout(() => { resolve()
        }, resolveAfter * 1000);
    })
 
};
myAsyncPromise(7)
    .then(response => { console.log("I am called asynchronously!");
    })
    .catch(error => { console.log("I found and error.");
    });

    async function asyncCall() {
        const result = await myAsyncPromise(7);
        console.log(result);
    }
    asyncCall();


const setTimeoutPromise = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
setTimeoutPromise(5000)
    .then(response => {
        console.log("Called after 5 seconds");
    });

const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        },
            (error) => {
                reject(error);
            });
    });
}

getCurrentLocation()
    .then((position) => {
        console.log(position);
    })
    .catch((error) => {
        console.log(error);
    });
