import clientPromise from "../../utils/mongdb"

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myYeast = await db.collection("yeast").insertOne(bodyObject);
      res.json(myYeast.ops[0]);
      break;
    case "GET":
      const allYeast = await db.collection("allYeast").find({}).toArray();
      res.json({ status: 200, data: allYeast });
      break;
  }
};