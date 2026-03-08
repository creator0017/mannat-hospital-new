import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const BackPainPhysioPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Back Pain Physiotherapy"
            subtitle="Non-surgical management and core rehabilitation for chronic back pain."
            overview="Back pain is one of the most common ailments we treat. We focus on identifying the biomechanical root cause of the pain rather than just treating the symptoms. Through targeted manipulations and customized exercise regimens, we help individuals achieve a pain-free spine."
            symptoms={["Dull aching lower back pain","Sharp pain upon bending","Muscle spasms in the back","Neck stiffness","Postural fatigue"]}
            causes={["Poor posture","Sedentary lifestyle","Muscular imbalances","Mild disc bulges","Over-exertion"]}
            diagnosis={["Spinal alignment check","Flexibility assessment","Core strength testing"]}
            treatments={["Core strengthening protocols","Manual Therapy","Postural correction training","Heat and cold therapy","Transcutaneous Electrical Nerve Stimulation (TENS)"]}
            doctor={{"name":"Dr Shubham Sharma (PT)","role":"Consultant Physiotherapist","image":"/doctors/dr-shubham-sharma-2.png","services":["Post Surgery Rehab","Sports Injury Rehab","Back Pain Physiotherapy","Knee Physiotherapy","Orthopaedic Rehab"]}}
            faqs={[{"question":"How long does physical therapy for back pain take?","answer":"Depending on the severity, typical treatment regimens last between 4 to 8 weeks, with noticeable relief often occurring within the first few sessions."}]}
            onBookClick={onBookClick}
        />
    );
};

export default BackPainPhysioPage;
