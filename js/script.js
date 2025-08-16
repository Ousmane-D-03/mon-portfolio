// Mettre à jour l'année automatiquement
document.getElementById('year').textContent = new Date().getFullYear();

// Copier email au clic droit
const emailBtns = document.querySelectorAll('a[href^="mailto:"]');
for(const btn of emailBtns){
  btn.addEventListener('contextmenu', e => {
    e.preventDefault();
    navigator.clipboard.writeText('ousmanesarrd@gmail.com').then(()=>{
      btn.textContent = '📋 Email copié !';
      setTimeout(()=>{ btn.textContent = '✉️ ousmanesarrd@gmail.com'; }, 1500);
    });
  });
}