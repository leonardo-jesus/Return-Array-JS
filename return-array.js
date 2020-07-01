var users = [{
    name: "Diego",
    skills: ["Javascript", "ReactJS", "Redux"]
  },
  {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function returnArray(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(`${array[i].name} has the skills: ${array[i].skills.join(', ')}`);
  }
}

returnArray(users);