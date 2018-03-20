import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server  = 'http://192.168.25.251:8091/';
    public headers = {'Content-Type':'application/json'} 
    public ApiUrl  = 'api/';
    public AuthUrl = 'auth/login';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ServerWithAuthUrl =   this.Server + this.AuthUrl;
}