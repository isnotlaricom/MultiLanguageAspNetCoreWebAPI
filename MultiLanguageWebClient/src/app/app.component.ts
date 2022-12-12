import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiLanguageWebClient';

  selectedLanguage :any;

  api = "https://localhost:44303/api/"

  languages = [
    { name : "Türkçe",  code:"tr-TR",  "flag":"" },
    { name : "English", code:"en-US",  "flag":"" }
  ];

  
  constructor(private http:HttpClient) {

  }

  ngOnInit(){
    if(localStorage.getItem("lang") == null || localStorage.getItem("lang") == undefined ){
      this.selectedLanguage = this.languages[0].code;
      localStorage.setItem("lang", this.languages[0].code);
    }else{
      this.selectedLanguage = localStorage.getItem("lang");
    }
    this.getHomePageData();
  }

  languageChanged(){
    localStorage.setItem("lang", this.selectedLanguage);
    this.getHomePageData();
  }

  pageTitle = "";
  pageContent = "";
  getHomePageData(){
    this.http.get(this.api + 'home')
      .subscribe({
        next: (v: any) => {
          console.log(v);
          this.pageTitle = v["title"];
          this.pageContent = v["content"];
        },
        error: (e) => { }, //console.log(e) },
        complete: () => {
        }
      });
  }


}
