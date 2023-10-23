import MapChart from "./MapChart";
import Review from "./Review";
import { isElementInViewport } from '../utils';

class AppManager {
    initScrollAnimations = () => {
        document.addEventListener("scroll", () => {
            this.blocks = document.querySelectorAll(".custom-block");
            this.blocks.forEach(block => {
                if (!isElementInViewport(block)) return;
                if (block.classList.contains("appear")) return;
                if (block.classList.contains("about")) return;
                if (block.classList.contains("start")) return;
                if (block.classList.contains("contacts")) {
                    block.classList.add("appear-bottom");
                    return;
                }
                if (block.classList.contains("advantages-container")) {
                    block.classList.add("appear-bottom");
                    return;
                }
                block.classList.add("appear");
            });
        });
    }

    initCarousel = () => {
        this.leftArrowCarousel = document.querySelector('.carousel-left-arrow');
        this.rightArrowCarousel = document.querySelector('.carousel-right-arrow');
        this.carouselImageContent = document.querySelector('.carousel-image-content');

        let currentPictureNumber = 0;
        const totalPictureCount = this.carouselImageContent.children.length;

        const slideCarousel = (e, direction) => {
            if (direction === 'right') {
                currentPictureNumber += 1;
                if (currentPictureNumber >= totalPictureCount) {
                    currentPictureNumber = 0;
                }
            } else if (direction === 'left') {
                currentPictureNumber -= 1;
                if (currentPictureNumber < 0) {
                    currentPictureNumber = totalPictureCount - 1;
                }
            }
            this.carouselImageContent.style.transform = `translateX(${-currentPictureNumber * 100}%)`;
        }

        this.leftArrowCarousel.addEventListener('click', (e) => {
            slideCarousel(e, 'left');
        });

        this.rightArrowCarousel.addEventListener('click', (e) => {
            slideCarousel(e, 'right');
        });
    }

    initMapChart = () => {
        this.mapChartContainer = document.querySelector('.map-chart-container');
        this.mapChart = new MapChart(this.mapChartContainer);
    }

    initReviews = () => {
        this.reviewsContainer = document.querySelector('.reviews');
        this.reviews = [{
            reviewer: 'Google',
            review: 'All right!'
        },
        {
            reviewer: 'Amazon',
            review: 'Not bad!'
        }]
        this.reviews.forEach(review => {
            const reviewElement = new Review(review)
            reviewElement.bindToDOM(this.reviewsContainer);
        })
    }
}

export default AppManager;