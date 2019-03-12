import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;container
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName:new FormControl ('', [Validators.required]),
            lastName:new FormControl ('', [Validators.required]),
            email:new FormControl ('', [Validators.required, Validators.email]),
            password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
            phone_number:new FormControl ('', [Validators.required, Validators.minLength(10)]),
            address:new FormControl('', [ Validators.required]),
            line1:new FormControl('', [Validators.required]),
            line2:new FormControl('', [Validators.required]),
            state:new FormControl('', [Validators.required]),
            pincode:new FormControl('', [Validators.required,Validators.minLength(6)])
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }
}
