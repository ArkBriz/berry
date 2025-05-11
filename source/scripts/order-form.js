const orderForm = document.querySelector('.order-form');

orderForm.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter' && evt.target.type === 'checkbox') {
    evt.preventDefault();
    evt.target.checked = !evt.target.checked;
  }
});
