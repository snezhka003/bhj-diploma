class BaseConstructor {
    constructor(element) {
        if (!element) throw new Error('Element not found');
        this.element = element;
    }
}