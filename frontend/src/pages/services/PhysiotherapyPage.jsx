import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const PhysiotherapyPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Best Physiotherapy Clinic in Sundernagar"
            subtitle="Specialized rehabilitation and therapeutic exercises to restore movement."
            overview="Our dedicated Physiotherapy and Rehabilitation department helps patients regain maximum physical function following injuries, surgeries, or neurological issues. Through personalized plans incorporating Myofascial Release (MFR) and manual therapies, we ensure a sustainable recovery."
            symptoms={["Joint stiffness","Chronic muscle pain","Mobility restrictions post-surgery","Sports injury soreness","Balance and coordination issues"]}
            causes={["Post-operative stiffness","Sports trauma","Neurological disorders (Stroke, Paralysis)","Prolonged immobility","Ergonomic stress"]}
            diagnosis={["Postural assessment","Gait analysis","Range of motion testing","Muscle strength evaluation"]}
            treatments={["Post-Surgery Rehabilitation","Sports Injury Rehab","Myofascial Release (MFR)","Fascial Distortion Model (FDM)","Electrotherapy"]}
            doctor={{"name":"Dr Shubham Sharma (PT)","role":"Consultant Physiotherapist","image":"/doctors/dr-shubham-sharma-2.png","services":["Post Surgery Rehab","Sports Injury Rehab","Back Pain Physiotherapy","Knee Physiotherapy","Orthopaedic Rehab"]}}
            faqs={[{"question":"Do I need a referral to see a physiotherapist?","answer":"While referrals are common post-surgery, you can directly consult our physiotherapist for any musculoskeletal pain or movement restrictions."},{"question":"Can physiotherapy treat back pain?","answer":"Yes, targeted core strengthening exercises, manual therapy, and MFR are highly effective in treating chronic back pain."}]}
            onBookClick={onBookClick}
        />
    );
};

export default PhysiotherapyPage;
