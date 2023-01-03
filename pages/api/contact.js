// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Joi from 'joi';
import { MongoClient } from 'mongodb';

const schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  message: Joi.string().min(5),
});

export default async function handler(req, res) {
  if (req.method == 'POST') {
    console.log(req.body);
    const { email, name, message } = req.body;

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGODB_URL);
    } catch (err) {
      return res
        .status(422)
        .json({ success: false, err: 'Cannot connect to DB!' });
    }

    let value;
    try {
      value = await schema.validateAsync({ email, name, message });
    } catch (err) {
      client.close();
      return res
        .status(422)
        .json({ success: false, err: err.details[0].message });
    }

    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(value);
      value.id = result.insertedId;
    } catch (err) {
      client.close();
      return res
        .status(500)
        .json({ success: false, err: 'Storing Message Fail!' });
    }

    client.close();

    return res.status(201).json({ success: true, ...value });
  }
}
