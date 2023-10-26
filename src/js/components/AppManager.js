import MapChart from "./MapChart/MapChart";
import Review from "./Reviews/Review/Review";
import { isElementInViewport } from "../utils";
import Header from "./Header/Header";

class AppManager {
  constructor() {
    this.rootBody = document.querySelector('body');
  }

  initContentContainer = () => {
    this.contentContainer = document.createElement('main');
    this.contentContainer.innerHTML = `<div class="start-container appear">
        <div class="start-inner-container">
            <div class="start-inner-container-left-col">
                <h1 class="start-title-first">
                    Помогаем организациям и предприятиям решить вопрос с энергоснабжением
                </h1>
                <h2 class="start-title-second">
                    От проекта до готового решения
                </h2>
                <ul class="start-title-third">
                    <li>
                        кабельные линии
                    </li>
                    <li>
                        воздушные линии
                    </li>
                    <li>
                        трансформаторные подстанции 0.4-10 кВ
                    </li>
                </ul>
            </div>
            <div class="start-inner-container-right-col">
                <div class="start-image"></div>
            </div>
        </div>
        <div class="start-arrow">
            <svg role="presentation" class="arrow" x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592" style="enable-background:new 0 0 38.417 18.592;"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
        </div>
    </div>
    <div class="content-container">
        <div class="advantages-container custom-block">
            <ul class="advantages-list">
                <li class="advantage">
                    <div class="advantage-icon fa-regular fa-thumbs-up">
                    </div>
                    <div class="advantage-text">
                        Опыт в сфере более 25 лет
                    </div>
                </li>
                <li class="advantage">
                    <div class="advantage-icon fa-solid fa-bolt">

                    </div>
                    <div class="advantage-text">
                        Соблюдаем правила и технологии электромонтажа
                    </div>
                </li>
                <li class="advantage">
                    <div class="advantage-icon fa-regular fa-calendar">
                    </div>
                    <div class="advantage-text">
                        Делаем качественно и в срок
                    </div>
                </li>
                <li class="advantage">
                    <div class="advantage-icon fa-regular fa-file">
                    </div>
                    <div class="advantage-text">
                        Согласовываем документально
                    </div>
                </li>
                <li class="advantage">
                    <div class="advantage-icon fa-solid fa-phone">
                    </div>
                    <div class="advantage-text">
                        Всегда на связи
                    </div>
                </li>
            </ul>
        </div>
        <div class="gallery custom-block">
            <div class="gallery-item pad">
                <div class="gallery-item-text">
                    Прокладка кабельных линий
                </div>
            </div>
            <div class="gallery-item pillar">
                <div class="gallery-item-text">
                    Воздушные линии
                </div>
            </div>
            <div class="gallery-item zheka">
                <div class="gallery-item-text">
                    Установка опор
                </div>
            </div>
            <div class="gallery-item transformer">
                <div class="gallery-item-text">
                    ТП
                </div>
            </div>
            <div class="gallery-item montage">
                <div class="gallery-item-text">
                    Монтаж муфт
                </div>
            </div>
            <div class="gallery-item bulb">
                <div class="gallery-item-text">
                    Другое (не разобрал что написано)
                </div>
            </div>
        </div>
        <div class="carousel custom-block">
            <div class="carousel-left-arrow">
                <svg role="presentation" class="arrow" x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592" style="enable-background:new 0 0 38.417 18.592;"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
            </div>
            <div class="carousel-image-container">
                <div class="carousel-image-content">
                    <div class="carousel-image-box"></div>
                    <div class="carousel-image-box"></div>
                    <div class="carousel-image-box"></div>
                </div>
            </div>
            <div class="carousel-right-arrow">
                <svg role="presentation" class="arrow" x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592" style="enable-background:new 0 0 38.417 18.592;"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
            </div>
        </div>
        <div class="double-container custom-block">
            <div class="reviews">
            </div>
            <div class="map-chart">
                <div class="map-chart-container">

                </div>
            </div>
        </div>
    </div>`;
    this.contentContainer.classList.add('main-container');
    this.rootBody.appendChild(this.contentContainer);
  }

  initScrollAnimations = () => {
    document.addEventListener("scroll", () => {
      this.blocks = document.querySelectorAll(".custom-block");
      this.blocks.forEach((block) => {
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
  };

  initHeader = () => {
    this.header = new Header();
    this.header.bindToDOM(this.rootBody);
  }

  initCarousel = () => {
    this.leftArrowCarousel = document.querySelector(".carousel-left-arrow");
    this.rightArrowCarousel = document.querySelector(".carousel-right-arrow");
    this.carouselImageContent = document.querySelector(
      ".carousel-image-content"
    );

    let currentPictureNumber = 0;
    const totalPictureCount = this.carouselImageContent.children.length;

    const slideCarousel = (e, direction) => {
      if (direction === "right") {
        currentPictureNumber += 1;
        if (currentPictureNumber >= totalPictureCount) {
          currentPictureNumber = 0;
        }
      } else if (direction === "left") {
        currentPictureNumber -= 1;
        if (currentPictureNumber < 0) {
          currentPictureNumber = totalPictureCount - 1;
        }
      }
      this.carouselImageContent.style.transform = `translateX(${
        -currentPictureNumber * 100
      }%)`;
    };

    this.leftArrowCarousel.addEventListener("click", (e) => {
      slideCarousel(e, "left");
    });

    this.rightArrowCarousel.addEventListener("click", (e) => {
      slideCarousel(e, "right");
    });
  };

  initMapChart = () => {
    this.mapChartContainer = document.querySelector(".map-chart-container");
    this.mapChart = new MapChart(this.mapChartContainer);
  };

  initReviews = () => {
    this.reviewsContainer = document.querySelector(".reviews");
    this.reviews = [
      {
        reviewer: "Google",
        review: "All right!",
      },
      {
        reviewer: "Amazon",
        review: "Not bad!",
      },
    ];
    this.reviews.forEach((review) => {
      const reviewElement = new Review(review);
      reviewElement.bindToDOM(this.reviewsContainer);
    });
  };

  startApp = () => {
    this.initHeader();
    this.initContentContainer();
    this.initCarousel();
    this.initMapChart();
    this.initReviews();
    this.initScrollAnimations();
  }
}

export default AppManager;
