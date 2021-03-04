// Functions should be short and do exactly one thing. 
// If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.

// A separate function is not only easier to test and debug – 
// its very existence is a great comment!

// For instance, compare the two functions showPrimes(n) below. 
// Each one outputs prime numbers up to n.

// The first variant uses a label:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

// The second variant uses an additional function isPrime(n) to test for primality:

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// The second variant is easier to understand, isn’t it? 
// Instead of the code piece we see a name of the action (isPrime). 
// Sometimes people refer to such code as self-describing.

// So, functions can be created even if we don’t intend to reuse them. 
// They structure the code and make it readable.

