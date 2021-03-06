import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServiceService} from '../../../helper/service.service';


@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  angForm: FormGroup;
  service: any = {};
  nesar: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ms: ServiceService,
              private fb: FormBuilder) {
              this.createForm();
              }

    createForm(){
      this.angForm = this.fb.group({
        serviceName: ['', Validators.required],
        serviceKeeCode: ['', Validators.required],
        description: ['', Validators.required],
        specifications: ['', Validators.required],
        moreInfo: ['', Validators.required],
      });
    }
      updateService(serviceName, serviceKeeCode,  description, specifications, moreInfo){
        this.route.params.subscribe(params => {
          this.ms.updateService(serviceName, serviceKeeCode,  description, specifications, moreInfo, params.id);
          this.router.navigate(['services']);
        });

      }

      ngOnInit(): void {
        this.route.params.subscribe(params => {
          this.ms.editService(params[`id`]).subscribe(res => {
            this.service = res;
            console.log('hwllo', this.service);
            this.nesar = this.service.doc;
            console.log('nesar', this.nesar);

          });
        });
      }

}
