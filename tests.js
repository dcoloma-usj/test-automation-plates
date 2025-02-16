// Use Chai's expect for assertions
const expect = chai.expect;

describe('valid plates domains', function() {
  it('4 zeros followed by 3 Bs should be a valid plate', function() {
    expect(isValidPlate("0000BBB")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid uppercase letters should be a valid plate', function() {
    expect(isValidPlate("1234CDF")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid uppercase letters should be a valid plate', function() {
    expect(isValidPlate("5678GHJ")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid uppercase letters should be a valid plate', function() {
    expect(isValidPlate("9871KLM")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid uppercase letters should be a valid plate', function() {
    expect(isValidPlate("3421NPR")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid uppercase letters should be a valid plate', function() {
    expect(isValidPlate("4398STV")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid uppercase letters should be a valid plate', function() {
    expect(isValidPlate("8657WXY")).to.equal(true); 
  });

  it('4 nines followed by 3 Zs should be a valid plate', function() {
    expect(isValidPlate("9999ZZZ")).to.equal(true); 
  });

  it('4 zeros followed by 3 bs should be a valid plate', function() {
    expect(isValidPlate("0000bbb")).to.equal(true); 
  });
  
  it('4 numbers followed by 3 valid lowercase letters should be a valid plate', function() {
    expect(isValidPlate("4321fcd")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid lowercase letters should be a valid plate', function() {
    expect(isValidPlate("5876jkl")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid lowercase letters should be a valid plate', function() {
    expect(isValidPlate("9187mgh")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid lowercase letters should be a valid plate', function() {
    expect(isValidPlate("9831nvt")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid lowercase letters should be a valid plate', function() {
    expect(isValidPlate("5676prs")).to.equal(true); 
  });

  it('4 numbers followed by 3 valid lowercase letters should be a valid plate', function() {
    expect(isValidPlate("5566ywx")).to.equal(true); 
  });

  it('4 9s followed by 3 z letters should be a valid plate', function() {
    expect(isValidPlate("9999zzz")).to.equal(true); 
  });
});

describe('invalid plates because letters in first 4 positions', function() {
  it('if first item is Z (a letter) should be a invalid plate', function() {
    expect(isValidPlate("Z050BCD")).to.equal(false); 
  });

  it('if second item is B (a letter) should be a invalid plate', function() {
    expect(isValidPlate("0B07BFG")).to.equal(false); 
  });

  it('if third item is C (a letter) should be a invalid plate', function() {
    expect(isValidPlate("10C0ZDC")).to.equal(false); 
  });

  it('if fourth item is G (a letter) should be a invalid plate', function() {
    expect(isValidPlate("200GMNP")).to.equal(false); 
  });
});
 
describe('invalid plates because wrong chars in first 4 positions', function() {
  it('if first item is $ (wrong char) should be a invalid plate', function() {
    expect(isValidPlate("$022ZYW")).to.equal(false); 
  });
  
  it('if second item is . (wrong char) should be a invalid plate', function() {
    expect(isValidPlate("1.00BTS")).to.equal(false); 
  });

  it('if third item is - (wrong char) should be a invalid plate', function() {
    expect(isValidPlate("36-6CDN")).to.equal(false); 
  });

  it('if first item is & (wrong char) should be a invalid plate', function() {
    expect(isValidPlate("897&MPR")).to.equal(false); 
  });
});    


describe('invalid plates because invalid letter in last 3 positions', function() {
  it('if sixth item is Ñ it should be a invalid plate', function() {
    expect(isValidPlate("0562BÑC")).to.equal(false); 
  });
  
  it('if seventh item is Q it should be a invalid plate', function() {
    expect(isValidPlate("0235BBQ")).to.equal(false); 
  });

  it('if fifth item is A it should be a invalid plate', function() {
    expect(isValidPlate("7463ABC")).to.equal(false); 
  });

  it('if sixth item is E it should be a invalid plate', function() {
    expect(isValidPlate("6713DEC")).to.equal(false); 
  });

  it('if seventh item is I it should be a invalid plate', function() {
    expect(isValidPlate("2598PSI")).to.equal(false); 
  });

  it('if sixth item is O it should be a invalid plate', function() {
    expect(isValidPlate("2233ROT")).to.equal(false); 
  });

  it('if fifth item is U it should be a invalid plate', function() {
    expect(isValidPlate("5235UFG")).to.equal(false); 
  });
});    

describe('invalid plates because number in last 3 positions', function() {
  it('if fifth item is 9 (number) it should be a invalid plate', function() {
    expect(isValidPlate("37459BB")).to.equal(false); 
  });
  
  it('if sixth item is 3 (number) it should be a invalid plate', function() {
    expect(isValidPlate("8274D3F")).to.equal(false); 
  });

  it('if seventh item is 2 (number) it should be a invalid plate', function() {
    expect(isValidPlate("0976HJ2")).to.equal(false); 
  });
});

describe('invalid plates because wrong char in last 3 positions', function() {
  it('if fifth item is % (wrong char) it should be a invalid plate', function() {
    expect(isValidPlate("0000%DW")).to.equal(false); 
  });
  
  it('if sixth item is . (wrong char) it should be a invalid plate', function() {
    expect(isValidPlate("0000Z.W")).to.equal(false); 
  });

  it('if seventh item is & (wrong char) it should be a invalid plate', function() {
    expect(isValidPlate("0000PP&")).to.equal(false); 
  });
});    