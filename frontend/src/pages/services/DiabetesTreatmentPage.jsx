import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const DiabetesTreatmentPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Diabetes Treatment & Management"
            subtitle="Expert diabetic care to regulate blood sugar and prevent complications."
            overview="Diabetes is a chronic metabolic disease that requires diligent continuous management. Our specialized diabetes care focuses on strict blood sugar control to prevent serious long-term complications affecting the heart, eyes, kidneys, and nerves."
            symptoms={["Frequent urination","Excessive thirst and hunger","Blurred vision","Slow-healing sores","Tingling or numbness in hands/feet"]}
            causes={["Insulin resistance (Type 2)","Autoimmune beta-cell destruction (Type 1)","Genetics and family history","Sedentary lifestyle and obesity"]}
            diagnosis={["Fasting Blood Sugar Test (FBS)","HbA1c Test (3-month average)","Glucose Tolerance Test","Lipid profiling"]}
            treatments={["Oral Hypoglycemic Agents (Medications)","Insulin Therapy","Diabetic Neuropathy management","Dietary and nutritional planning"]}
            doctor={{"name":"Dr Sanjay Dheeman","role":"Consultant Physician","image":"/doctors/dr-sanjay-dhiman.png","services":["Diabetes Management","Hypertension Treatment","Cardiac Risk Assessment","Fever & Infections","Thyroid Disorders"]}}
            faqs={[{"question":"Can diabetes be completely cured?","answer":"Type 2 diabetes can often be sent into remission with massive lifestyle changes, weight loss, and diet, though it requires continuous maintenance. Type 1 diabetes currently strictly requires insulin therapy."},{"question":"How is diabetes managed?","answer":"It is managed via a combination of prescribed medications, regular blood glucose monitoring, a highly balanced diet, and planned daily physical exercise."}]}
            onBookClick={onBookClick}
        />
    );
};

export default DiabetesTreatmentPage;
