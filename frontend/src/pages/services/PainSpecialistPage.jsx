import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const PainSpecialistPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Pain Management Specialist in Sundernagar"
            subtitle="Targeted medical therapies for chronic and debilitating pain syndromes."
            overview="Chronic pain requires a specialized focus. Our Pain Management clinic offers comprehensive care for patients suffering from long-term pain that affects their quality of life. We utilize advanced injection therapies and multimodal medical interventions to block pain signals effectively."
            symptoms={["Pain lasting more than 3 months","Burning or electric nerve pain","Chronic joint aching","Severe post-surgical pain","Cancer-related pain"]}
            causes={["Nerve damage (Neuropathy)","Severe Osteoarthritis","Chronic Spinal Conditions","Fibromyalgia","Complex Regional Pain Syndrome"]}
            diagnosis={["Detailed pain history","Diagnostic nerve blocks","Imaging (X-Ray/MRI)"]}
            treatments={["Epidural Steroid Injections","Facet Joint Injections","Radiofrequency Ablation","Nerve Block Injections","Multimodal medicinal therapy"]}
            doctor={{"name":"Dr Sunny Gupta","role":"Consultant Anesthesiologist & Pain","image":"/doctors/dr-sunny-gupta.jpg","services":["Chronic Back Pain","Spine Pain Management","Joint Pain Treatment","Nerve Pain Treatment","Injection Therapy"]}}
            faqs={[{"question":"What is a pain block injection?","answer":"A pain block is a targeted injection of local anesthetic and anti-inflammatory medication directly around a painful nerve or joint to instantly block pain signals."},{"question":"Is pain management permanent?","answer":"While some treatments offer permanent relief (like RFA), others provide extensive temporary relief (months to years) allowing you to participate in physical therapy and rebuild strength."}]}
            onBookClick={onBookClick}
        />
    );
};

export default PainSpecialistPage;
