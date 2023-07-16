import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    name: 'Huy',
    age: 23,
  });
});

router.post('/', (req, res) => {
  return res.status(201).json({
    message: 'Add user success.',
  });
});

export default router;
