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
      responsive:true,
      maintainAspectRatio:false,
        scales:{
            x:{
                ticks:{
                    color:"#EBAA3B",
                    font:{
                        size:20,
                        style:"italic",
                        weight:"bold",                
                      }
                }
            },
            y:{
                ticks:{
                  color:"#EBAA3B",
                    font:{
                        size:20,
                        style:"italic",
                        weight:"bold",  
                        family:"banhnSchrift"              
                      }
                }
            }
        },
        plugins:{
            legend: {
              labels:{
                // beginAtZero: true,
                color:"#EBAA3B",
                font:{
                  size:20,
                  style:"italic",
                  weight:"bold",
                  family:"teamWorkRegular"                
                }
              },
            },
        }
    },
  };