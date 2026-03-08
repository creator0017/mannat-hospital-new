import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const GeneralMedicinePage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Internal Medicine & Physician in Sundernagar"
            subtitle="Holistic health management, accurate diagnosis, and disease prevention."
            overview="The Department of Internal Medicine is the backbone of total healthcare. We specialize in diagnosing, treating, and preventing a broad spectrum of adult illnesses ranging from acute fevers and infections to chronic systemic diseases like hypertension and thyroid disorders."
            symptoms={["Unexplained fatigue","Prolonged fevers","Shortness of breath","Chronic headaches","Sudden weight loss or gain"]}
            causes={["Viral or bacterial infections","Endocrine system imbalances","Cardiovascular stress","Metabolic syndromes","Environmental factors"]}
            diagnosis={["Comprehensive Blood Panels","ECG (Electrocardiogram)","Ultrasound imaging","Urinalysis"]}
            treatments={["Medication management","Hypertension Treatment","Cardiac Risk Assessment","Thyroid disorder management","Lifestyle and dietary counseling"]}
            doctor={{"name":"Dr Sanjay Dheeman","role":"Consultant Physician","image":"/doctors/dr-sanjay-dhiman.png","services":["Diabetes Management","Hypertension Treatment","Cardiac Risk Assessment","Fever & Infections","Thyroid Disorders"]}}
            faqs={[{"question":"What does an internal medicine specialist do?","answer":"An internist manages complex, chronic, and multi-system diseases in adults, acting as the primary point of comprehensive medical care."},{"question":"How often should I get a preventive health checkup?","answer":"We recommend comprehensive preventive health checkups annually for adults over 30 to catch unnoticeable issues like high blood pressure or early diabetes."}]}
            onBookClick={onBookClick}
        />
    );
};

export default GeneralMedicinePage;
