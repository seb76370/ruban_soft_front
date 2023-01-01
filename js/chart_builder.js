// setup
const data = {
    labels: ["En attente", "En production", "Terminer"],
    datasets: [
      {
        label: "Status de Production",
        data: [18, 12, 6],
        backgroundColor: [
          "rgba(255, 26, 104, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],

  };



  export const config = {
    type: "bar",
    data:data,
    options: {
        scales:{
            x:{
                ticks:{
                    color:"green",
                    font:{
                        size:40,
                        style:"italic",
                        weight:"bold",                
                      }
                }
            },
            y:{
                ticks:{
                    color:"green",
                    font:{
                        size:40,
                        style:"italic",
                        weight:"bold",                
                      }
                }
            }
        },
        plugins:{
            legend: {
              labels:{
                // beginAtZero: true,
                color:"red",
                font:{
                  size:40,
                  style:"italic",
                  weight:"bold",                
                }
              },
            },
        }
    },
  };