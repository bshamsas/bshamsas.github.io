describe("sum" , function(){
    it ( "Returns the sum of an array of numbers" , function(){
        assert.equal(sum([1,2,3,4,5]),15) ;
    });
});


describe("multiply" , function(){
    it ( "Returns the sum of an array of numbers" , function(){
        assert.equal(multiply([1,2,3,4,5]),120) ;
    });
});


describe("reverse" , function(){
    it ( "Returns the string in reverse" , function(){
        assert.equal(reverse("Shamim"),"mimahS");
    });
});


describe("filterLongWords" , function(){
    it ( "Returns the longest word in array of String" , function(){
        assert.deepEqual(filterLongWords(["Key"," food","success"," life"],5),['success']) ;
    });
});