  let card = document.getElementById('person');
  let imageContainer = document.getElementById('imageContainer');
  let showImageBtn = document.getElementById('showImageBtn');
  let showCardBtn = document.getElementById('showCardBtn');

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





   function showImage() {
        document.getElementById("football").style.display = "none";
        document.getElementById("image").style.display = "block";
    }

    function showCard() {
        document.getElementById("football").style.display = "block";
        document.getElementById("image").style.display = "none";
    }







      function showmage() {
    document.getElementById("succse").style.display = "none";
    document.getElementById("imagContainer").style.display = "block";
  }

  function showard() {
    document.getElementById("imagContainer").style.display = "none";
    document.getElementById("succse").style.display = "block";
  }
