import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URL
const options = []

if (!URL) throw new Error('Please add your Mongo URL to .env')

let client = new MongoClient(URL, options)
let clientPromise

if(process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
        
    }
    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise