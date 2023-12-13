function generateQR() {
    const urlInput = document.getElementById('urlInput').value;
    const qrcodeContainer = document.getElementById('qrcodeContainer');

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    // Generate new QR code
    const qrcode = new QRCode(qrcodeContainer, {
        text: urlInput,
        width: 128,
        height: 128
    });
}

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};

// Nav Bar Ends
