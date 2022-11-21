import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

   menuClick = new BehaviorSubject(false);

  constructor() { }
}
