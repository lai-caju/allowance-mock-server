const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const postAllowanceOrder = require('./middlewares/postAllowanceOrder');
const putAllowanceOrder = require('./middlewares/putAllowanceOrder');

server.use(middlewares)
server.use(jsonServer.bodyParser);
router.render = (req, res) => {
  const { url, method } = req;

  if (method === 'GET' && url === '/allowance_order') {
    const data = res.locals.data;
    const body = data.map(({ id, createdAt, total, status, employeeCount }) => {
      return { id, createdAt, total, employeeCount, status };
    });

    res.jsonp({
      data: body
    });
    return;
  }

  res.jsonp(res.locals.data);
}
server.use(postAllowanceOrder);
server.use(putAllowanceOrder);
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
