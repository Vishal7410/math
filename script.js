// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function to calculate the circumference of a circle
  function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Example usage
  const radius = 5;
  const area = calculateArea(radius);
  const circumference = calculateCircumference(radius);
  
  console.log("Radius:", radius);
  console.log("Area:", area);
  console.log("Circumference:", circumference);
  