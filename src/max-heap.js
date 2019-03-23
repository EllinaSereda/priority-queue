const Node = require('./node');
class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.HeapSize=0;
	}

	push(data, priority) {
		this.HeapSize++;
		const node = new Node(data, priority);
    	this.insertNode(node);
    	this.shiftNodeUp(node);
	}

	pop() {
		this.HeapSize--;
		if (this.isEmpty()) return;
		else{
			let fakeDetachedNode = this.detachRoot();
			this.restoreRootFromLastInsertedNode(fakeDetachedNode);
			this.shiftNodeDown(this.root);
			return fakeDetachedNode.data;
		}
		
	}

	detachRoot() {
		let root = this.root;
		this.root = null;
		this.parentNodes = this.parentNodes.filter((v,i) => {return v!==root});
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.HeapSize;
	}

	isEmpty() {
		if (this.root==null){
			return true;
		}
		else return false;
		
	}

	clear() {
		this.HeapSize=0;
		this.root = null;
		this.parentNodes = [];
		
	}

	insertNode(node) {
		if(!this.root) {
			this.root = node;
		} 
		else {
			this.parentNodes[0].appendChild(node);
		}
		this.parentNodes.push(node);
		if(this.parentNodes[0].left && this.parentNodes[0].right) {
			this.parentNodes.shift()
		};
		  
		
	}

	shiftNodeUp(node) {
		if(node.parent != null && node.parent.priority < node.priority) {
			let elem = null;
			let parent = null;
			this.parentNodes.forEach((v, i, a) => {
			  if(v === node) elem = i;
			  if(v === node.parent) parent = i;
			});
			if(elem !== null && parent !== null) {
				let x = this.parentNodes[elem];
				this.parentNodes[elem] = this.parentNodes[parent];
				this.parentNodes[parent] = x;
			}
			if(elem !== null && parent === null) {
			  this.parentNodes[elem] = node.parent;
			}
	  
			node.swapWithParent();
			if(node.parent==null) {
				this.root = node;
			}
			this.shiftNodeUp(node);
		}
		
	}

	shiftNodeDown(node) {
		
		
	}
}

module.exports = MaxHeap;
