export const data = {
  labels: ["12 pm", "1 pm", "3 pm", "4 pm", "5 pm", "6 pm"],
  datasets: [
    {
      label: "Temp",
      data: [100, 70, 80, 5, 20, 35],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

export const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};