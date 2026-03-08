import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const OrthopaedicHospitalPage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Best Orthopaedic Hospital in Sundernagar"
            subtitle="Comprehensive orthopaedic care from diagnosis to rehabilitation for complete bone and joint health."
            overview="Mannat Hospital offers advanced orthopaedic treatments for fractures, arthritis, sports injuries, and complex bone disorders. Our specialized team utilizes modern surgical techniques and state-of-the-art diagnostic equipment to ensure complete recovery."
            symptoms={["Persistent joint pain","Swelling and stiffness","Limited range of motion","Difficulty standing or walking","Bone deformities or fractures"]}
            causes={["Accidental injuries or trauma","Degenerative joint diseases (Arthritis)","Sports-related wear and tear","Osteoporosis","Congenital bone disorders"]}
            diagnosis={["Digital X-Rays","MRI and CT Scans","Bone Density Tests","Arthroscopy diagnostic evaluation","Blood tests for inflammation marker"]}
            treatments={["Joint Replacement Surgery","Arthroscopic Surgery","Fracture and Trauma Fixation","Pain Management therapies","Physical Rehabilitation"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"When should I see an orthopaedic doctor?","answer":"You should see an orthopaedic specialist if you experience chronic joint, bone, or muscle pain that does not improve with rest, swelling, limited mobility, or if you sustained a physical injury."},{"question":"Do all orthopaedic issues require surgery?","answer":"No. Many conditions are managed effectively with medication, physiotherapy, and lifestyle modifications."}]}
            onBookClick={onBookClick}
        />
    );
};

export default OrthopaedicHospitalPage;
