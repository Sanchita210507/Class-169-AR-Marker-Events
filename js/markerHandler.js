AFRAME.registerComponent("marker-handler", {
    init:function(){
     this.el.addEventListener("markerFound", () => {
          //console.log("marker is found")
          this.handleMarkerFound();
     })
     this.el.addEventListener("markerLost", () => {
          //console.log("marker is lost")
          this.handleMarkerLost();
     })

    },
    handleMarkerFound: function () {
        // Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";


        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click", ()=>{
            swal({
                icon : "warning",
                title : "Rate the Dish!",
                text : "Work in progress."
            })
        })

        orderButton.addEventListener("click",()=>{
            swal({
                icon : "https://i.imgur.com/4NZ6uLY.jpg",
                title : "Thanks for Ordering!",
                text : "Your order will be served at your table soon."
            })
        })

        
    },
    handleMarkerLost: function () {
        // Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})