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