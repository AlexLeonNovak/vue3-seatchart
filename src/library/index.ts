import SeatChart from './components/SeatChart.vue';

const useSeatChart = {
  install: (app: {component: (name: string, component: unknown) => void}) => {
    app.component('SeatChart', SeatChart);
  }
}

export { SeatChart, useSeatChart };
