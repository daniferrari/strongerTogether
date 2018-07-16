import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  players =  {
    number: 1,
    age: 30
}

  constructor(
    database: AngularFireDatabase
  ) { }

  ngOnInit() {
    console.log("players/")
    var playersRef = firebase.database().ref("players/").set(
      this.players, function(error)
      {
        if(error){
      } else {}
    }
    )

  }

}
