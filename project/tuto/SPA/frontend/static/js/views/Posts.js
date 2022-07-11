import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    };

    async getHtml() {
        return `
        <h1>POSTS</h1>
        <ul>
            <li><a href="/posts/1" data-link>Post One</a></li>
            <li><a href="/posts/2" data-link>Post Two</a></li>
            <li><a href="/posts/3" data-link>Post Three</a></li>
        </ul>
        `
    }
}