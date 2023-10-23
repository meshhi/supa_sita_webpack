import * as echarts from 'echarts';
import geoJson from '../../geojson/ar_region.json';

class MapChart {
    constructor(container) {
        this.mapChartContainer = container;
        this.bindToDOM();
        this.registerGeoJSON();
        this.initChart();
    }

    bindToDOM = () => {
        this.mapChart = echarts.init(this.mapChartContainer);
    }

    registerGeoJSON = () => {
        echarts.registerMap('ar_region', geoJson);
    }

    fetchGeoJSON = async() => {
        try {
            const response = await fetch('/index.js');
            console.log(response)
            const geoJson = await response.json();
            console.log(geoJson);
            echarts.registerMap('HK', geoJson);
        } catch(e) {
            console.log('Error getting JSON ', e)
        }
    }

    initChart = () => {
        this.mapChart.setOption(
              {
                title: {
                  text: 'Наши проекты',
                  // subtext: 'Data from Wikipedia',
                  // sublink:
                  //   'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
                },
                tooltip: {
                  trigger: 'item',
                  formatter: '{b}<br/>{c} (p / km2)'
                },
                toolbox: {
                  show: false,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                visualMap: {
                  show: false,
                  min: 800,
                  max: 50000,
                  text: ['High', 'Low'],
                  realtime: false,
                  calculable: true,
                  inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                  }
                },
                series: [
                  {
                    name: 'Наши проекты',
                    type: 'map',
                    map: 'ar_region',
                    label: {
                      show: true
                    },
                    data: [
                      { name: 'Вилегодский район', value: 20057.34 },
                    ],
                    // 自定义名称映射
                    nameMap: {
                      'Вилегодский район': 'Вилегодский район',
                      Eastern: '东区',
                      Islands: '离岛',
                      'Kowloon City': '九龙城',
                      North: '北区',
                      'Sai Kung': '西贡',

                      Southern: '南区',
                      'Tai Po': '大埔',
                    }
                  }
                ]
              }
            );

            window.addEventListener('resize', () => {
              this.mapChart.resize();
            });
    }

    showLoading = () => {
        this.mapChart.showLoading();
    }

    hideLoading = () => {
        this.mapChart.hideLoading();
    }
    
}

export default MapChart;