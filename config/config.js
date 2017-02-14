module.exports = {
    port: 8080,
    mongodbUri: `mongodb://sys:123@ds131729.mlab.com:31729/samples`,
    mongoOptions: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } },
    greeting_message: `running at Mach5 Speed`
}