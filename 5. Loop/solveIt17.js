
let bintang = ''

// drawing rows
for (let row = 0; row < 5; row++) {

  // drawing column
  for (let col = 5; col > row; col--) {
    bintang += '* '
  }

  bintang += '\n'

}

console.log( bintang )