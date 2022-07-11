import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    };

    async getHtml() {
        return `
        <h1>Hello Dashboard</h1>
        <p>This is my dashboard content</p>
        <p>
            <a href="/posts" data-link> View posts</a>
        </p>
        `
    }
}