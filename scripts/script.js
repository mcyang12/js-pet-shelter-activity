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
    function displaypetShelter() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(let i = 0; i < petShelter.length; i++){
        let pet = petShelter[i];
        let petHouse = document.createElement("li");
        petHouse.textContent = `${pet.name}: ${pet.type} (${pet.age})`;
        petList.appendChild(petHouse); //will assist with adding each pet item to be shown in the list on the browser
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
    function shelterStatus(){
      let numberOfShelter = 4
      if(numberOfShelter >= petShelter.length){
          console.log ("Pets Have A Home!")
        }else {
          console.log ("Pets Still Need A Home!")
        }
      // if(petShelter.length > numberOfShelter){
      //   console.log( "pets need homes" );
      // }
    }
  
    // Check if the pet shelter has animals that need homes by calling the previous function
    shelterStatus();
  
    // Function to calculate the average age of pets in the shelter
    function averagePetAge(){
      let totalPetAge = 0;
      for(i = 0; i < petShelter.length; i++){
        totalPetAge = totalPetAge + petShelter[i].age
      };
      let averagePetAge = (totalPetAge/petShelter.length);
      console.log(averagePetAge);
    }
  
    // Calculate the average age of pets in the shelter by calling the previous function
    averagePetAge();

  });
  