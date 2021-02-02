const router = require('express').Router();
const { celebrate, Joi, errors } = require('celebrate');
const { userData } = require('../controllers/user');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const NotFoundError = require('../errors/not-found-err');



router.use('/', userData);
router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

router.use(errorLogger);
router.use(errors());

module.exports = router;
