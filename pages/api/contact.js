// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  message: Joi.string().min(5),
});

export default async function handler(req, res) {
  if (req.method == 'POST') {
    console.log(req.body);
    const { email, name, message } = req.body;
    try {
      const value = await schema.validateAsync({ email, name, message });
      return res.status(201).json({ success: true, ...value });
    } catch (err) {
      return res
        .status(422)
        .json({ success: false, err: err.details[0].message });
    }
  }
}
