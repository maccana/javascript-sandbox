/**
 * A Queue is a data structure similar to a Stack.
 * The Queue differs in that it is works on a FIFO or "first come first served" principal 
 * such that items are always removed from the top/front of the Queue. In other words they 
 * are removed in according to the order in which they are added, ie. the first element 
 * added will be the first removed. This is achieved using Array.shift() method. 
 */

function Queue(arr) {

    // Private var to store the array for the queue
    var items = arr ? arr : [];
    //console.log("items ", items);
    var cnt = 0;

    /**  Queue Methods **/
    // enqueue adds a new item(s) to the back of the queue
    this.enqueue = function(element){
      
      if(element) {
        items.push(element); 
        cnt++;
        console.log('The ' + cnt + ' element passed was a', element);
        this.print();
      } 
      else {
        console.log('No element passed');
      }
       
    };

    // dequeque removes the first item in the queue and also returns it
    this.dequeue = function(){
       return items.shift(); // Note the use of shift method and not pop
       this.print();
    };

    // front returns the first item in the queue - whatever is at the front of the queue
    this.front = function(){
       return items[0];
    };

    // isEmpty returns true if queue is empty and false otherwise
    // The method simply verifies that the length of the array == 0
    this.isEmpty = function(){
       return items.length == 0;
    };

    // size returns the length of the array
    this.size = function(){
        return items.length;
    }

    // print method will display the array to the console for inspection
    this.print = function(){
        console.log('Current Animal List :: ', items.toString());         
    };


}

// Test the Queue Class
var q1 = new Queue(['rabbit', 'dog', 'pelican', 'cat']);

var q2 = new Queue(); // This will be initialised with an empty items array


// Test passing no element to enqueue
q1.enqueue();

q1.enqueue('monkey'); // -> ['rabbit', 'dog', 'pelican', 'cat', 'monkey']
//q1.print('testQueue after first enqueue ');

q1.dequeue(); // -> ['dog', 'pelican', 'cat', 'monkey']
//q1.print('Message from the Pet Centre ');

q1.dequeue(); // -> ['dog', 'pelican', 'cat'];
//q1.print();

q1.enqueue('parrot');
q1.enqueue('goldfish');

q1.dequeue();
//q1.print();


