/**
 * creation du socket vers le server
 * creation de l'evenment qui recoit les message du server
 * @param {function} funcAdd function traite les données a ajouter lors d'un message du server
 * @param {function} FunctUp function traite les données a mettre a jour lors d'un message du server
 */
// export function startSocket(funcAdd,FunctUp) 
export function startSocket() 
{
    /**
     * Connection au socket
     */
  // const socket = io("https://dev-passion76.fr:3007");
  const socket = io("http://localhost:3008");
  socket.on("connect", function () {
    console.log("Connected");
  });

  /**
   * connexion au message 'event' arrivant du server
   */
  socket.on("events", function (data) 
  {
    console.log(data);
 
  });

}