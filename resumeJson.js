// Sample resume data in JSON format
let resumeData = {
  name: "Suneel Reddy",
  age: 25,
  location: "Chennai",
  education: [
    {
      degree: "Bachelor of Engineering",
      major: "Electronics and Communications Engineering(ECE)",
      university: "SathyaBama University",
      graduationYear: 2020,
    },
  ],
  experience: [
    {
      position: "BackEnd developer",
      company: "Mindgate Solutions",
      duration: "Nov 2020 - present",
    },
  ],
  skills: ["Java", "Spring Boot", "Kafka", "Postgresql", "Redis", "JavaScript"],
};

// Iterating over the resume data using different for loops

// Using for loop
console.log("------------------------------------------ Resume Data ------------------------------------------");
console.log();
console.log("------------------------------------------ Iterating using for loop ------------------------------------------");

// Iterate over keys of resumeData
let keys = Object.keys(resumeData);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = resumeData[key];
  // If value is an array, print its elements directly
  if (Array.isArray(value)) {
    console.log(key + ":");
    console.log(value);
  } else {
    // Otherwise, print key-value pair
    console.log(key + ": " + value);
  }
}
console.log();
console.log("------------------------------------------ Iterating using for...in loop ------------------------------------------");

// Iterate over keys of resumeData using for...in loop
for (let key in resumeData) {
  let value = resumeData[key];
  // If value is an array, print its elements directly
  if (Array.isArray(value)) {
    console.log(key + ":");
    console.log(value);
  } else {
    // Otherwise, print key-value pair
    console.log(key + ": " + value);
  }
}
console.log();
console.log("------------------------------------------ Iterating using for...of loop ------------------------------------------");

// Iterate over key-value pairs of resumeData using for...of loop
for (let [key, value] of Object.entries(resumeData)) {
  // If value is an array, print its elements directly
  if (Array.isArray(value)) {
    console.log(key + ":");
    console.log(value);
  } else {
    // Otherwise, print key-value pair
    console.log(key + ": " + value);
  }
}
console.log();
console.log("------------------------------------------ Iterating using forEach loop ------------------------------------------");

// Iterate over key-value pairs of resumeData using forEach
Object.entries(resumeData).forEach(([key, value]) => {
    // If value is an array, print its elements directly
    if (Array.isArray(value)) {
      console.log(key + ":");
      console.log(value);
    } else {
      // Otherwise, print key-value pair
      console.log(key + ": " + value);
    }
  });
  