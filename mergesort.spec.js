describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([0,1,2,3])).toEqual([[0,1],[2,3]])
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect(mergeSort([])).toEqual( [] );
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1,3,5], [2,4])).toEqual([1,2,3,4,5])
  });

  it("merges and sorts an array!", function(){
    expect(mergeSort([9,7,8,6,5,3,4,1,2])).toEqual([1,2,3,4,5,6,7,8,9])
  })
});
