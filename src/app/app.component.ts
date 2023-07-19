import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name:any;
 character:any;
 words:any;
 wordCount: any;
 @ViewChild("text")
  text!: ElementRef;
 constructor(){}
 calString() {
  this.character = this.calLength(this.name);
  
}
calLength(string: any){
  var length = 0;
      for (var i in string){
        length++;
      }
      return length;
}
calWord(){
  this.words = this.wordCounter(this.name);
}
wordCounter(string:any) {
  
  this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
  this.words = this.wordCount ? this.wordCount.length : 0;
  return this.words;
}
}
