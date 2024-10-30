import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log("Nome:", form.value.name);
      console.log("Email:", form.value.email);
    } else {
      console.log("Formulário inválido.");
    }
  }
}

