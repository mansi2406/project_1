// // document.getElementById('submitButton').addEventListener('click', function () {
// //     const name = document.getElementById('name').value.trim();
// //     const email = document.getElementById('email').value.trim();
// //     const phone = document.getElementById('phone').value.trim();
// //     const checkin = document.getElementById('checkin').value;
// //     const checkout = document.getElementById('checkout').value;
// //     const roomType = document.getElementById('roomType').value;
// //     const errorMessage = document.getElementById('errorMessage');

// //     // Clear previous error message
// //     errorMessage.textContent = '';

// //     // Validation
// //     if (!name || !email || !phone || !checkin || !checkout || !roomType) {
// //         errorMessage.textContent = 'Please fill out all required fields.';
// //         return;
// //     }

// //     // Prepare data for submission
// //     const formData = {
// //         name,
// //         email,
// //         phone,
// //         checkin,
// //         checkout,
// //         roomType,
// //         comments: document.getElementById('comments').value.trim(),
// //     };

// //     // Simulate submission to database (replace with backend call)
// //     console.log('Submitting data to database:', formData);

// //     alert('Booking submitted successfully!');
// // });
// // Item class to store value, weight, and value-to-weight ratio



// // ----------------------------------------------- fractionalKnapsack ----------------------------------------------------------



// class Item {
//     constructor(value, weight) {
//       this.value = value;
//       this.weight = weight;
//       this.ratio = value / weight;  // value-to-weight ratio
//     }
//   }
  
//   // Function to calculate the maximum value for the fractional knapsack problem
//   function fractionalKnapsack(capacity, values, weights) {
//     let n = values.length;
//     let items = [];
  
//     // Create item objects with value, weight, and ratio
//     for (let i = 0; i < n; i++) {
//       items.push(new Item(values[i], weights[i]));
//     }
  
//     // Sort items by the value-to-weight ratio in descending order
//     items.sort((a, b) => b.ratio - a.ratio);
  
//     let totalValue = 0;  // To store the total value of the knapsack
//     let remainingCapacity = capacity;  // Remaining capacity of the knapsack
  
//     // Iterate over the sorted items and add them to the knapsack
//     for (let i = 0; i < n; i++) {
//       if (remainingCapacity === 0) {
//         break;  // No more capacity to fill
//       }
  
//       if (items[i].weight <= remainingCapacity) {
//         // Take the whole item
//         totalValue += items[i].value;
//         remainingCapacity -= items[i].weight;
//       } else {
//         // Take the fraction of the item that fits
//         totalValue += items[i].value * (remainingCapacity / items[i].weight);
//         remainingCapacity = 0;  // Knapsack is full
//       }
//     }
  
//     return totalValue;
//   }
  
//   // Given values and weights
//   const values = [20, 30, 40, 32, 55];
//   const weights = [5, 8, 10, 12, 15];
//   const capacity = 20;  // Maximum knapsack capacity
  
//   // Calculate the maximum value for the given knapsack capacity
//   const maxValue = fractionalKnapsack(capacity, values, weights);
//   console.log(`Optimal value for the given knapsack capacity: ${maxValue}`);



// //--------------------------------------- ------- Merge Sort -------------------------------------------------------------------


// function mergeSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
  
//     return merge(left, right);
//   }
  
//   function merge(left, right) {
//     let result = [];
//     let i = 0;
//     let j = 0;
  
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         result.push(left[i]);
//         i++;
//       } else {
//         result.push(right[j]);
//         j++;
//       }
//     }
  
//     return result.concat(left.slice(i)).concat(right.slice(j));
//   }
  
//   const arr = [5, 2, 9, 1, 5, 6];
//   console.log("Merge Sort:", mergeSort(arr));
  


// // -------Bubble Sort: ------------


// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
//         }
//       }
//     }
//     return arr;
//   }
  
//   const arr2 = [5, 2, 9, 1, 5, 6];
//   console.log("Bubble Sort:", bubbleSort(arr2));
  

// //----------------------------------- ------------Selection Sort: ---------------------------------------------------------------



// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
//     }
//     return arr;
//   }
  
//   const arr3 = [5, 2, 9, 1, 5, 6];
//   console.log("Selection Sort:", selectionSort(arr3));



// //---------------------------------------------Quick Sort: ----------------------------------------------------------------------


// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
    
//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = [];
  
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   const arr4 = [5, 2, 9, 1, 5, 6];
//   console.log("Quick Sort:", quickSort(arr4));
  
  


// // -------------------------------------------Insertion Sort:--------------------------------------------------------------------



// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let key = arr[i];
//       let j = i - 1;
  
//       // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
//       while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j = j - 1;
//       }
  
//       arr[j + 1] = key;
//     }
//     return arr;
//   }
  
//   const arr5 = [5, 2, 9, 1, 5, 6];
//   console.log("Insertion Sort:", insertionSort(arr5));