import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server  = 'http://201.38.172.82:8001/';
    public headers = {'Content-Type':'application/json'} 
    public ApiUrl  = 'api/';
    public AuthUrl = 'auth/login';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ServerWithAuthUrl =   this.Server + this.AuthUrl; 
}