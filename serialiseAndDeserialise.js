const originalObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "hiking", "coding"]
  };
  
  // Serializing the object to JSON
  const serializedObject = JSON.stringify(originalObject);
  
  console.log(serializedObject);
  
  // Deserializing the JSON back to an object
  const deserializedObject = JSON.parse(serializedObject);
  
  console.log(deserializedObject);


//Serializing an object refers to the process of converting the object into a format that can be easily stored, transmitted, or reconstructed later. 
//This typically involves converting the object into a sequence of bytes, characters, or other data representations that can be easily managed and manipulated.

// Data Storage: Objects are serialized to be stored in files, databases, or other storage mediums.
// Data Transmission: Objects are serialized to be sent over networks or between different systems.
// Caching: Objects are serialized to be stored in memory caches or distributed caching systems.
// Communication between Different Platforms: Objects are serialized to be exchanged between systems written in different programming languages or running on different platforms.


//WHY TO SERIALISE AN OBJECT


// Interoperability: Different systems or applications may use different data formats or protocols. Converting data to a standard format allows different systems to communicate and exchange information seamlessly.
// Storage: Data may need to be stored in different types of storage mediums, such as files, databases, or cloud storage. Converting data to a suitable format ensures efficient storage and retrieval.
// Transmission: When data is transmitted over networks or between systems, it needs to be in a format that can be easily transmitted and reconstructed on the receiving end. Converting data to a compact and standardized format reduces bandwidth usage and transmission time.
// Security: Some data formats may include encryption or other security measures to protect sensitive information during transmission or storage.