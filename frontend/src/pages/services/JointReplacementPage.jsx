import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const JointReplacementPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Joint Replacement Surgery in Sundernagar"
            subtitle="Advanced Hip and Knee replacement surgeries for pain-free mobility."
            overview="Our Joint Replacement center provides complete end-to-end solutions for severe joint damage caused by arthritis or trauma. We offer total knee, hip, and shoulder arthroplasty utilizing world-class implants and minimally invasive approaches for rapid recovery."
            symptoms={["Severe knee or hip pain","Inability to sleep due to joint pain","Joint locking or giving out","Visible joint deformities","Failure of non-surgical treatments"]}
            causes={["Osteoarthritis","Rheumatoid Arthritis","Post-traumatic arthritis","Avascular necrosis","Severe joint fractures"]}
            diagnosis={["Weight-bearing X-Rays","MRI Scans","Joint aspiration","Gait analysis"]}
            treatments={["Total Knee Replacement (TKR)","Total Hip Replacement (THR)","Partial Joint Replacement","Revision Joint Surgery"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"How long does recovery take after joint replacement?","answer":"Most patients start walking with support the next day. Full recovery and return to normal activities typically takes 3 to 6 weeks depending on the procedure and patient compliance."},{"question":"How long do joint implants last?","answer":"Modern joint replacements can last 15 to 20 years or more with proper care."}]}
            onBookClick={onBookClick}
        />
    );
};

export default JointReplacementPage;
