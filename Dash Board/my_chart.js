const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const view = document.getElementById('view').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'View',
            data: [70, 60, 39],
            fill: true,
            backgroundColor: [
                'rgba(81, 126, 206, 0.5)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

const my_earning = new Chart(earning, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '2021',
            data: [12, 20, 8, 6, 5, 3,12, 17, 3, 5, 10, 13],
            backgroundColor: [
                'rgba(81, 126, 206, 0.5)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const my_view = new Chart(view, {
    type: 'doughnut',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'View',
            data: [70, 60, 39],
            fill: true,
            backgroundColor: [
                'rgba(0, 68, 198, 0.5)',
                'rgba(0, 197, 202, 0.5)',
                'rgba(0, 0, 219, 0.5)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});