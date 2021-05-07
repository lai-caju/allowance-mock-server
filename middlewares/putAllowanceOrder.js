const utils = require('../utils');

function postAllowanceOrder(req, _, next) {
  const { body, url, method } = req;
  if (method === 'PUT' && /\/allowance_order\/\d+/.test(url)) {
    const id = url.replace(/\/allowance_order\/(\d+)/, "$1");

    const { allowance_order } = utils.getDb();

    allowance = allowance_order.find(item => item.id == id);

    if (allowance === undefined) {
      next();
      return;
    }

    const { allowances = [] } = body;
    const total = utils.calculateTotal(allowances);
    const employeeCount = allowances.length;

    req.body = {
      ...allowance,
      ...body,
      "total": total,
      "employeeCount": employeeCount,
    };
  }
  next();
}

module.exports = postAllowanceOrder;
