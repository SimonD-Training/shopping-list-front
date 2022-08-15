import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/categories.interface';
import { Item } from '../interfaces/item.interface';
import { JSONResponse } from '../interfaces/json_response.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private http: HttpClient) {}

  createItem(body: Item) {
    let obs = new Observable<Item | null>((observer) => {
      this.http.post<JSONResponse<Item>>(environment.apiUrl + "/shopping_list", body, {observe: "response"}).subscribe({
        next: (response) => {        
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }

  createCategory(body: Category) {
    let obs = new Observable<Category | null>((observer) => {
      this.http.post<JSONResponse<Category>>(environment.apiUrl + "/categories", body, {observe: "response"}).subscribe({
        next: (response) => {        
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }
  
  getItems() {
    let obs = new Observable<Item[] | null>((observer) => {
      this.http.get<JSONResponse<Item[]>>(environment.apiUrl + "/shopping_list", {observe: "response"}).subscribe({
        next: (response) => {         
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }

  getCategories() {
    let obs = new Observable<Category[] | null>((observer) => {
      this.http.get<JSONResponse<Category[]>>(environment.apiUrl + "/categories", {observe: "response"}).subscribe({
        next: (response) => {         
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }
  
  updateItem(id:string, body: Item) {
    let obs = new Observable<Item | null>((observer) => {
      this.http.patch<JSONResponse<Item>>(environment.apiUrl + `/shopping_list/${id}`, body, {observe: "response"}).subscribe({
        next: (response) => {         
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }

  updateCategory(id:string, body: Category) {
    let obs = new Observable<Category | null>((observer) => {
      this.http.patch<JSONResponse<Category>>(environment.apiUrl + `/categories/${id}`, body, {observe: "response"}).subscribe({
        next: (response) => {         
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }

  deleteItem(id:string) {
    let obs = new Observable<Item | null>((observer) => {
      this.http.delete<JSONResponse<Item>>(environment.apiUrl + `/shopping_list/${id}`, {observe: "response"}).subscribe({
        next: (response) => {         
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }

  deleteCategory(id:string) {
    let obs = new Observable<Category | null>((observer) => {
      this.http.delete<JSONResponse<Category>>(environment.apiUrl + `/categories/${id}`, {observe: "response"}).subscribe({
        next: (response) => {         
          if (response.body?.data) observer.next(response.body.data);
          observer.complete();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          observer.next(null);
          observer.complete();
        },
      });
    });
    return obs;
  }

}
