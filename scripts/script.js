document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    var petShelter = [];
  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPet(petName, petType, petAge){
      let pet = {
        name: petName,
        type: petType,
        age: petAge
      }
      petShelter.push(pet);
      console.log(petShelter);
    }
    // Function to display pets in the shelter - given to you!
    function displayPets() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(let i = 0; i < petShelter.length; i++){
        let pet = petShelter[i];
        let petList = document.createElement("li");
        petList.textContent = `${pet.name}: $${pet.type} (${pet.age} left)`;
        petList.appendChild(petList); //will assist with adding each pet item to be shown in the list on the browser
     }
    }
    // Add some sample pets to the shelter
    addPet("Fido", "Dog", 3); //example
    addPet("Bubbles", "Panda", 5);
    addPet("Ash", "Cat", 2);
    addPet("Spot", "Goldfish", 1);

    // Display the pets in the shelter
    displaypetShelter();
    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    function checkPets() {
      let petHome = document.getElementById("pet-home");
      petHome.innerHTML = "";
    }
  
    // Check if the pet shelter has animals that need homes by calling the previous function
    
  
    // Function to calculate the average age of pets in the shelter
    function average(petage1, petage2, petage3, petage4);{
      petage1 = 3;
      petage2 = petage4 = 2;
      petage3 = 1;
    }
  
    // Calculate the average age of pets in the shelter by calling the previous function
    average = (age1 + age2 + age3 +age4) / 4;

  });
  