console.log(`Entrega 6 - Javascript por Eliezer Espejo
Crear el array de objetos "Pizzas". 🍕
👉  Debemos crear 6 objetos como mínimo.
👉  Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes 
    (Sobre la base) y precio. (Ingredientes debe ser una lista). 

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 `)

const pizzas = [
	{
		id: 1,
		nombre: "Muzzarella",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella"],
		precio: 500,		
	},
	{
		id: 2,
		nombre: "Champiñón",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Champiñón"], 
		precio: 1000,			
	},
	{
		id: 3,
		nombre: "Rúcula",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Rúcula"], 
		precio: 650,		
	},
	{
		id: 4,
		nombre: "Salame",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Salame"], 
		precio: 750,		
	},
	{
		id: 5,
		nombre: "Palmito",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Palmito"], 
		precio: 550,		
	},
	{
		id: 6,
		nombre: "Roquefort",
		ingredientes: ["Salsa de Tomate", "Queso Roquefort", "Cebolla Caramelizada"], 
		precio: 950,		
	}
];

console.log(`EJERCICIO 1: 🔥 Crear una iteración del array que imprima en consola
a)  Las pizzas que tengan un id impar:`);
const idImpar = pizzas.filter(pizza => pizza.id % 2 != 0)
idImpar.forEach((pizza) => {
	console.log(`La pizza ${pizza.nombre} tiene Id impar`)
})

console.log(`EJERCICIO 2: 🔥 Crear una iteración del array que imprima en consola
b)  ¿Hay alguna pizza que valga menos de $600?:`);

const TienePrecioMenorA = (pizza, monto) => pizza.precio < monto;
const pizzasConPrecioMenorA = (precio) => {
	pizzas.some( pizza => TienePrecioMenorA(pizza, precio))
	? console.log(`Hay Pizzas con un precio menor a $${precio}`)
	: console.log(`No hay Pizzas con un precio menor a $${precio}`)
}
pizzasConPrecioMenorA(600);

console.log(`EJERCICIO 3: 🔥 Crear una iteración del array que imprima en consola
c)  El nombre de cada pizza con su respectivo precio:`);

const pizzasNombrePrecio = pizzas.forEach((pizzaDato) => {
console.log(`La pizza de ${pizzaDato.nombre} cuesta $${pizzaDato.precio}`)
});

console.log(`EJERCICIO 4: 🔥 Crear una iteración del array que imprima en consola
d)  Todos los ingredientes de cada pizza (En cada iteración imprimir los
    ingredientes de la pizza actual). Ayuda: van a tener que realizar dos
    recorridos, ya que cada pizza del array de pizzas tiene un array de 
    ingredientes:`);

pizzas.forEach((p) => {
    console.log(`La pizza de ${p.nombre} tiene los siguientes ingredientes:`);
    p.ingredientes.forEach((ingredientesLista) => {
        console.log(`- ${ingredientesLista}`);
    })
});