import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const SpineSurgeonPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Expert Spine Surgeon in Sundernagar"
            subtitle="Comprehensive, minimally invasive solutions for complex spinal conditions."
            overview="Led by specialists in Minimal Invasive Spine Surgery, our department treats a wide array of spinal conditions from slip discs to complex spinal deformities. We prioritize non-surgical methods but offer advanced stitchless endoscopic procedures when surgery is necessary."
            symptoms={["Chronic back or neck pain","Radiating pain to arms or legs","Numbness or tingling sensations","Muscle weakness","Difficulty walking or standing straight"]}
            causes={["Herniated or slipped disc","Spinal stenosis","Scoliosis","Spinal tumors or infections","Trauma or vertebral fractures"]}
            diagnosis={["Spinal X-Rays","Comprehensive MRI of the Spine","CT Scans","Nerve Electromyography (EMG)"]}
            treatments={["Minimal Invasive Spine Surgery","Endoscopic Discectomy","Spinal Fusion Surgery","Deformity Correction","Conservative Pain Management"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"Are spine surgeries risky?","answer":"With the advent of endoscopic and minimally invasive techniques, spinal surgeries have become incredibly safe, involving less blood loss and highly successful outcomes."},{"question":"How long is the hospital stay?","answer":"For most endoscopic procedures, patients can be discharged within 24 to 48 hours."}]}
            onBookClick={onBookClick}
        />
    );
};

export default SpineSurgeonPage;
