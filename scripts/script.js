document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    var shelterPets = [];
  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPets (petName, petType, petAge){
      name: petName,
      type: petType,
      age: petAge
    }
    shelterPets.push(pet);
    console.log(shelterPets);
}
    // Function to display pets in the shelter - given to you!
    function displayPets() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(let i = 0; i < shelterPets.length; i++){
        let pet = shelterPets [i];
        let petItem = document.createElement("li");
        petItem.textContent = `${pet.name}: $${pet.type} (${pet.age} left)`;
        petList.appendChild(petItem); //will assist with adding each pet item to be shown in the list on the browser
     }
    }
    // Add some sample pets to the shelter
    addPet("Fido", "Dog", 3); //example
    addPet("Spot", "Dog", 2);
    addPet("Goldy", "Cat", 1);
    addPet("Wiley", "Cat", 2);

    // Display the pets in the shelter
    displayPets();

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    function checkPets();

  
    // Check if the pet shelter has animals that need homes by calling the previous function

  
    // Function to calculate the average age of pets in the shelter
   
  
    // Calculate the average age of pets in the shelter by calling the previous function



  });
  