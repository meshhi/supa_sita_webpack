import "./review.css";

class Review {
    constructor(reviewObj) {
        this.review = document.createElement('div');
        this.review.classList.add('review');
        this.reviewTitle = document.createElement('h1');
        this.reviewTitle.textContent = reviewObj.reviewer;
        this.reviewTitle.classList.add('review-title');
        this.review.appendChild(this.reviewTitle);
        this.reviewText = document.createElement('div');
        this.reviewText.textContent = reviewObj.reviewer;
        this.reviewText.classList.add('review-text');
        this.review.appendChild(this.reviewText);
    }

    bindToDOM(container) {
        this.container = container;
        this.container.appendChild(this.review);
    }
}

export default Review;