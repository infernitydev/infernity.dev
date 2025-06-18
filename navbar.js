class NavBar extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <link rel="stylesheet" href="navbar.css">
        <nav class="navbar">
          <div class="logo"><a class="logo" href="/">infernity.dev</a></div>
          <div class="links">
		    <a href="/">About</a>
    		<a href="/projects">Projects</a>
    		<a href="/blog">Blog</a>
		  </div>
        </nav>
      `;
  
      shadow.appendChild(wrapper);
    }

	connectedCallback() {
		const shadow = this.shadowRoot;
		const nav = shadow.querySelector('.navbar');
		const link = shadow.querySelector('link[rel="stylesheet"]');
	  
		const spacer = document.createElement('div');
		spacer.classList.add('navbar-spacer');
		this.insertAdjacentElement('afterend', spacer);
	  
		const init = () => {
		  // Force reflow to get correct offsetHeight
		  const height = nav.offsetHeight;
		  spacer.style.height = height + 'px';
		};
	  
		link.addEventListener('load', init);
	  }
	  
}
  
  
customElements.define('nav-bar', NavBar);
  