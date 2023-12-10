import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { getWindow } from "ssr-window";
import { ApiHandlerService } from './services/api-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isBrowserPaltform = false

  apiData:any
  constructor(@Inject(PLATFORM_ID) private _platformId: Object,private postsServices:ApiHandlerService) { }

  category320= [
    { "id": 1, "name": "إطفاء الحرائق" },
    { "id": 2, "name": "انذار السرقة" },
    { "id": 3, "name": "أنظمة المراقبة" },
    { "id": 4, "name": "أنظمة التحكم والوصول" },
    { "id": 5, "name": "السلامة المهنية" },
    // {"id":2,"name":"Fire Fighting"}
  ]
  category365= this.category320.concat( [
    { "id": 5, "name": "السلامة الطبية" },
  ])
 
  
  lang: any
  mode: any
  direction = "rtl"
  width: any

  initLang() {
    let l = localStorage.getItem("lang")
    if (l == null) {
      localStorage.setItem("lang", "ar")
      this.lang = "ar"
    }
    else {
      if (l == "en") {
        localStorage.setItem("lang", "en")
        this.lang = "en"
      }
      else {
        localStorage.setItem("lang", "ar")
        this.lang = "ar"
      }

    }
  }
  initMode() {
    let l = localStorage.getItem("mode")
    if (l == null) {
      localStorage.setItem("mode", "light")
      this.mode = "light"
    }
    else {
      if (l == "light") {
        localStorage.setItem("mode", "light")
        this.mode = "light"
      }
      else {
        localStorage.setItem("mode", "dark")
        this.mode = "dark"
      }

    }
  }
  switchLang() {
    let l = localStorage.getItem("lang")
    if (l == null) {
      localStorage.setItem("lang", "ar")
      this.lang = "ar"
    }
    else {
      if (l == "en") {

        localStorage.setItem("lang", "ar")
        this.lang = "ar"
      }
      else {
        localStorage.setItem("lang", "en")
        this.lang = "en"
      }

    }
  }
  switchMode() {
    let l = localStorage.getItem("mode")
    if (l == null) {
      localStorage.setItem("mode", "light")
      this.mode = "light"
    }
    else {
      if (l == "light") {
        localStorage.setItem("mode", "dark")
        this.mode = "dark"
      }
      else {
        localStorage.setItem("mode", "light")
        this.mode = "light"
      }

    }
  }



  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) {
      this.initLang()
      this.initMode()
     
    }
 this.width = getWindow().innerWidth;

    // this.postsServices.fetchDataFrpApi().subscribe((data)=>{
    //   this.apiData = data
    // })

   
  }
  //   @HostListener('window:resize',['$event'])
  //   getScreenSize() {
  //     this.width = window.innerWidth
  // }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width = window.innerWidth
  }
  title = 'مجموعة ابو عامر للامن والسلامة';
  al() {
    alert("mustafa")
  }
}
