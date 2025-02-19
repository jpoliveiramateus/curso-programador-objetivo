const users = [
  {
    id: 1,
    city: "São Paulo",
    name: "josé da silva",
    age: 21,
    weight: 70,
    sex: "m",
    height: 1.7,
    salary: 1000,
    married: false,
    active: true,
  },
  {
    id: 2,
    city: "Rio de Janeiro",
    name: "maria clementina correia",
    age: 17,
    weight: 70,
    sex: "f",
    height: 1.6,
    salary: 2000,
    married: false,
    active: true,
  },
  {
    id: 3,
    city: "Rio de Janeiro",
    name: "antonieta francesa rainha",
    age: 28,
    weight: 70,
    sex: "f",
    height: 1.65,
    salary: 3000,
    married: true,
    active: true,
  },
  {
    id: 4,
    city: "Rio de Janeiro",
    name: "silva melo de aguiar",
    age: 38,
    weight: 70,
    sex: "m",
    height: 1.85,
    salary: 5000,
    married: true,
    active: true,
  },
  {
    id: 5,
    city: "São Paulo",
    name: "joão carvalho da conceição",
    age: 48,
    weight: 70,
    sex: "m",
    height: 1.9,
    salary: 9000,
    married: false,
    active: true,
  },
  {
    id: 6,
    city: "São Paulo",
    name: "zé rico programador",
    age: 62,
    weight: 90,
    sex: "m",
    height: 1.82,
    salary: 30000, // 30 mil
    married: false,
    active: true,
  },
];

const userProducts = [
  {
    id: 1,
    userId: 1,
    name: "Maçã",
    category: "Comida",
    price: 10,
  },
  {
    id: 2,
    userId: 1,
    name: "Blusa",
    category: "Roupa",
    price: 50,
  },
  {
    id: 3,
    userId: 2,
    name: "Calça Jeans",
    category: "Roupa",
    price: 300,
  },
  {
    id: 4,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 100,
  },
  {
    id: 5,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 120,
  },
  {
    id: 6,
    userId: 2,
    name: "Toalha",
    category: "Cama e Mesa",
    price: 35,
  },
  {
    id: 7,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 8,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 9,
    userId: 3,
    name: "Taxi",
    category: "Transporte",
    price: 30,
  },
  {
    id: 10,
    userId: 6,
    name: "Computador",
    category: "Tecnologia",
    price: 5000,
  },
];

// 1. Encontrar um usuário pelo nome;

const findUserByName = (users, userName) => users.find((user) => user.name.toUpperCase() === userName.toUpperCase())

// 2. Encontrar um usuário pelo valor de uma propriedade qualquer;
// Dica: a assinatura do método é findUserByPropValue(users, prop, value)

const findUserByPropValue = (users, prop, value) => users.filter((user) => user[prop] === value);

// 3. Encontrar a usuária do sexo feminino com o salário maior.

const higherSalaryByUser = (users) => users.reduce((prevUser, user) => user.salary > prevUser.salary ? user : prevUser);

const findHigherSalaryFemale = (users) => {
  const femaleUsers = users.filter((user) => user.sex === "f");
  const higherSalaryFemale = higherSalaryByUser(femaleUsers);
  return higherSalaryFemale;
}

// 4. Encontre os usuários de um dado estado e com peso maior
// que um dado peso;

const findUsersByState = (users, state) => users.filter((user) => user.city.toUpperCase() === state.toUpperCase());

const findUsersByStateAndWeight = (users, state, weight) => {
  const usersByState = findUsersByState(users, state);
  const usersWithGreaterWeight = usersByState.filter((user) => user.weight > weight);
  return usersWithGreaterWeight;
}

// 5. Encontre os usuários de um dado estado ou que são casados;

const usersMarried = (users) => users.filter((user) => user.married);

const findUsersByStateWhoAreMarried = (users, state) => {
  const usersByState = findUsersByState(users, state);
  return usersMarried(usersByState);
}

// 6. Cria uma função que recebe a lista de usuários e retorna
// uma lista com o IMC dos respectivos usuários;
// OBS: imc = peso/(altura x altura)

const calculateIMC = (weight, height) => parseFloat((weight / (height * height)).toFixed(2));

const calculateUsersIMC = (users) => users.map((user) => ({ name: user.name, IMC: calculateIMC(user.weight, user.height) }));

// 7. Cria uma função que recebe a lista de usuários e retorna
// a lista dos nomes completos capitalizados;
// OBS: o nome 'joao da silva' capitalizado, seria: Joao Da Silva
// Dica1: Criar uma função auxiliar somente para capitalizar
// uma única palavra.
// Dica2: Criar outra função auxiliar para capitalizar
// um nome completo, com mais de uma palavra.
// Usar: split e join e a função da dica1

const uppercaseWord = (word) => word[0].toUpperCase() + word.substring(1);

const uppercaseCompleteName = (name) => name.split(' ').map((word) => uppercaseWord(word)).join(' ');

const usersWithUppercaseName = (users) => users.map((user) => ({ name: uppercaseCompleteName(user.name) }));

// 8. Calcular a média de altura de todos os usuários;

const averageHeightByUsers = (users) => {
  const totalHeights = users.reduce((total, user) => total += user.height, 0);
  const average = (totalHeights / users.length).toFixed(2);
  return average;
}

// 9. Retornar os usuários com altura abaixo da média;

const usersWithBelowAverageHeight = (users) => users.filter((user) => user.height < averageHeightByUsers(users));

// 10. Verificar se um dado produto foi consumido
// mais de uma vez.

const productHasBeenConsumedMoreThanOnce = (productName) => {
  const total = userProducts.reduce((total, product) => product.name === productName ? total += 1 : total, 0);
  return total > 1 ? 'Produto consumido mais de uma vez' : 'Produto consumido apenas uma vez';
}

// 11. Verificar se um dado produto foi consumido
// mais de um usuário.

// 12. Verificar se existe algum produto
// que foi comprado por mais de um usuário

// 13. Retornar a lista de usuários sem o usuário mais novo da lista.

const usersListWithoutTheLast = (users) => {
  const lastUser = users.reduce((prevUser, user) => prevUser.id > user.id ? prevUser : user);
  return users.filter((user) => user.id !== lastUser.id);
}

// 14. Retornar um objeto que mapeia usuários pelo próprio
// id do usuário.
// ex: {
//   1: {
//     id: 1,
//     city: "São Paulo",
//     name: "josé da silva",
//     age: 21,
//     weight: 70,
//     sex: "m",
//     height: 1.7,
//     salary: 1000,
//     married: false,
//     active: true,
//   },
//   .
//   .
//   .
// }

const usersMappedById = (users) => users.map((user) => ({ [user.id]: { ...user } }));

// 15. Contar a quantidade de usuários de uma dada cidade;

const usersCountByCity = (users, city) => users.filter((user) => user.city.toUpperCase() === city.toUpperCase()).length;

// 16. Agrupar usuários pela cidade;

const findCities = (users) => {
  return users.reduce((newArray, { city }) => {
    if (!newArray.includes(city)) newArray.push(city)
    return newArray;
  }, []);
}

const groupUsersByCity = (users) => {
  const cities = findCities(users);

  const usersByCity = cities.reduce((newArray, city) => {
    newArray.push({ city, users: [] });
    return newArray;
  }, []);

  users.forEach((user) => {
    usersByCity.forEach(({ city, users }) => {
      if (city === user.city) {
        users.push(user);
      }
    });
  });

  return usersByCity;
}

// 17. Contar a quantidade de usuários por cidade;

const quantityUsersByCity = (users) => {
  const usersByCity = groupUsersByCity(users);
  const countUsers = usersByCity.map(({ city, users }) => ({ city, users: users.length }));
  return countUsers;
}

// 18. Obter a média salarial dos usuários por cidade;

const averageSalary = (users) => {
  const salaryTotal = users.reduce((total, user) => total += user.salary, 0);
  const average = salaryTotal / users.length;
  return Number(average.toFixed(2));
}

const averageSalaryOfUsersByCity = (users) => {
  const usersByCity = groupUsersByCity(users);
  return usersByCity.map(({ city, users }) => ({ city, average: averageSalary(users) }));
}

// 19. Obter os nomes distintos de produtos;

const getNameDistinctProducts = () => {
  const productsName = userProducts.map((product) => product.name);
  return [...new Set(productsName)];
}

// 20. Retornar os usuários que gastaram mais que preço
// médio dos produtos vendidos;

const averagePriceProducts = (userProducts) => {
  const totalPriceProducts = userProducts.reduce((total, product) => total += product.price, 0);
  return totalPriceProducts / userProducts.length;
}

const totalSpentByUser = (user, userProducts) => {
  const listProducts = userProducts.filter((product) => product.userId === user.id);
  return listProducts.reduce((total, product) => total += product.price, 0);
}

const usersWhoSpentMoreThanTheAveragePrice = (users) => {
  const averagePrice = averagePriceProducts(userProducts);

  return users.reduce((newArr, user) => {
    const totalSpent = totalSpentByUser(user, userProducts);
    if (totalSpent > averagePrice) newArr.push(user);
    return newArr;
  }, []);
}

// 21. Encontre o userId que menos gastou;

const spentListByUser = (users) => {
  const spentListByUser = users.map((user) => {
    const totalSpent = totalSpentByUser(user, userProducts);
    return { ...user, totalSpent };
  });
  return spentListByUser;
}

const usersWhoSpentTheLeast = (users) => {
  const listUsers = spentListByUser(users);
  const newListOrdained = listUsers.sort((a, b) => a.totalSpent - b.totalSpent);
  const firstUser = newListOrdained[0];
  return firstUser.id;
}

// 22. Encontre o userId que comprou menos produtos, mas
// que comprou sim algum produto;

const findQuantityPurchasedByUser = (user) => 
  userProducts.reduce((total, userProduct) => userProduct.userId === user.id ? total += 1 : total, 0);

const findQuantityPurchasedByUsers = (users) => {
  return users.map((user) => {
    const quantityPurchased = findQuantityPurchasedByUser(user);
    return { userId: user.id, quantity: quantityPurchased };
  });
}

const findUserWhoBoughtLeastProduct = (users) => {
  const quantityPurchasedByUsers = findQuantityPurchasedByUsers(users);
  const userWhoBoughtLeast = quantityPurchasedByUsers
    .reduce((prevUser, user) => user.quantity < prevUser.quantity && user.quantity > 0 ? user : prevUser);
  return userWhoBoughtLeast.userId;
}

// 23. Encontre os usuários (objetos completos)
// que compraram algum produto;

const findUsersWhoHavePurchasedProduct = () => users.filter((user) => userProducts.some((product) => user.id === product.userId));

// 24. Encontre os usuários comuns a duas listas de usuários.
// Dois usuários são idênticos, se tiverem o mesmo id;
// ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
// usuariosComuns => [{id:3}]

const commonUsers = (listOne, listTwo) => {
  return listOne.reduce((newAray, userListOne) => {
    if (listTwo.some((userListTwo) => userListOne.id === userListTwo.id)) newAray.push(userListOne);
    return newAray;
  }, []);
}

// 25. Encontre os usuários não-comuns a duas listas de usuários.
// ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
// usuariosNaoComuns => [{id:2}, {id:4}]

const nonCommonUsers = (listOne, listTwo) => {
  const sameUsers = commonUsers(listOne, listTwo);
  const allUsers = [...listOne, ...listTwo];
  const differentUsers = allUsers.filter((user) => sameUsers.some((sameUser) => user.id !== sameUser.id));
  return differentUsers;
}
