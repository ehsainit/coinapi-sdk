const WebSocket = require('ws');

var ws = new WebSocket('wss://ws.coinapi.io/v1/');
ws.on('open', function open() {
var hello = {
  "type": "hello",
  "apikey": "PUT_API_KEY_HERE",
  "heartbeat": false,
  "subscribe_data_type": ["quote"],
  "subscribe_filter_asset_id": ["BTC", "ETH"]
};
ws.send(JSON.stringify(hello));
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});