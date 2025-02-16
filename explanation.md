# A POSSIBLE SOLUTION
An initial consideration. We've been told that "The UI performs some basic checking to guarantee that the JavaScript function always receives a String of 7 characters". 

Our tests are not going to take into account other lengths different to 7. Otherwise we could include other type of tests, but given that the UI is going to check that, we don't need to do in the funciont itself.

Second consideration, there are two output domains:
- A/ Valid Plates 
- B/ Invalid Plates

## A - Valid Plates
For Valid Plates, I don't think there are subdomains. What I'd try is testing all the potential valid values in both areas (number and letters). The spec says nothing about lower/upper case so we need to test both. 

This is the list of test cases for valid plate domain:

      | plate    | result |
      | 0000BBB  | true   |
      | 1234CDF  | true   |
      | 5678GHJ  | true   |
      | 9871KLM  | true   |
      | 3421NPR  | true   |
      | 4398STV  | true   |
      | 8657WXY  | true   |
      | 9999ZZZ  | true   |
      | 0000bbb  | true   |
      | 4321fcd  | true   |
      | 5876jkl  | true   |
      | 9187mgh  | true   |
      | 9831nvt  | true   |
      | 5676prs  | true   |
      | 5566ywx  | true   |
      | 9999zzz  | true   |

## B - Invalid Plates

For invalid plates, we can define different sub-domains depending on the rules:


### B.1. Using invalid chars in the first four positions, in which only numbers are allowed. 

There are two different options here.

#### B.1.1 The user enters a char that is valid in other places of the plate (e.g. letters):

     | plate    | result |
     | Z050BCD  | false  |
     | 0B07BFG  | false  |
     | 10C0ZDC  | false  |
     | 200GMNP  | false  |
     
The test cases I’ve defined test a letter in each of the possible 4 positions in which  letters are not allowed. I’ve also used different letter to increase the combinations tested.

#### B.1.2 The user enters a char that is not a letter or number

     | plate    | result | 
     | $022ZYW  | false  |
     | 1.00BTS  | false  |
     | 36-6CDN  | false  |
     | 897&MPR  | false  |

As in B.1.1 I have followed the same approach to test at least every potential position in which this should not be allowed.

### B.2. Using invalid chars in the last three positions, in which only some letters are allowed. There are three different options here.

#### B.2.1 The user enters the invalid letters (vowels, Ñ, Q)

I try to test all the possible letters and using them in different positions to increase variability.

     | plate    | result |
     | 0235BBQ  | false  |
     | 0562BÑC  | false  |
     | 7463ABC  | false  |
     | 6713DEC  | false  |
     | 2598PSI  | false  |
     | 2233ROT  | false  |
     | 5235UFG  | false  |
     
#### B.2.2 The user enters a number in the last three positions:

     | plate    | result | 
     | 37459BB  | false  |
     | 8274D3F  | false  |
     | 0976HJ2  | false  |

I’ve followed the same approach to B.1.1 in order to test at least all the possible positions. 

#### B.2.3. The user enters a character different to letters or numbers in the last 3 positions.

     | plate    | result |
     | 0000Z.W  | false  |
     | 0000%DW  | false  |
     | 0000PP&  | false  | 

I’ve followed the same approach to B.1.2 in order to test at least all the possible positions.
