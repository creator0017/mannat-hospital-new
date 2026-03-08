import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const SlipDiscPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Slip Disc Treatment in Sundernagar"
            subtitle="Effective relief for herniated discs causing sciatica and back pain."
            overview="A slipped or herniated disc occurs when the soft inner portion of a spinal disc pushes through the tougher exterior, compressing nervous tissue. We offer targeted therapies ranging from dedicated physiotherapy to minimally invasive endoscopic discectomy to cure this painful condition."
            symptoms={["Radiating pain down the leg (Sciatica)","Lower back ache worsening with movement","Tingling or pins and needles in feet","Muscle weakness in legs"]}
            causes={["Age-related wear and tear","Lifting heavy objects improperly","Sudden twisting movements","Traumatic injury"]}
            diagnosis={["Physical exam identifying nerve damage","MRI checking precise disc herniation","X-Ray to rule out fractures"]}
            treatments={["Physiotherapy & Core strengthening","Epidural Corticosteroid Injections","Endoscopic Lumbar Discectomy"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"Does a slipped disc always need surgery?","answer":"No. Approximately 80-90% of slip disc cases resolve with rest, physical therapy, and medication. Surgery is only recommended if symptoms persist or neurological deficits occur."}]}
            onBookClick={onBookClick}
        />
    );
};

export default SlipDiscPage;
