/*
; Author: Andrew Britt
; File: Britt-footer.js
; Description: Footer class extending HTML footer element
; Reference: Professor Krasso/ web-330 GitHub repo
; Date Reference: 3 July 2022
*/

class Footer extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        this.innerHTML =`
        <div class="footer">
            <p>
            test <a href="#">another test</a>
            </p>
        </div>`;
    }
}

customElements.define("footer-component", Footer);