const canvas = document.getElementById("venuePieChart");

new Chart(canvas, {
    type: "pie",
    data: {
        labels: ["Venue A", "Venue B", "Venue C"],
        datasets: [{
            label: "Monthly bookings",
            data: [127, 32, 67],
            backgroundColor: ["#e200aa", "#406654", "#fa9d11"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});

const timeCanvas = document.getElementById("timeBarChart");

new Chart(timeCanvas, {
    type: "bar",
    data: {
        labels: ["6-9 AM", "9 AM-12 PM", "12-3 PM", "3-6 PM", "6-9 PM"],
        datasets: [{
            label: "Bookings this month",
            data: [30, 55, 85, 70, 30],
            backgroundColor: "#00b7ff"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

