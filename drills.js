// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        // If the stack is empty, then this node will be the top of the stack 
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        // If the stack is not empty, then create a new node, add data to the new node, and have the pointer point to the top 
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        // In order to remove the top of the stack, you have to point the pointer to the next item and that next item becomes the top of the stack 
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        // if nothing is in the stack:
        if(!this.top) {
            console.log('Stack is empty!');
        } // return the value otherwise
        console.log(this.top.value);
    }
}

class Queue {
    constructor() {
      this.first = null
      this.last = null
      this.length = 0
    }
  
    enqueue(item) {
      const newNode = new _Node(item)
      if(!this.first) {
        this.first = newNode
      }
      else if(this.last) {
        this.last.next = newNode
      }
      this.last = newNode
      this.length++
    }
  
    dequeue() {
      if(this.first === null) {
        return;
      }
      const node = this.first;
      this.first = this.first.next;
  
      if(node === this.last) {
        this.last = null;
      }
      this.length--
      return node.data;
    }
}

 let starTrek = new Stack();
 starTrek.push('Kirk');
 starTrek.push('Spock');
 starTrek.push('McCoy');
 starTrek.push('Scotty');

 starTrek.pop('McCoy');

 
 // a word, phrase or number that's the same backwards & forwards
 function is_palindrome(s) { 
     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

     let newStack = new Stack();
     s.split('').foEach((char) => {
         // add each character to the stack after splitting
         newStack.push(char); 
     });
     // start with empty string
     let reverseString = ''; 
     let count = 0;
     while (count < s.length) {
         count++;
         // pop out each character
         reverseString += newStack.pop(); 
     }
     return s = reverseString;
 }

 // True, true, true, false
 console.log(is_palindrome("dad"));
 console.log(is_palindrome("A man, a plan, a canal: Panama"));
 console.log(is_palindrome("1001"));
 console.log(is_palindrome("Tauhida"));

 // Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }

   peek() {
       if (!this.first) {
           console.log(`Queue is empty!`);
       }
       console.log(`Queue has: ${this.first.value}`);
   }
}

const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
// will remove Kirk, not Spock ... 
starTrekQ.dequeue();  


function isEmpty(queue) {
    if (!queue.first) {
        return 'Queue is empty'
    } else {
        return 'Queue is not empty'
    }
}
console.log(isEmpty(starTrekQ))

function display(queue) {
    let current = queue.first;
    // while current is not null?
    while (current) {   
        console.log(curren.value);
        current = current.next;
    }
}

display(starTrekQ);

const fQueue = new Queue()
const mQueue = new Queue()

function pairDancers(dancers) {
  dancers.forEach(dancer => {
    if(dancer[0] === 'F') {
      fQueue.enqueue(dancer)
    }
    else {
      mQueue.enqueue(dancer)
    }
    if(fQueue.first && mQueue.first) {
      let maleDancer = mQueue.dequeue()
      let femDancer = fQueue.dequeue()
      console.log(`${femDancer} is paired with ${maleDancer}`)
    }
  })
  if(mQueue.length > 0) {
    console.log(`There are ${mQueue.length} male dancers waiting to dance`)
    } 
    else if (fQueue.length > 0) {
      console.log(`There are ${fQueue.length} female dancers waiting to dance`)
    }
}

// console.log(pairDancers([
//   'F Jane',
//   'M Frank',
//   'M John',
//   'M Sherlock',
//   'F Madonna',
//   'M David',
//   'F Beyonce'
// ]))


const bankQueue = new Queue()
bankQueue.enqueue('Elan')
bankQueue.enqueue('Makua')
bankQueue.enqueue('Teddy')
bankQueue.enqueue('Fred')

function ophidianBank(queue) {
  while(queue.length > 0) {
    if(Math.random() <= .25) {
      let firstPerson = queue.first
      queue.dequeue()
      queue.enqueue(firstPerson.data)
      console.log(`${firstPerson.data} has been moved to the end of the queue.`)
    }
    else {
      console.log(`${queue.first.data} has been served.`)
      queue.dequeue()
    }
  }
}

ophidianBank(bankQueue)