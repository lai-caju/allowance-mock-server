const path = require('path');
const fs = require('fs');

function getDb() {
  const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json')));
  return data;
}

function calculateTotal(allowances) {
  const total = allowances.reduce((total, allowance) => {
    return total + allowance.amounts.reduce((_amountTotal, amount) => {
      return _amountTotal + amount.amount;
    }, 0);
  }, 0);

  return total;
}

module.exports = {
  getDb,
  calculateTotal
};

