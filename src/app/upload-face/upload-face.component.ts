import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService, AuthService } from '../shared/shared.module';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
    selector: 'app-upload-face',
    templateUrl: './upload-face.component.html',
})
export class UploadFaceComponent implements OnInit{
    constructor(public element: ElementRef, public  route: ActivatedRoute, public  appService: AppService,public  authService: AuthService, public router: Router, public localStorage: LocalStorageService) {}
    ngOnInit (){}
    public isUploadFace = false;
    public apiResult: string;
    public apiResultMessage: string;
    public uploaded_face_1;
    public uploaded_face_2;
    public uploaded_face_3;

    public onUploadFace_1(event:any) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#upload_face_1');

        reader.onload = function(e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_face_1 = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    }

    public onUploadFace_2(event:any) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#upload_face_2');

        reader.onload = function(e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_face_2 = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    }

    public onUploadFace_3(event:any) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#upload_face_3');

        reader.onload = function(e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_face_3 = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    }

    public onSubmit() {
        this.appService.upload_face(this.uploaded_face_1).subscribe(result => {
            this.appService.detect_face(result['data'].link).subscribe(result => {
                console.log(result);
            });
        });
    }

    public onCancel() {
        this.router.navigate(['/dashboard']);
    }
    
}
