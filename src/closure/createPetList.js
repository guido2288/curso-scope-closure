function createPetList() {
  // Tu código aquí 👈
  let petList = [];

  function savePet(myPet) {

    if (myPet) {
      petList.push(myPet);

    };

  };


  return petList;
};

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();