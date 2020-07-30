//const redis = require("redis");
//const client = redis.createClient();

// client.on("error", function (error) {
//   console.error(error);
// });

//https://www.npmjs.com/package/redis

// Sets in Key value pair
exports.SetData = async (key, value) => {
  try {
    //result = client.set(key, value, redis.print);
    result = "data stored"
    return result;
  } catch (err) {
    return err;
  }
};

// returns value associated with key
exports.GetData = async (key) => {
  try {
    //result = client.get(key, redis.print);
    result = "retrieved data"
    return result;
  }
  catch (err) {
    return err;
  }
};