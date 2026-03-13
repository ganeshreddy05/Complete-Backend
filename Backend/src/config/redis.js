import { createClient }  from "redis";

const redisClient = createClient({
    url : "redis://localhost:6379"
})

redisClient.on("error",(err)=>{
    console.log("redis error :",err);
});
await redisClient.connect();
redisClient.on("connect", () => {
  console.log("✅ Redis Connected");
});

export default redisClient;