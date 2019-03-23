const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize=maxSize||30;
		const heap= new MaxHeap();
		this.heap=heap;
	}

	push(data, priority) {
		if (this.maxSize>this.size()){
			this.heap.push(data,priority);
		}
		else {
			throw new Error('queue has max size');
		}
		
	}

	shift() {
		if(this.isEmpty()) {
			throw new Error('queue is empty');
		}	
		let result = this.heap.pop();
		return result;

	}

	size() {

		return this.heap.size();

	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
