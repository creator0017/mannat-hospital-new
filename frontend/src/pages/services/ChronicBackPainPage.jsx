import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const ChronicBackPainPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Chronic Back Pain Treatment"
            subtitle="Advanced interventions beyond temporary painkillers."
            overview="When back pain becomes a daily struggle and traditional medications fail, specialized Pain Management interventions are necessary. We offer minimally invasive procedures to directly target inflamed nerves and facet joints in the spine to provide long-lasting comfort."
            symptoms={["Constant ache in lower back","Pain worsening after sitting","Sharp jolts of pain during movement","Radiating leg pain"]}
            causes={["Facet joint arthropathy","Spinal stenosis","Chronic slipped discs","Post-Laminectomy Syndrome (Failed Back Surgery)"]}
            diagnosis={["Diagnostic medial branch blocks","MRI screening"]}
            treatments={["Transforaminal Epidural Injections","Medial Branch Radiofrequency Ablation","Trigger point injections"]}
            doctor={{"name":"Dr Sunny Gupta","role":"Consultant Anesthesiologist & Pain","image":"/doctors/dr-sunny-gupta.jpg","services":["Chronic Back Pain","Spine Pain Management","Joint Pain Treatment","Nerve Pain Treatment","Injection Therapy"]}}
            faqs={[{"question":"Are spine injections safe?","answer":"Yes, these injections are performed under fluoroscopic (X-Ray) guidance for maximum safety and precision."}]}
            onBookClick={onBookClick}
        />
    );
};

export default ChronicBackPainPage;
