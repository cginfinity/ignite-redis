const { SetData, GetData } = require('../redis/functions');

module.exports = function (RED) {
    function redis(config) {
        RED.nodes.createNode(this, config);
        this.getset = config.getset
        this.key = config.mykey
        this.value = config.myvalue
        var node = this;
        this.on('input', function (msg) {
            if (this.getset === 'SET') {
                SetData(this.key, this.value)
                    .then(response => {
                        msg.payload = response
                    });
            } 
            if (this.getset === 'GET'){
                GetData(this.key)
                .then(response => {
                    msg.payload = response
                });
            }
            node.send(msg)
        });
    }
    RED.nodes.registerType("redis", redis);
};