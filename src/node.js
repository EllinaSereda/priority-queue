class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if (this.left==null){
			this.left=node;
			node.parent=this;
		}
		else if (this.right==null) {
			this.right=node;
			node.parent=this;

		}
			
	}

	removeChild(node) {
		if (node==this.left){
			this.left=null;
			node.parent=null;
		}
		else if (node==this.right){
			this.right=null;
		}
		else throw new Error('passed node is not a child of this node');

	}

	remove() {
		if (this.parent!=null){
			this.parent.removeChild(this)
		}
	}

	swapWithParent() {
		if(!this.parent) return;
		let parent = this.parent;
		let thisEl = this;
		let left = this.left;
		let right = this.right;
		
	
		if(this.parent.left === this) {
		  this.left = this.parent;
		  this.right = this.parent.right;
		  if(this.right!=null){
				this.right.parent = thisEl;
			}
		} 
		else if (this.parent.right === this){
			this.right =  this.parent;
			this.left = this.parent.left;
			this.left.parent = thisEl;
		}


		if (this.parent.left === this){
			
		}
		
	
		this.parent.left = left;
		this.parent.right = right;

		if(this.parent.right!=null){
			this.parent.right.parent = this.parent;
		}
		if(this.parent.left!=null){
			this.parent.left.parent = this.parent;
		}
			
		if(this.parent.parent!=null) {
		  if(this.parent.parent.left === parent) {
			this.parent.parent.left = thisEl;
		  } 
		  else if(this.parent.parent.right === parent) {
			this.parent.parent.right = thisEl;
		  }
		}
		this.parent = this.parent.parent;
		if(this.left === parent) {
		  this.left.parent = thisEl;
		} 
		else if (this.right === parent){
		  this.right.parent = thisEl;
		}
	}
}

module.exports = Node;
