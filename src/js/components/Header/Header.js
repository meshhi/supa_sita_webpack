import "./header.css";
import BaseComponent from "../BaseComponent/BaseComponent";

class Header extends BaseComponent {
    constructor() {
        super();
        this.rootContainer = document.createElement('header');
        this.rootContainer.classList.add('page-header');
        this.initHeaderContent();
    }

    initHeaderContent = () => {
        this.headerContent = document.createElement('nav');
        this.headerContent.classList.add('page-header-content');
        this.rootContainer.appendChild(this.headerContent);
        this.initHeaderMenu();
    }

    initHeaderMenu = () => {
        this.headerMenuContent = ['Преимущества', 'Услуги', 'О нас', 'Отзывы', 'Проекты'];
        this.headerMenu = document.createElement('ul');
        this.headerMenu.classList.add('header-menu');
        this.headerMenu.classList.add('header-content-item');
        for (let item of this.headerMenuContent) {
            const element = document.createElement('li');
            element.classList.add('header-menu-item');
            element.textContent = item;
            this.headerMenu.appendChild(element);
        }

        this.headerContent.appendChild(this.headerMenu);
    }
}

export default Header;