  const card = document.getElementById('person');
  const imageContainer = document.getElementById('imageContainer');
  const showImageBtn = document.getElementById('showImageBtn');
  const showCardBtn = document.getElementById('showCardBtn');

  // إظهار الصورة وإخفاء الكرت
  showImageBtn.addEventListener('click', () => {
    card.style.display = 'none';
    imageContainer.style.display = 'block';
  });

  // الرجوع للكرت وإخفاء الصورة
  showCardBtn.addEventListener('click', () => {
    imageContainer.style.display = 'none';
    card.style.display = 'block';
  });
