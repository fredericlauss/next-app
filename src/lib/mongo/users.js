import clientPromise from ".";


let client
let db
let users

async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        users = await db.collection('users')
        console.log('connected')
    } catch (Error) {
        throw new Error('pas de co batard')
    }
}

;(async () => {
    await init()
})()

export async function getUsers() {
    try {
        if (!users) await init()
        const result = await users
            .find([])
            .toArray()
            console.log(result)
        return { users: result }
    } catch (Error) {
        return { error: 'failled to fetch users !'}
    }
}