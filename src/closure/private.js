const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName());//así accedemos a la variable
newPerson.setName('Oscar');//asignamos un valor a newPerson
console.log(newPerson.getName());//imprimimos nuevamente getName
