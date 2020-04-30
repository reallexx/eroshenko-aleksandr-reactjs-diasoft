function promiseReduce(asyncFunctions, reduce, initialValue){
    return (async () => {
        for (const fn of asyncFunctions) {
            initialValue = reduce(await fn(), initialValue);
        }
        return initialValue;
    })();
}

module.exports = promiseReduce;
