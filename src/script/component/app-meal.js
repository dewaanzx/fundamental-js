class AppMeal extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-image: linear-gradient(to right, #b94330, #f7c5c3);
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            
            h2 {
                padding: 28px;
            }
        </style>
        <h2>Meal Dicoding</h2>`;
    }
}

customElements.define("app-meal", AppMeal);