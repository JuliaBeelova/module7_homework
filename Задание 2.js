const obj = {name: "Julia"}
const str = "name"

function checkObj(str, obj) {
    if(str in obj) {
        console.log(true)
    }
    else
        console.log(false)
}
checkObj(str, obj);