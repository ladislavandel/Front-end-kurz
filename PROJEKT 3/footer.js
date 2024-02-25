class customFooter {
  footerEl;
  footerConctent;

  constructor(mistoVlozeni) {
    this.footerEl = mistoVlozeni;
    this.footerConctent = this.footerEl.innerHTML;

    this.init();
  }

  init() {
    this.preparedStructure();
  }

  preparedStructure() {
    const footer = `
      <div class="footer-wrapper">
        <p>© 2024 - Your Travel Assistant. All Rights Reserved.</p>
        ${this.footerConctent}
       <div class="social-media">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
       </div>
        <p class="created">Created by XXX.</p>
      </div>
    `;

    this.footerEl.innerHTML = footer;
  }
}

const footerSelector = document.querySelector(".footer");

const newFooter = new customFooter(footerSelector);
