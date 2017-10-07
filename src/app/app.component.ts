import { Component } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public email = 'appu da';
  public email: string;
  // public stat : boolean;
  stat = false;
  public item: string;
  arr=['p1', 'p2', 'p3', 'p4'];


  public fun(){
  	// arr.map
  	if(this.arr.filter((data)=>data==this.item).length == 0){
	  	this.arr.push(this.item);
	  	console.log("array", this.arr);
	 }else{
	 	swal('error', 'Same Content', 'error')
	 	console.log("Array Contain Our Element");
	 }
  }
  public del(index){
  	this.arr.splice(index, 1);
  	console.log("array", this.arr); 
  }
}
