describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one item', function(){
    expect( bubbleSort([0]) ).toEqual( [0] );
  });

  it('handles an array of multiple items', function(){
    expect( bubbleSort([4,2,3,1]) ).toEqual( [1, 2, 3,4] );
  });


  it("calls swap the correct number of times",function(){
      spyOn(window,'swap').and.callThrough();
      bubbleSort([4,2,3,1]);
      expect(window.swap.calls.count()).toEqual(5);
  } );
});

// test cases for single and multiple items
