import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueAliasesValidator } from './unique-aliases-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  profileForm = new FormGroup({
    aliases: new FormArray([
      new FormControl(""),
      new FormControl("")
    ])
  })

  constructor(private uniqueAliasesValidator: UniqueAliasesValidator){ }
  
  get aliases(){
    return this.profileForm.get("aliases") as FormArray;
  }

  controls(){
    const controls = this.aliases.controls;
    console.log(controls);
    return controls;
  }

  length(){
    console.log(this.aliases.length);
  }

  atFirst(){
   console.log(this.aliases.at(0));
  }

  push(){
    this.aliases.push(new FormControl(""));
  }

  insertFirst(){
    this.aliases.insert(0, new FormControl(""));
  }

  removeAtFirst(){
    this.aliases.removeAt(0);
  }

  setFirstControl(){
   this.aliases.setControl(0, new FormControl(""));
  }

  clear(){
    this.aliases.clear();
  }

  value(){
   console.log(this.aliases.value);
  }

  validator(){
    console.log(this.aliases.validator);
  }

  asyncValidator(){
    console.log(this.aliases.asyncValidator);
  }

  parent(){
    console.log(this.aliases.parent);
  }

  status(){
    console.log(this.aliases.status);
  }

  valid(){
    console.log(this.aliases.valid);
  }

  invalid(){
    console.log(this.aliases.invalid);
  }

  pending(){
    console.log(this.aliases.pending);
  }

  disabled(){
    console.log(this.aliases.disabled);
  }

  enabled(){
    console.log(this.aliases.enabled);
  }

  errors(){
    console.log(this.aliases.errors);
  }

  pristine(){
    console.log(this.aliases.pristine);
  }

  dirty(){
    console.log(this.aliases.dirty);
  }

  touched(){
    console.log(this.aliases.touched);
  }

  untouched(){
    console.log(this.aliases.untouched);
  }

  valueChanges(){
    this.aliases.valueChanges.subscribe((values)=>{
      console.log(values);
    })
  }

  statusChanges(){
    this.aliases.statusChanges.subscribe((status)=>{
      console.log(status);
    })
  }

  updateOn(){
    console.log(this.aliases.updateOn);
  }

  root(){
    console.log(this.aliases.root);
  }

  setRequiredValidator(){
    this.aliases.setValidators(Validators.required);
  }

  setUniqueAliasValidator(){
    this.aliases.setAsyncValidators(this.uniqueAliasesValidator.validate.
      bind(this.uniqueAliasesValidator));
  }

  addRequiredValidator(){
    this.aliases.addValidators(Validators.required);
  }

  addUniqueAliasAsyncValidator(){
    this.aliases.addAsyncValidators(this.uniqueAliasesValidator.validate.
      bind(this.uniqueAliasesValidator));
  }

  removeRequiredValidator(){
    this.aliases.removeValidators(Validators.required);
  }

  removeUniqueAliasAsyncValidator(){
    this.aliases.removeAsyncValidators(this.uniqueAliasesValidator.validate.
      bind(this.uniqueAliasesValidator));
  }

  hasRequiredValidator(){
    console.log(this.aliases.hasValidator(Validators.required));
  }

  hasUniqueAliasAsyncValidator(){
    console.log(this.aliases.hasAsyncValidator(this.uniqueAliasesValidator.validate.
      bind(this.uniqueAliasesValidator)));
  }

  clearValidators(){
    this.aliases.clearValidators();
  }

  clearAsyncValidators(){
    this.aliases.clearAsyncValidators();
  }

  markAsTouched(){
    this.aliases.markAsTouched();
  }

  markAllAsTouched(){
    this.aliases.markAllAsTouched();
  }

  markAsUntouched(){
    this.aliases.markAsUntouched();
  }

  markAsDirty(){
    this.aliases.markAsDirty();
  }

  markAsPristine(){
    this.aliases.markAsPristine();
  }

  markAsPending(){
    this.aliases.markAsPending();
  }

  disable(){
    this.aliases.disable();
  }

  enable(){
    this.aliases.enable();
  }

  setParent(){
    this.aliases.setParent(new FormGroup({}));
  }

  setValue(){
    this.aliases.setValue([
      "Pacho",
      "Robin" 
    ])
  }

  patchValueFirst(){
    this.aliases.patchValue([
      "Pacho" 
    ])
  }

  reset(){
    this.aliases.reset();
  }

  getRawValue(){
    console.log(this.aliases.getRawValue());
  }

  updateValueAndValidity(){
    this.aliases.updateValueAndValidity();
  }

  setRequiredError(){
    this.aliases.setErrors({
      required: true
    })
  }

  getRequiredtError(){
    console.log(this.aliases.getError('required'));
  }

  hasRequiredError(){
    console.log(this.aliases.hasError('required'));
  }

}

