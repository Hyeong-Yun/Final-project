import 'express-async-errors';
import express from 'express';

const items = [
    {
        id: '1',
        des: "Hello World",
        createAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: ""
    }
]

const router = express.Router();

// GET /items
// GET /items?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? items.filter(item => item.username === username)
    : items;
    res.status(200).json(data);
})

// GET /items/:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const item = items.find((item) => item.id === id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
  });

// POST /items
router.post('/', (req, res, next) => {
    const { text, name, username } = req.body;
    const tweet = {
      id: Date.now().toString(),
      text,
      createdAt: new Date(),
      name,
      username,
    };
    items = [tweet, ...tweets];
    res.status(201).json(tweet);
  });

// PUT /items/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const item = items.find((item) => item.id === id);
    if (item) {
      item.text = text;
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
  });

// DELETE /items/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    items = items.filter((item) => item.id !== id);
    res.sendStatus(204);
  });

export default router;