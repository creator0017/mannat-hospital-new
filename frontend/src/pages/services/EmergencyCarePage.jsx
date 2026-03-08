import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const EmergencyCarePage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="24/7 Emergency & Trauma Care in Sundernagar"
            subtitle="Instant life-saving interventions and dedicated trauma protocols."
            overview="Medical emergencies and accidental traumas require split-second decisions and expert interventions. Our 24/7 Emergency and Trauma center is fully equipped with life support systems, an experienced critical care team, and dedicated on-call surgeons representing various specialties."
            symptoms={["Severe traumatic injury","Unbearable chest pain","Loss of consciousness","Uncontrolled bleeding","Difficulty breathing"]}
            causes={["Road traffic accidents","Heart attacks or strokes","Severe allergic reactions","Accidental falls","Acute surgical emergencies"]}
            diagnosis={["Rapid Primary Survey (ABCDE protocol)","STAT CT Scans and X-Rays","Emergency bedside ultrasound (FAST)","Rapid blood analysis"]}
            treatments={["Advanced Cardiac Life Support (ACLS)","Fracture Stabilization and splinting","Emergency open surgeries","Intensive Care Unit (ICU) admission","Blood transfusions"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"Is the emergency facility open 24 hours?","answer":"Yes, our casualty department, imaging services, laboratory, and pharmacy are fully operational 24/7."},{"question":"Are specialized surgeons available at night?","answer":"Yes, we have on-call specialists including Orthopaedic Trauma surgeons and Anesthesiologists ready to operate in emergency scenarios at all times."}]}
            onBookClick={onBookClick}
        />
    );
};

export default EmergencyCarePage;
