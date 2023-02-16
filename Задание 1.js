const obj = {a: 1, b: 4}

function func(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key])
  }
}

func(obj);