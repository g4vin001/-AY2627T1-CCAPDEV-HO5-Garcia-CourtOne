const canvas = document.getElementById("venuePieChart");

new Chart(canvas, {
    type: "pie",
    data: {
        labels: ["Venue A", "Venue B", "Venue C"],
        datasets: [{
            label: "Monthly bookings",
            data: [120, 90, 60],
            backgroundColor: ["#0d6efd", "#198754", "#ffc107"]
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