import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subcategory-page.component.html',
  styleUrl: './subcategory-page.component.css'
})
export class SubcategoryPageComponent {
  name: any
  constructor(public route: ActivatedRoute) { }

  // subCategory(id:any,name:string,sub:any) {
  //   return {
  //     "id":id,
  //     "sub_category_name":name,
  //     "sub_sub_categories":sub
  //   }
  // }
  subCategory(id:any,name:string,image:any) {
    return {
      "id":id,
      "sub_category_name":name,
      "sub_category_image":image
    }
  }
  subcategoriesFireExtinguthers = [
     this.subCategory(1,"طفايات حريق(غاز)","../assets/fire-fighting/fire-extinguthers/co2/co2.png"),
     this.subCategory(1,"طفايات حريق(رغوة)","../assets/fire-fighting/fire-extinguthers/foam/foam.png"),
     this.subCategory(1,"طفايات حريق(بودر)","../assets/fire-fighting/fire-extinguthers/powder/powder.png"),
     this.subCategory(1,"طفايات حريق(ماء)","../assets/fire-fighting/fire-extinguthers/water/water.png")
    ]
    subcategoriesFireAlarmSystem = [
      this.subCategory(1,"أنظمة انذار الحريق","../assets/fire-fighting/fire-alarm-system/system/system.webp"),
     ]
     subcategoriesFireSuppressionSystem = [
      this.subCategory(1,"FM200","../assets/fire-fighting/fire-alarm-system/system/FM200/FM200.jpg"),
      this.subCategory(1,"CO2","../assets/fire-fighting/fire-alarm-system/system/FM200/FM200.jpg"),
     ]

  categories =[
    {"id":1,"name":"طفايات حريق","sub_categories":this.subcategoriesFireExtinguthers},
    {"id":2,"name":"انذار الحريق","sub_categories":this.subcategoriesFireAlarmSystem},
    {"id":3,"name":"انظمة الاطفاء بالرش","sub_categories":this.subcategoriesFireSuppressionSystem},
    {"id":4,"name":"معدات اطفاء الحريق","sub_categories":this.subcategoriesFireExtinguthers},
    {"id":5,"name":"معدات السلامة","sub_categories":this.subcategoriesFireExtinguthers},
    {"id":6,"name":"انظمة انذار الحريق","sub_categories":this.subcategoriesFireExtinguthers},
    // this.subCategory(1,"طفايات الحريق","sub_categories":this.subsubcategoriesFireExtinguthers),
    // this.subCategory(2,"انذار الحريق","../assets/fire-fighting/fire-alarm.jpg"),
    // this.subCategory(3,"انظمة الاطفاء بالرش","../assets/fire-fighting/fire-suppression-system.jpg"),
    // this.subCategory(4,"معدات اطفاء الحريق","../assets/fire-fighting/fire-fighting-equipment.jpg"),
    // this.subCategory(4,"معدات السلامة","../assets/fire-fighting/saftey-equipment.jpg"),
    // this.subCategory(2,"انظمة انذار الحريق","../assets/image1.jpg")
  ]

  

  ngOnInit() {
    
    this.route
      .params
      .subscribe(params => {
        this.name = this.route.snapshot.paramMap.get('name');
        window.scrollTo({top:0})
        console.log("called for: " + this.name);
      });
  }

}
