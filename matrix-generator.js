function matrixGenerator(rows, columns) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < columns; j++) {
      matrix[i].push(Math.floor(Math.random() * 100))
    }
    matrix[i] = selectionSort(matrix[i]);
  }
  matrix = matSelectionSort(matrix);
  return matrix;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      let temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
    }
  }
  return array;
}

function matSelectionSort(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[j][0] < matrix[smallest][0]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      let temp = matrix[i];
      matrix[i] = matrix[smallest];
      matrix[smallest] = temp;
    }
  }
  return matrix;
}

module.exports = matrixGenerator;
