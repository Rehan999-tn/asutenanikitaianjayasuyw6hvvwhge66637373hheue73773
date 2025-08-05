document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu mobile
  const tombolMenu = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('mobile-menu');
  
  tombolMenu.addEventListener('click', function() {
    menuMobile.classList.toggle('hidden');
    menuMobile.classList.toggle('animate__fadeIn');
  });
  
  // Fungsi tombol beli
  const tombolBeli = document.querySelectorAll('.tombol-beli');
  const notifikasi = document.getElementById('notifikasi');
  
  tombolBeli.forEach(tombol => {
    tombol.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Tampilkan notifikasi
      notifikasi.classList.remove('hidden');
      notifikasi.classList.add('notifikasi-show');
      
      // Reset progress bar
      const progressBar = notifikasi.querySelector('.animate-progress');
      progressBar.style.animation = 'none';
      void progressBar.offsetWidth;
      progressBar.style.animation = 'progress 3s linear forwards';
      
      // Sembunyikan setelah 3 detik
      setTimeout(() => {
        notifikasi.classList.remove('notifikasi-show');
        notifikasi.classList.add('notifikasi-hide');
        
        setTimeout(() => {
          notifikasi.classList.add('hidden');
          notifikasi.classList.remove('notifikasi-hide');
        }, 300);
      }, 3000);
      
      // Redirect setelah delay
      setTimeout(() => {
        window.location.href = 'https://t.me/kanotdv';
      }, 3500);
    });
  });
  
  // Modal gambar produk
  const gambarProduk = document.querySelectorAll('.gambar-container img');
  const modalGambar = document.getElementById('modal-gambar');
  const gambarModal = document.getElementById('gambar-modal');
  const tombolTutup = document.getElementById('tutup-modal');
  
  gambarProduk.forEach(gambar => {
    gambar.addEventListener('click', function() {
      gambarModal.src = this.src;
      modalGambar.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });
  
  tombolTutup.addEventListener('click', function() {
    modalGambar.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });
  
  modalGambar.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
  
  // Animasi scroll untuk kartu produk
  const animasiScroll = () => {
    const kartuProduk = document.querySelectorAll('.produk-card');
    const tinggiWindow = window.innerHeight;
    
    kartuProduk.forEach((kartu, index) => {
      const posisiKartu = kartu.getBoundingClientRect().top;
      const titikTampil = 150;
      
      if (posisiKartu < tinggiWindow - titikTampil) {
        setTimeout(() => {
          kartu.classList.add('animate__animated', 'animate__fadeInUp');
          kartu.style.animationDelay = `${index * 100}ms`;
        }, 100);
      }
    });
  };
  
  window.addEventListener('scroll', animasiScroll);
  animasiScroll(); // Jalankan sekali saat pertama dimuat
  
  // Efek scroll header
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('shadow-xl');
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scroll ke bawah
      header.classList.add('-translate-y-full');
      header.classList.remove('shadow-xl');
    } else if (currentScroll < lastScroll && currentScroll > 100) {
      // Scroll ke atas
      header.classList.remove('-translate-y-full');
      header.classList.add('shadow-xl');
    }
    
    lastScroll = currentScroll;
  });
});