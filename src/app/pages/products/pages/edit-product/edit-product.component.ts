import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductComponent implements OnInit {
  public editProductForm: FormGroup;

  constructor(private _productService: ProductService, private _route: ActivatedRoute, private _fb: FormBuilder) {
    this.editProductForm = this._fb.group({
      title: new FormControl("", [Validators.required, Validators.maxLength(50)]),
      description: ["", [Validators.required, Validators.pattern]]
    });
  }

  // public password(control: FormControl) {
  //   if (new RegExp("abc", "g").test.control.value)
  //   return { password: true }
  // }

  public ngOnInit() {
    // this._route.params.subscribe(params => {
    //   console.log("id!!", params["id"]);
    // });

    let id =  +this._route.snapshot.params["id"];
    this._productService.getProductById(id).subscribe(data => {
      console.log("data!!", data);
      this.editProductForm.patchValue(data);
    });
    this.editProductForm.controls['title'].valueChanges.subscribe(val => {
      console.log("value!!", val);
    })
  }

  public submit() {
    console.log("title!!", );
    if (this.editProductForm.valid) {
      console.log("value!!", this.editProductForm.value);
    }

  }
}
