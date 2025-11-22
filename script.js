let num = prompt("Son yozing:");

num = Number(num);

if (num % 3 === 0 && num % 5 === 0) {
    console.log("3ga va 5ga bo'linadi");
} else if (num % 3 === 0) {
    console.log("3 ga bo'linadi");
} else if (num % 5 === 0) {
    console.log("5ga bo'linadi");
} else {
    console.log("3ga ham 5ga ham bo'linmaydi");
}