let arr = [1, 2, 3, 4, 5];

let newArr = arr.forEach(function (element) {
  console.log(element);
});

let array = arr.forEach((val) => {
  console.log(val + " Raghav Sethi");
});

console.log(array);
console.log(arr);

async function func() {
  let blog = await fetch(`https://randomuser.me/api/`);
  let res = await blog.json();
  console.log(res.results[0].name);
};

func();
