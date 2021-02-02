import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-eggdonation',
  templateUrl: './eggdonation.component.html',
  styleUrls: ['./eggdonation.component.css']
})
export class EggdonationComponent implements OnInit {

  showForm: boolean = true;

  form: FormGroup = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    photos: new FormControl('', Validators.required),
    streetAdd: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(0),
    state_fill: new FormControl(''),
    outside_USA: new FormControl(''),
    city_country_residence: new FormControl(''),
    zip_code: new FormControl(''),
    telephone_number: new FormControl(''),
    email: new FormControl(''),
    contact_method: new FormControl(0),
    others_contact_method: new FormControl(''),
    birthDate: new FormControl(''),
    age: new FormControl(''),
    reason_egg_donor: new FormControl(''),
    active_donor: new FormControl(''),
    experience: new FormControl(0),
    times_donated_eggs: new FormControl(0),
    race: new FormControl(''),
    registered_BIA: new FormControl(0),
    eye_color: new FormControl(0),
    hair_color: new FormControl(0),
    bodyType: new FormControl(0),
    other_bodyType: new FormControl(''),
    hairType: new FormControl(0),
    other_hairType: new FormControl(''),
    complexion: new FormControl(0),
    other_complexion: new FormControl(''),
    dominant_hand: new FormControl(0),
    freckles: new FormControl(0),
    bloodType: new FormControl(0),
    highest_level_education: new FormControl(0),
    highSchool_name: new FormControl(''),
    university_name: new FormControl(''),
    highSchool_GPA: new FormControl(''),
    university_GPA: new FormControl(''),
    highSchool_major: new FormControl(''),
    university_major: new FormControl(''),
    highSchool_degree: new FormControl(''),
    university_degree: new FormControl(''),
    other_major: new FormControl(''),
    other_degree: new FormControl(''),
    strongest_subjects: new FormControl(''),
    weakest_subjects: new FormControl(''),
    awards: new FormControl(''),
    country_birth: new FormControl(''),
    marital_status: new FormControl(0),
    personality: new FormControl(''),
    schedule_flexible: new FormControl(''),
    career_goals: new FormControl(''),
    languages_speak: new FormControl(''),
    musical_talent: new FormControl(''),
    artistic_talent: new FormControl(''),
    athletic_talent: new FormControl(''),
    hobbies: new FormControl(''),
    vision: new FormControl(0),
    following: new FormControl(0),
    teeth: new FormControl(0),
    periodontal_work: new FormControl(0),
    hearing: new FormControl(0),
    baldness: new FormControl(0),
    baldness_family: new FormControl(0),
    graying: new FormControl(0),
    under_physicians: new FormControl(0),
    psychiatrist: new FormControl(0),
    yes_psychiatrist: new FormControl(''),
    medications: new FormControl(0),
    past_illness: new FormControl(0),
    yes_past_illness: new FormControl(''),
    anesthesia: new FormControl(0),
    yes_anesthesia: new FormControl(''),
    blood_transfusion: new FormControl(0),
    yes_blood_transfusion: new FormControl(''),
    refused_blood_donor: new FormControl(0),
    yes_refused_blood_donor: new FormControl(''),
    allergies: new FormControl(0),
    bioChildren: new FormControl(''),
    list_ages_children: new FormControl(''),
    contraception: new FormControl(0),
    other_contraception: new FormControl(''),
    age_started_period: new FormControl(''),
    are_cycles_regular: new FormControl(''),
    cycle_length: new FormControl(''),
    recent_pap: new FormControl(''),
    recent_results: new FormControl(''),
    previous_results: new FormControl(''),
    AIDS_Me: new FormControl(false),
    AIDS_Partner: new FormControl(false),
    AIDS_None: new FormControl(false),
    Chlamydia_Me: new FormControl(false),
    Chlamydia_Partner: new FormControl(false),
    Chlamydia_None: new FormControl(false),
    Genital_Herpes_Me: new FormControl(false),
    Genital_Herpes_Partner: new FormControl(false),
    Genital_Herpes_None: new FormControl(false),
    Genital_Sores_Me: new FormControl(false),
    Genital_Sores_Partner: new FormControl(false),
    Genital_Sores_None: new FormControl(false),
    Gonorrhea_Me: new FormControl(false),
    Gonorrhea_Partner: new FormControl(false),
    Gonorrhea_None: new FormControl(false),
    HIV_Me: new FormControl(false),
    HIV_Partner: new FormControl(false),
    HIV_None: new FormControl(false),
    NSU_Me: new FormControl(false),
    NSU_Partner: new FormControl(false),
    NSU_None: new FormControl(false),
    Penis_Discharge_Me: new FormControl(false),
    Penis_Discharge_Partner: new FormControl(false),
    Penis_Discharge_None: new FormControl(false),
    Syphilis_Me: new FormControl(false),
    Syphilis_Partner: new FormControl(false),
    Syphilis_None: new FormControl(false),
    Trichomonas_Me: new FormControl(false),
    Trichomonas_Partner: new FormControl(false),
    Trichomonas_None: new FormControl(false),
    Venereal_Warts_Me: new FormControl(false),
    Venereal_Warts_Partner: new FormControl(false),
    Venereal_Warts_None: new FormControl(false),
    Viral_Hepatitis_B_or_C_Me: new FormControl(false),
    Viral_Hepatitis_B_or_C_Partner: new FormControl(false),
    Viral_Hepatitis_B_or_C_None: new FormControl(false),
    Other_Me: new FormControl(false),
    Other_Partner: new FormControl(false),
    Other_None: new FormControl(false),
    ever_had: new FormControl(),
    smoking: new FormControl(''),
    alcohol: new FormControl(''),
    marijuana: new FormControl(''),
    other_drugs: new FormControl(''),
    tattoos: new FormControl(''),
    body_piercing: new FormControl(''),
    acupuncture: new FormControl(''),
    times_arrested: new FormControl(''),
    times_convicted: new FormControl(''),
    misdemeanors: new FormControl(''),
    felonies: new FormControl(''),
    incarceration: new FormControl(''),
    most_incarceration: new FormControl(''),
    adopted: new FormControl(''),
    siblings: new FormControl(''),
    maternal_grandmother: new FormControl(''),
    maternal_grandfather: new FormControl(''),
    paternal_grandmother: new FormControl(''),
    paternal_grandfather: new FormControl(''),
    mother_race: new FormControl(''),
    mother_height: new FormControl(''),
    mother_bone_structure: new FormControl(''),
    father_race: new FormControl(''),
    father_height: new FormControl(''),
    father_bone_structure: new FormControl(''),
    Maternal_Grandmother_race: new FormControl(''),
    Maternal_Grandmother_height: new FormControl(''),
    Maternal_Grandmother_bone_structure: new FormControl(''),
    Maternal_Grandfather_race: new FormControl(''),
    Maternal_Grandfather_height: new FormControl(''),
    Maternal_Grandfather_bone_structure: new FormControl(''),
    Paternal_Grandmother_race: new FormControl(''),
    Paternal_Grandmother_height: new FormControl(''),
    Paternal_Grandmother_bone_structure: new FormControl(''),
    Paternal_Grandfather_race: new FormControl(''),
    Paternal_Grandfather_height: new FormControl(''),
    Paternal_Grandfather_bone_structure: new FormControl(''),
    mother_eye_color: new FormControl(''),
    mother_hair_color: new FormControl(''),
    mother_complexion: new FormControl(''),
    father_eye_color: new FormControl(''),
    father_hair_color: new FormControl(''),
    father_complexion: new FormControl(''),
    Maternal_Grandmother_eye_color: new FormControl(''),
    Maternal_Grandmother_hair_color: new FormControl(''),
    Maternal_Grandmother_complexion: new FormControl(''),
    Maternal_Grandfather_eye_color: new FormControl(''),
    Maternal_Grandfather_hair_color: new FormControl(''),
    Maternal_Grandfather_complexion: new FormControl(''),
    Paternal_Grandmother_eye_color: new FormControl(''),
    Paternal_Grandmother_hair_color: new FormControl(''),
    Paternal_Grandmother_complexion: new FormControl(''),
    Paternal_Grandfather_eye_color: new FormControl(''),
    Paternal_Grandfather_hair_color: new FormControl(''),
    Paternal_Grandfather_complexion: new FormControl(''),
    sibling1_gender: new FormControl(''),
    sibling1_full_half: new FormControl(''),
    sibling1_height: new FormControl(''),
    sibling1_bone_structure: new FormControl(''),
    sibling2_gender: new FormControl(''),
    sibling2_full_half: new FormControl(''),
    sibling2_height: new FormControl(''),
    sibling2_bone_structure: new FormControl(''),
    sibling1_eye_color: new FormControl(''),
    sibling1_hair_color: new FormControl(''),
    sibling1_complexion: new FormControl(''),
    sibling2_eye_color: new FormControl(''),
    sibling2_hair_color: new FormControl(''),
    sibling2_complexion: new FormControl(''),
    mother_age: new FormControl(''),
    mother_health: new FormControl(''),
    mother_age_death: new FormControl(''),
    mother_cause_death: new FormControl(''),
    Father_age: new FormControl(''),
    Father_health: new FormControl(''),
    Father_age_death: new FormControl(''),
    Father_cause_death: new FormControl(''),
    Maternal_Grandmother_age: new FormControl(''),
    Maternal_Grandmother_health: new FormControl(''),
    Maternal_Grandmother_age_death: new FormControl(''),
    Maternal_Grandmother_cause_death: new FormControl(''),
    Maternal_Grandfather_age: new FormControl(''),
    Maternal_Grandfather_health: new FormControl(''),
    Maternal_Grandfather_age_death: new FormControl(''),
    Maternal_Grandfather_cause_death: new FormControl(''),
    Paternal_Grandmother_age: new FormControl(''),
    Paternal_Grandmother_health: new FormControl(''),
    Paternal_Grandmother_age_death: new FormControl(''),
    Paternal_Grandmother_cause_death: new FormControl(''),
    Paternal_Grandfather_age: new FormControl(''),
    Paternal_Grandfather_health: new FormControl(''),
    Paternal_Grandfather_age_death: new FormControl(''),
    Paternal_Grandfather_cause_death: new FormControl(''),
    positive_carrier: new FormControl(''),
    Canavan_Disease: new FormControl(false),
    Cystic_Fibrosis: new FormControl(false),
    Fragile_X_Syndrome: new FormControl(false),
    Gaucher_Disease: new FormControl(false),
    Sickle_Cell_Disease: new FormControl(false),
    Spinal_Muscular_Atrophy: new FormControl(false),
    Tay_Sachs_Disease: new FormControl(false),
    Alcoholism: new FormControl(false),
    Compulsive_Behaviors: new FormControl(false),
    Drug_Abuse: new FormControl(false),
    Drug_Addict: new FormControl(false),
    Drug_Misuse: new FormControl(false),
    Gambling: new FormControl(false),
    Smoking: new FormControl(false),
    Cleft_Lip_Palate: new FormControl(false),
    Congenital_Hip_Problems: new FormControl(false),
    Club_Feet: new FormControl(false),
    Heart_Defect: new FormControl(false),
    Hearing_Problems: new FormControl(false),
    Holoprosencehpaly: new FormControl(false),
    Microcephaly: new FormControl(false),
    Neural_Tube: new FormControl(false),
    Spina_Bifida: new FormControl(false),
    Anemia: new FormControl(false),
    Bleeding_Clotting_Disorder: new FormControl(false),
    Blood_clots_or_strokes: new FormControl(false),
    Factor_V_Leiden_Thrombophilia: new FormControl(false),
    Hemophilia: new FormControl(false),
    HIV: new FormControl(false),
    Immune_Deficiency: new FormControl(false),
    Leukemia: new FormControl(false),
    Lymphoma: new FormControl(false),
    Polyarteritis_Nodose: new FormControl(false),
    Sickle_Cell_Anemia: new FormControl(false),
    Swolle_Lymph_Nodes: new FormControl(false),
    Thalassemia: new FormControl(false),
    Von_Willebrand_Disease: new FormControl(false),
    Breast: new FormControl(false),
    ColonIntestinal: new FormControl(false),
    Intestinal: new FormControl(false),
    Lung: new FormControl(false),
    Ovarian: new FormControl(false),
    Prostate: new FormControl(false),
    Skin: new FormControl(false),
    Stomach: new FormControl(false),
    Testicular: new FormControl(false),
    Thyroid: new FormControl(false),
    Uterine: new FormControl(false),
    Down_Syndrome: new FormControl(false),
    Fragile_X: new FormControl(false),
    Klinefelter_Turner: new FormControl(false),
    Appendicitis: new FormControl(false),
    Cirrhosis_of_the_Liver: new FormControl(false),
    Crohn_Disease: new FormControl(false),
    Gallstones: new FormControl(false),
    Hepatitis: new FormControl(false),
    Inflammatory_Bowel_Disease: new FormControl(false),
    Multiple_Polyps_of_the_Colon: new FormControl(false),
    Pyloric_Stenosis: new FormControl(false),
    Rectal_Disorder: new FormControl(false),
    Ulcer_of_Stomach_or_Duodenum: new FormControl(false),
    Ulcerative_Colitis: new FormControl(false),
    Ambiguous_Genitals: new FormControl(false),
    Discharge_Polycystic: new FormControl(false),
    Endometriosis: new FormControl(false),
    Hermaphroditism: new FormControl(false),
    Hypospadias: new FormControl(false),
    Low_Sperm_Count: new FormControl(false),
    Ovarian_Cysts: new FormControl(false),
    Ovarian_Syndrome: new FormControl(false),
    Pelvic_Inflammatory_Disease: new FormControl(false),
    Ruptured_Lumps_or_Cysts_in_Breast: new FormControl(false),
    Undescended_Testicle: new FormControl(false),
    Uterine_Fibroids: new FormControl(false),
    Congenital_Heart_Disease: new FormControl(false),
    Hardening_of_the_Arteries: new FormControl(false),
    Heart_Attack: new FormControl(false),
    Heart_Defects: new FormControl(false),
    Heart_Disease: new FormControl(false),
    High_Blood_Pressure: new FormControl(false),
    High_Cholesterol_Level: new FormControl(false),
    Stroke: new FormControl(false),
    Severe_Acne: new FormControl(false),
    Albinism: new FormControl(false),
    Eczema: new FormControl(false),
    Excessive_Facial_Hair: new FormControl(false),
    Infectious_Skin_Disease: new FormControl(false),
    Pigmentation_Disorders: new FormControl(false),
    Psoriasis: new FormControl(false),
    Neurofibromatosis: new FormControl(false),
    injected_drugs: new FormControl(''),
    clotting: new FormControl(''),
    sexual_activity: new FormControl(''),
    sex_12: new FormControl(''),
    exposed_preceding: new FormControl(''),
    test_HIV: new FormControl(''),
    unexplained_weightloss: new FormControl(''),
    lived_with: new FormControl(''),
    history_HepB: new FormControl(''),
    history_HTLV: new FormControl(''),
    incarcerated: new FormControl(''),
    hepatitis: new FormControl(''),
    shared_instruments: new FormControl(''),
    past_diagnosis: new FormControl(''),
    smallpox: new FormControl(''),
    vaccinia_virus: new FormControl(''),
    suspicion_WNV: new FormControl(''),
    fever_headache: new FormControl(''),
    close_contact_xenotransplantation: new FormControl(''),
    received_blood: new FormControl(''),
    Chlamydia: new FormControl(''),
    Gonorrhea: new FormControl(''),
    syphilis: new FormControl(''),
    vCJD: new FormControl(''),
    dementia: new FormControl(''),
    Creutzfeldt_Jakob_disease: new FormControl(''),
    pituitary_derived: new FormControl(''),
    mater_transplant: new FormControl(''),
    spent_UK: new FormControl(''),
    military: new FormControl(''),
    lived_Europe: new FormControl(''),
    transfusion_blood: new FormControl(''),
    bovine: new FormControl(''),
    vaccinations: new FormControl(''),
    donation: new FormControl(''),
    understand: new FormControl(false),
    understand_photos: new FormControl(false),
    understand_logos: new FormControl(false),
    hear_about_us: new FormControl(0),
    explain_other: new FormControl(''),
    preferred_languange: new FormControl(0),
    others_languange: new FormControl('')
  });

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!", this.form.value);
      /* this.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      }) */
    }
  }

  TotalRow: number;
  Form: FormGroup;
  Form2: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this._fb.group({
      list_medications: this._fb.array([this.initListMedications()],)
    });
    this.Form2 = this._fb.group({
      list_surgical_procedures: this._fb.array([this.initListSurgicalProcedures()],)
    });
  }

  initListSurgicalProcedures() {
    return this._fb.group({
      no: [''],
      date: [''],
      procedure: [''],
      reason: [''],
      outcome: ['']
    });
  }

  initListMedications() {
    return this._fb.group({
      no: [''],
      medication: [''],
      how_often: [''],
      reason: ['']
    });
  }

  addNewRow2() {
    const control = <FormArray>this.Form2.controls['list_surgical_procedures'];
    control.push(this.initListSurgicalProcedures());
  }

  addNewRow() {
    const control = <FormArray>this.Form.controls['list_medications'];
    control.push(this.initListMedications());
  }

  deleteRow2(index: number) {
    const control = <FormArray>this.Form2.controls['list_surgical_procedures'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

  deleteRow(index: number) {
    const control = <FormArray>this.Form.controls['list_medications'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

  cal_bmi(lbs, ins)
  {
    let h2 = ins * ins;
    let bmi: any = lbs/h2 * 703;
    let f_bmi = Math.floor(bmi);
    let diff  = bmi - f_bmi;
    diff = diff * 10;
    diff = Math.round(diff);
    if (diff == 10)
    {
      f_bmi += 1;
      diff   = 0;
    }
    bmi = f_bmi + "." + diff;
    return bmi;
  }

  compute()
  {
    var f = self.document.forms[0];
    let w = f.wt.value;
    let v = f.htf.value;
    let u = f.hti.value;
    if (!this.chkw(u))
    {
    var ii = 0;
    f.hti.value = 0;
    } else
    {
    let it = f.hti.value*1;
    var ii = it;
    }
    var fi = f.htf.value * 12;
    var i =  f.htf.value * 12 + f.hti.value*1.0;  
    if (!this.chkw(v))
    {
    alert("Please enter a number for your height.");
    f.htf.focus();
    return;
    }
    if (!this.chkw(w))
    {
    alert("Please enter a number for your weight.");
    f.wt.focus();
    return;
    }
    // Perform the calculation
    f.bmi.value = this.cal_bmi(w, i);
    f.bmi.focus();
  }

  chkw(w){
    if (isNaN(parseInt(w))){
      return false;
    } else if (w < 0){
      return false;
    }
    else{
      return true;
    }
  }

}