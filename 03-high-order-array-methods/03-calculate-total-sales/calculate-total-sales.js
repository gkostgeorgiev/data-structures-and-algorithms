function calculateTotalSalesWithTax(array, taxRate) {
  const salesResult = array.reduce((a, b) => {
    return a + Number(b.price) * b.quantity;
  }, 0);

  const salesWithTax = salesResult * (100 + taxRate) / 100;
  return salesWithTax;
}

calculateTotalSalesWithTax(
      [
        { name: 'Apple', price: 0.5, quantity: 10 },
        { name: 'Banana', price: 0.3, quantity: 20 },
        { name: 'Orange', price: 0.6, quantity: 15 },
      ],
      8
    )

module.exports = calculateTotalSalesWithTax;
