//Iteracion#1
//Dado el siguiente javascript usa forof para recorrer el array de películas, 
//genera un nuevo array con las categorías de las películas e imprime por consola el 
//array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar 
//las categorías puedes ayudarte de la función .includes()
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categories = [];

for (let movie of movies){
    for (let category of movie.categories){
        if (!(categories.includes(category))){
            categories.push(category);
        }
    }
}
console.log(categories);

//Iteracion#2
//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos 
//los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let cont = 0;
let total = 0;
for (let user of users){
    for(let key in user.favoritesSounds){
        total += user.favoritesSounds[key].volume;
        cont++;
    }
}
console.log(total/cont);

//Iteracion#3
//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
//Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
const sounds = [];
for (let user of users){
    for(let key in user.favoritesSounds){
        sounds[key] ? sounds[key]++ : sounds[key] = 1;
    }
}
console.log(sounds);