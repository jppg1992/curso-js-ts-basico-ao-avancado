const name1 = 'João'
const year = 2022
const born = 1992
let i,
  cont = 0
i = born
while (i < year) {
  i++
  cont++
}

console.log(name1, 'nascido em', born, 'terá', cont, 'anos ao final de', year)

console.log(typeof name1)
console.log(typeof born)
