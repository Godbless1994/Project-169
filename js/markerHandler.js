AFRAME.registerComponent("markerhandler", {
  init: async function () {
    this.el.addEventListener("markerFound", () => {
     console.log("marker is found");
     this.handleMarkerFound();
    });


    this.el.addEventListener("markerLost", () => {
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function (dishes, markerId) {

    var buttonDiv = document.getElementById("order-button")
    buttonDiv.style.display = "flex";

    var orderButton = document.getElementById("order-summary-button");
    var orderSummaryButton = document.getElementById("order-summary-button");

    orderButton.addEventListener("click",()=>{
      swal({
        icon:"",
        title:" ",
        timer:2000,
        buttons: false
      });
    });

    orderSummaryButton.addEventListener("click", ()=>{
      swal({
        icon: "warning",
        title:"Order Summary",
        text:"Work In Progress"
      });
    });
  },
});
