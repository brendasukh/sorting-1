function bubbleSort(arr) {
  var resultArr = [];
  if (arr.length <= 1) {
    return arr
  }
  for (var i = 0; i < arr.length - 1; i++) {
    if ()
    }
  }
  var largest = arr.pop()
  resultArr = resultArr.concat(bubbleSort(arr))
  resultArr.push(largest);
  return resultArr
}

function swap(arr, index1, index2) {
  if (arr[index1] > arr[index2]) {
    var temp =  arr[index1];
    arr[index1] =  arr[index2];
    arr[index2] = temp;
  }
}

function comparison(item1, item2) {
  return item1 > item2 ? item1 : item2;
}
