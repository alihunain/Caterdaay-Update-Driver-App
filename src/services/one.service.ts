import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as globalVariable from "./global";
import 'rxjs/add/operator/map';

@Injectable()
export class OneService {
    constructor(private http: Http) { }
    signup(data) {
        return this.http.post(globalVariable.url1 + 'driver', data)
            .map(
            (response: Response) => response.json()
            );
    }
    login(data) {
        return this.http.post(globalVariable.url1 + 'driver/login', data)
            .map((response: Response) => {
                let owner = response.json();
                return owner;
            });
    }
    forgetPasswordOwner(data) {
        return this.http.post(globalVariable.url1 + 'owner/forget-password', data)
            .map((response: Response) => {
                let ower = response.json();
                return ower; 
            });
    }
    Getowner(id){
        return this.http.get(globalVariable.url1  + 'owners/' +  id).map((response: Response) => {
            let ower = response.json();
            return ower; 
        });
    }
    Notification(data){
        return this.http.post(globalVariable.url1 + "notifications",data)  .map((response: Response) => {
            let ower = response.json();
            return ower; 
        });
      }
    forgetPasswordDriver(data) {
        return this.http.post(globalVariable.url1 + 'driver/forget-password', data)
            .map((response: Response) => {
                let ower = response.json();
                return ower; 
            });
    }
    editDriver(data) {
        return this.http.put(globalVariable.url1 + 'driver/' + data._id, data)
            .map((response: Response) => response.json());
    }
    EmailDriverAccepted(data){
        return this.http.post(globalVariable.url1 + "order-email-driveraccepted",data).map((response:Response)=> response.json());
    }
    EmailOntheway(data){
        return this.http.post(globalVariable.url1 + "order-email-driveronway",data).map((response:Response)=> response.json());
    }
    EmailDelivery(data){
        return this.http.post(globalVariable.url1 + "order-email-delivered",data).map((response:Response)=> response.json());
    }
    getDriver(id) {
        return this.http.get(globalVariable.url1 + 'driver/' + id)
            .map((response: Response) => response.json());
    }
    passwordEditDriver(data) {
        return this.http.put(globalVariable.url1 + 'driver/change-password/' + data._id, data)
            .map(
            (response: Response) => response.json()
            );
    }
    getRestaurants(){
        return this.http.get(globalVariable.url1 + 'kitchen')
            .map((response: Response) => response.json());
    }
    getRestaurant(id) {
        return this.http.get(globalVariable.url1 + 'kitchen/' + id)
            .map((response: Response) => response.json());
    }
    updateRestaurantId(data){
        return this.http.put(globalVariable.url1 + 'driver/' + data.id, data)
            .map((response: Response) => response.json());
    }
    updateCustomer(data) {
		return this.http.put(globalVariable.url4+'customers/' +data._id ,data)
		.map(
			(response: Response) => response.json()
		);
    }
    editOwner(data){
        return this.http.put(globalVariable.url1 + 'owners/' + data._id, data)
            .map((response: Response) => response.json());
    }

}