// Просто уберите "with { type: 'json' }"
import {productsData} from './data.js' ;

class StaticJSONRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.data = productsData;
    }

    init() {
        this.render();
    }

    productCardTemplate(product) {
        return `
            <article class="articleCard">
              <div class="main-info">
                  <img class="logo_of_extension" src="${product.logo}" alt="${product.name}">
                  <div>
                      <h3>${product.name}</h3>
                      <p>${product.description}</p>
                  </div>
              </div>
              <div class="bottom_of_article">
                 <button class="removeButton">Remove</button>
                 <label class="switch">
                 <input type="checkbox" class="${product.isActive}" onclick="toggleSwitched(this)">
                 <span class="slider"></span>
                 </label>
              </div>
            </article>
        `;
    }

    render() {
        if (!this.data || !this.data.products) {
            console.error('Нет данных для отображения');
            return;
        }
        this.container.innerHTML = this.data.products.map(product => this.productCardTemplate(product)).join('');
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const renderer = new StaticJSONRenderer('products-container');
    renderer.init();
});