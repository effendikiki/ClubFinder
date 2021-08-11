class AppBar extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute("title");
        this.render();
    }

    render() {
        this.innerHTML = `<h2>${this.title}</h2>`
    }

}

customElements.define("app-bar", AppBar);