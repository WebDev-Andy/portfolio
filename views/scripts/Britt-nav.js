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
        <nav class="navBar">
            <div class="topName">Andrew "Andy" Britt</div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div class="navBar-links">
                <ul>
                    <li><a href="./index.html">About</a></li>
                    <li><a href="./Britt-portfolio-resume.html">Resume</a></li>
                    <li><a href="./Britt-portfolio-projects.html">Projects</a></li>
                    <li><a href="./Britt-portfolio-databases.html">Databases</a></li>
                    <li><a href="./Britt-portfolio-apis.html">APIs</a></li>
                    <li><a href="./Britt-portfolio-bucket.html">Bucket-List</a></li>
                </ul>
            </div>
        </nav>`;
    }


}



customElements.define("nav-component", Nav);




















