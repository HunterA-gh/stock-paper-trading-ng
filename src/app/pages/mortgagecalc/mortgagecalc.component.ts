import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mortgagecalc',
  templateUrl: './mortgagecalc.component.html',
  styleUrls: ['./mortgagecalc.component.scss']
})
export class MortgagecalcComponent implements OnInit {

  constructor() {
  }
;

  principleAmount = 0;
  termLength = 0;
  interestRate = 0;

  chartType = 'pie';
  chartLabels = ['Principle', 'Interest'];
  chartData = [this.principleAmount, this.totalInterest()];


  chartOptions: any = {
    pieceLabel: {
      render(args) {
        const label = args.label
        const value = args.value;
        return label + ': ' + value;
      }
    }
  }


  chartType2 = 'line';
  chartData2 = [{
    data: [],
    label: ['Payment Left'],
    fill: true
  }];
  chartLabels2 = [];
  chartColors2 = [{
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(0, 0, 0, 1)'
  }];
  chartOptions2 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 10000
        }
      }]
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [{
        type: 'box',
        id: 'a-box-1',
        yScaleID: 'y-axis-0',
        yMin: 0,
        yMax: 1,
        backgroundColor: '#4cf03b'
      }, {
        type: 'box',
        id: 'a-box-2',
        yScaleID: 'y-axis-0',
        yMin: 1,
        yMax: 2.7,
        backgroundColor: '#fefe32'
      }, {
        type: 'box',
        id: 'a-box-3',
        yScaleID: 'y-axis-0',
        yMin: 2.7,
        yMax: 5,
        backgroundColor: '#fe3232'
      }]
    }
  }

  chartType3 = 'line';
  chartData3 = [{
    data: [],
    label: ['Towards Interest'],
    fill: true
  }];
  chartLabels3 = [];
  chartColors3 = [{
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgb(255,77,77)'
  }];
  chartOptions3 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 10000
        }
      }]
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [{
        type: 'box',
        id: 'a-box-1',
        yScaleID: 'y-axis-0',
        yMin: 0,
        yMax: 1,
        backgroundColor: '#4cf03b'
      }, {
        type: 'box',
        id: 'a-box-2',
        yScaleID: 'y-axis-0',
        yMin: 1,
        yMax: 2.7,
        backgroundColor: '#fefe32'
      }, {
        type: 'box',
        id: 'a-box-3',
        yScaleID: 'y-axis-0',
        yMin: 2.7,
        yMax: 5,
        backgroundColor: '#fe3232'
      }]
    }
  }

  chartType4 = 'line';
  chartData4 = [{
    data: [],
    label: ['Towards Balance'],
    fill: true
  }];
  chartLabels4 = [];
  chartColors4 = [{
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgb(26,114,2)'
  }];
  chartOptions4 = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 10000
        }
      }]
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw',
      annotations: [{
        type: 'box',
        id: 'a-box-1',
        yScaleID: 'y-axis-0',
        yMin: 0,
        yMax: 1,
        backgroundColor: '#4cf03b'
      }, {
        type: 'box',
        id: 'a-box-2',
        yScaleID: 'y-axis-0',
        yMin: 1,
        yMax: 2.7,
        backgroundColor: '#fefe32'
      }, {
        type: 'box',
        id: 'a-box-3',
        yScaleID: 'y-axis-0',
        yMin: 2.7,
        yMax: 5,
        backgroundColor: '#fe3232'
      }]
    }
  }


  monthlyPayment(): number {
    return (this.principleAmount * ((this.interestRate * 0.01 / 12) * Math.pow(((this.interestRate * 0.01 / 12) + 1), (this.termLength * 12)))) / ((Math.pow((1 + (this.interestRate * 0.01 / 12)), (this.termLength * 12)) - 1));
  }
  totalInterest(): number {
    return (this.monthlyPayment() * (this.termLength * 12)) - this.principleAmount;
  }

  totalCost(): number {
    return (this.monthlyPayment() * (this.termLength * 12))
  }

  monthAmount(): number {
    return this.termLength * 12;
  }
  visualizeData(): void {
    this.chartData = [this.principleAmount, this.totalInterest()];
    this.chartLabels2 = [];
    this.chartLabels3 = [];
    this.chartLabels4 = [];

    this.chartData2[0].data = [];
    this.chartData3[0].data = [];
    this.chartData4[0].data = [];

    let paymentLeft = this.totalCost();

    for(let i = 0; i <= this.termLength*12; i++){
      this.chartLabels2.push('Month ' + i);
      this.chartLabels3.push('Month ' + i);
      this.chartLabels4.push('Month ' + i);


      this.chartData2[0].data.push(paymentLeft);
      this.chartData3[0].data.push( ( paymentLeft * ( (this.interestRate*0.01)/12) ) );
      this.chartData4[0].data.push( (this.monthlyPayment() - (paymentLeft * ( (this.interestRate*0.01)/12)  )));
      paymentLeft -= (this.monthlyPayment());
    }
  }

  ngOnInit(): void {
  }


}
