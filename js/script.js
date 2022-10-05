document
  .querySelector('.remove-notifications')
  .addEventListener('click', (e) => {
    document.querySelector('h1 span').innerText = '0';
    document.querySelectorAll('.user-container').forEach((item) => {
      item.classList.add('not-notification');
    });
    const notification = document
      .querySelectorAll('.notfication-new')
      .forEach((item) => {
        item.classList.remove('notfication-new');
      });
  });
