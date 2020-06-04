// Declare variables;
const billAmt = document.getElementById("bill-amt");
const serviceRating = document.getElementById("service-rating");
const peopleAmt = document.getElementById("people-amt");
const each = document.getElementById("each");
const calculateBtn = document.getElementById("calculate");
const totalTip = document.getElementById("total-tip");
const result = document.getElementById("total-amt");

calculateBtn.addEventListener("click", () => {
    // Validate input
    if (billAmt.value === "" || serviceRating.value === 0) {
        alert("Please, enter all values");
    }   else {
        // Check to see if this input is less than or equal to 1
        if (peopleAmt.value === "" || peopleAmt.value <= 1) {
            each.style.display = "none";
        }
        else {
            each.style.display = "block";
        }
        
        // Calculate tip and convert to 2 decimal places
        let total = (billAmt.value * serviceRating.value) / peopleAmt.value;
        total = Math.round(total * 100) / 100;
    
        // Ensure the tip stays at 2 decimal places
        total = total.toFixed(2);
    
        // Display the tip
        totalTip.style.display = "block";
        result.innerHTML = total;
    }
});