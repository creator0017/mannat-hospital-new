import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const ArthroscopyTreatmentPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Arthroscopy Treatment in Sundernagar"
            subtitle="Minimally invasive keyhole surgery for accurate joint diagnosis and rapid treatment."
            overview="Arthroscopy is a minimally invasive surgical procedure utilized by our experts to diagnose and treat problems inside a joint. Utilizing a high-definition camera and specialized micro-instruments, we can repair ligaments and cartilage with minimal scarring and faster recovery times."
            symptoms={["Unexplained joint pain","Clicking or popping sounds in knee/shoulder","Joint instability","Swelling that does not subside","Restricted range of motion"]}
            causes={["Meniscus tears","ACL/PCL ligament tears","Rotator cuff injuries","Loose bone fragments","Inflamed joint lining"]}
            diagnosis={["Physical examination","MRI Scans","Diagnostic Arthroscopy"]}
            treatments={["Arthroscopic meniscus repair","ACL Reconstruction","Shoulder rotator cuff repair","Removal of loose bodies"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"What is arthroscopy surgery?","answer":"It is a keyhole surgery where a small camera is inserted into the joint to guide small surgical instruments, resulting in less tissue damage and quicker recovery."},{"question":"Is arthroscopy painful?","answer":"It involves significantly less pain than open surgery. Most patients experience only mild discomfort which is easily managed with prescribed medication."}]}
            onBookClick={onBookClick}
        />
    );
};

export default ArthroscopyTreatmentPage;
