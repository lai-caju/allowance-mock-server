const utils = require('../utils');

function postAllowanceOrder(req, _, next) {
  const { body, url, method } = req;

  if (method === 'POST' && url === '/allowance_order') {
    const { allowances = [] } = body;

    const total = utils.calculateTotal(allowances);
    const employeeCount = allowances.length;

    req.body = {
      ...body,
      "createdAt": Date.now(),
      "total": total,
      "employeeCount": employeeCount,
    };
  }

  next();
}

module.exports = postAllowanceOrder;
