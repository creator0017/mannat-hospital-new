import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const EndoscopicSpinePage = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="Endoscopic Spine Surgery in Himachal"
            subtitle="Advanced stitchless spine surgery for rapid, pain-free recovery."
            overview="Our stitchless endoscopic spine surgery offers a revolutionary alternative to traditional open back surgery. Utilizing an endoscope through a tiny incision, our highly trained surgeons can decompress nerves and remove herniated discs without cutting major muscles, allowing for same-day mobility."
            symptoms={["Severe sciatica pain","Leg numbness or weakness","Unable to stand for long periods","Sharp lower back pain","Failed conservative treatments"]}
            causes={["Lumbar disc herniation","Spinal nerve compression","Spinal canal stenosis","Degenerative disc disease"]}
            diagnosis={["Detailed MRI evaluation","CT Myelogram","Clinical neurological assessment"]}
            treatments={["Transforaminal Endoscopic Surgery","Interlaminar Endoscopic Decompression","Targeted nerve root block"]}
            doctor={{"name":"Dr M A Basit","role":"Orthopaedic & Spine Surgeon","image":"/doctors/dr-basit.png","services":["Orthopaedic Surgery","Spine Surgery","Joint Replacement","Arthroscopy","Trauma Surgery","Endoscopic Spine"]}}
            faqs={[{"question":"What is stitchless spine surgery?","answer":"It is a highly advanced technique where the entire procedure is performed through an incision smaller than a pen hole, requiring no stitches, leading to a virtually invisible scar and immediate recovery."},{"question":"Can I walk after surgery?","answer":"Yes, most patients are encouraged to walk within a few hours following an endoscopic spine surgery."}]}
            onBookClick={onBookClick}
        />
    );
};

export default EndoscopicSpinePage;
