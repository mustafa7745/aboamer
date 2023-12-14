import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import { getWindow } from "ssr-window";
import { ApiHandlerService } from './services/api-handler.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isBrowserPaltform = false

  apiData:any
  constructor(@Inject(PLATFORM_ID) private _platformId: Object,private postsServices:ApiHandlerService) { }

//   var donut: DonutChartModel = {
//     dimension: 1,
//     innerRadius: 2
// };

subCategory(id:any,name:string,image:string) {
  return {
    "id":id,
    "sub_category_name":name,
    "sub_category_image":image
  }
}
subCategoriesFireFighting =[
  this.subCategory(1,"طفايات الحريق","../assets/fire-fighting/fire-extinguthers.jpg"),
  this.subCategory(2,"انذار الحريق","../assets/fire-fighting/fire-alarm.jpg"),
  this.subCategory(3,"انظمة الاطفاء بالرش","../assets/fire-fighting/fire-suppression-system.jpg"),
  this.subCategory(4,"معدات اطفاء الحريق","../assets/fire-fighting/fire-fighting-equipment.jpg"),
  this.subCategory(4,"معدات السلامة","../assets/fire-fighting/saftey-equipment.jpg"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]
subCategoriesBurgularAlarm =[
  this.subCategory(1,"انظمة انذار السرقة","../assets/burglar-alarm/burglar-alarm-system.webp"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]
subCategoriesSurvSystem =[
  this.subCategory(1,"كاميرات - شاشات - انظمة","../assets/surv/surv-system.jpg"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]
subCategoriesAccessControl =[
  this.subCategory(1,"اجهزة الدخول - انظمة الدخول","../assets/access-control/Access_Control.webp"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]
subCategoriesSafety =[
  this.subCategory(1,"السلامة المهنية","../assets/safety/safety.jpg"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]
subCategoriesMedicalSafety =[
  this.subCategory(1,"معدات السلامة الطبية","../assets/medical-safety/medical-safety.jpg"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]
subCategoriesOtherProducts =[
  this.subCategory(1,"اجهزة طرد الفئران","../assets/other-products/mouse-out.jpg"),
  // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
]

my = 0


  category= [
    { "id": 1, "name": "إطفاء الحرائق" , "sub_categories":this.subCategoriesFireFighting },
    { "id": 2, "name": "انذار السرقة" , "sub_categories":this.subCategoriesBurgularAlarm  },
    { "id": 3, "name": "أنظمة المراقبة" ,"sub_categories":this.subCategoriesSurvSystem},
    { "id": 4, "name": "أنظمة التحكم والوصول" ,"sub_categories":this.subCategoriesAccessControl},
    { "id": 6, "name": "السلامة المهنية" ,"sub_categories":this.subCategoriesSafety},
    { "id": 7, "name": "السلامة الطبية" ,"sub_categories":this.subCategoriesMedicalSafety},
    { "id": 8, "name": "منتجات اخرى","sub_categories":this.subCategoriesOtherProducts }
  ]
  // category375_425= this.category0_374.concat( [
  //   ,
  // ])
 
  // category426_580= this.category375_425.concat( [
  //  ,
  // ])
  
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
      console.log(this.category)
      this.initLang()
      this.initMode()
     
    }


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
