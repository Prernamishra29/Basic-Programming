// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If divisible, not prime
    }
    return true; // Otherwise, it's prime
  }
  
  // Export the function
  module.exports = isPrime;
  