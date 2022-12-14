import { Router } from 'express';
import { join } from 'path';

const router = Router();

router.get('^/$|index(.html)?', (req, res) => {
  //   res.sendFile('./views/index.html', {root:__dirname});
  res.sendFile(join(__dirname, '..', 'views', 'index.html'));
});

export default router;
