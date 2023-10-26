class BaseComponent {
    bindToDOM = (container) => {
        container.appendChild(this.rootContainer);
    }
}

export default BaseComponent;