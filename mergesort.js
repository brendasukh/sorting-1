function split(wholeArr) {
  var halfIndex = Math.ceil(wholeArr.length / 2)
  var firstHalf = wholeArr.slice(0, halfIndex)
  var secondHalf = wholeArr.slice(halfIndex)
  return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
  var resultArr = [];
  while(arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      resultArr.push(arr1.shift())
    } else {
      resultArr.push(arr2.shift())
    }
  }
  if(arr1.length) {resultArr = resultArr.concat(arr1)}
  if(arr2.length) {resultArr = resultArr.concat(arr2)}

  return resultArr
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var temp = split(arr)
  var resultArr =[]
  temp.forEach(function(element){
    resultArr.push(mergeSort(element))
  })
  //temp[0] = mergeSort(temp[0]);
  //temp[1] = mergeSort(temp[1]);
  return merge(resultArr[0], resultArr[1]);



}
