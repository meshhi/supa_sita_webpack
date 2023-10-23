import AppManager from '../js/components/AppManager';

const start = () => {
  const appManager = new AppManager();
  appManager.initCarousel();
  appManager.initMapChart();
  appManager.initReviews();
  appManager.initScrollAnimations();
}

start();