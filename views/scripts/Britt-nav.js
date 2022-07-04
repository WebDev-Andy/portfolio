/*
; Author: Andrew Britt
; File: Britt-nav.js
; Description: Footer class extending HTML nav element
; Reference: Professor Krasso/ web-330 GitHub repo
; Date Reference: 3 July 2022
*/

class Nav extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        this.innerHTML =`
        <h1 id="topName">Andrew "Andy" Britt</h1>
        <nav class="nav">
            <a href="#">About</a>
            <a href="#">Resume</a>
            <a href="#">Projects</a>
            <a href="#">Databases</a>
            <a href="#">APIs</a>
            <a href="#">Bucket-List</a>
        </nav>`;
    }
}

customElements.define("nav-component", Nav);