describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one item', function(){
    expect( bubbleSort([0]) ).toEqual( [0] );
  });

  it('handles an array of multiple items', function(){
    expect( bubbleSort([2, 1, 3]) ).toEqual( [1, 2, 3] );
  });
});

// test cases for single and multiple items
