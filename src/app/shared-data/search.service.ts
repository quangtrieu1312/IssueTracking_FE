import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchBox = new BehaviorSubject('');
  currentSearchBox = this.searchBox.asObservable();
  constructor() { }

  changeSearchBox(searchBox: string){
    this.searchBox.next(searchBox);
  }
}
