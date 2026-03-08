const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'frontend', 'src', 'pages', 'services');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const doctors = {
    basit: {
        name: 'Dr M A Basit',
        role: 'Orthopaedic & Spine Surgeon',
        image: '/doctors/dr-basit.png',
        services: ['Orthopaedic Surgery', 'Spine Surgery', 'Joint Replacement', 'Arthroscopy', 'Trauma Surgery', 'Endoscopic Spine']
    },
    shubham: {
        name: 'Dr Shubham Sharma (PT)',
        role: 'Consultant Physiotherapist',
        image: '/doctors/dr-shubham-sharma-2.png',
        services: ['Post Surgery Rehab', 'Sports Injury Rehab', 'Back Pain Physiotherapy', 'Knee Physiotherapy', 'Orthopaedic Rehab']
    },
    sunny: {
        name: 'Dr Sunny Gupta',
        role: 'Consultant Anesthesiologist & Pain',
        image: '/doctors/dr-sunny-gupta.jpg',
        services: ['Chronic Back Pain', 'Spine Pain Management', 'Joint Pain Treatment', 'Nerve Pain Treatment', 'Injection Therapy']
    },
    sanjay: {
        name: 'Dr Sanjay Dheeman',
        role: 'Consultant Physician',
        image: '/doctors/dr-sanjay-dhiman.png',
        services: ['Diabetes Management', 'Hypertension Treatment', 'Cardiac Risk Assessment', 'Fever & Infections', 'Thyroid Disorders']
    }
};

const pagesData = [
    {
        filename: 'OrthopaedicHospitalPage.jsx',
        route: '/services/orthopaedic-hospital-sundernagar',
        title: 'Best Orthopaedic Hospital in Sundernagar',
        subtitle: 'Comprehensive orthopaedic care from diagnosis to rehabilitation for complete bone and joint health.',
        overview: 'Mannat Hospital offers advanced orthopaedic treatments for fractures, arthritis, sports injuries, and complex bone disorders. Our specialized team utilizes modern surgical techniques and state-of-the-art diagnostic equipment to ensure complete recovery.',
        symptoms: ['Persistent joint pain', 'Swelling and stiffness', 'Limited range of motion', 'Difficulty standing or walking', 'Bone deformities or fractures'],
        causes: ['Accidental injuries or trauma', 'Degenerative joint diseases (Arthritis)', 'Sports-related wear and tear', 'Osteoporosis', 'Congenital bone disorders'],
        diagnosis: ['Digital X-Rays', 'MRI and CT Scans', 'Bone Density Tests', 'Arthroscopy diagnostic evaluation', 'Blood tests for inflammation marker'],
        treatments: ['Joint Replacement Surgery', 'Arthroscopic Surgery', 'Fracture and Trauma Fixation', 'Pain Management therapies', 'Physical Rehabilitation'],
        faqs: [
            { question: 'When should I see an orthopaedic doctor?', answer: 'You should see an orthopaedic specialist if you experience chronic joint, bone, or muscle pain that does not improve with rest, swelling, limited mobility, or if you sustained a physical injury.' },
            { question: 'Do all orthopaedic issues require surgery?', answer: 'No. Many conditions are managed effectively with medication, physiotherapy, and lifestyle modifications.' }
        ],
        doctorKey: 'basit'
    },
    {
        filename: 'JointReplacementPage.jsx',
        route: '/services/joint-replacement-sundernagar',
        title: 'Joint Replacement Surgery in Sundernagar',
        subtitle: 'Advanced Hip and Knee replacement surgeries for pain-free mobility.',
        overview: 'Our Joint Replacement center provides complete end-to-end solutions for severe joint damage caused by arthritis or trauma. We offer total knee, hip, and shoulder arthroplasty utilizing world-class implants and minimally invasive approaches for rapid recovery.',
        symptoms: ['Severe knee or hip pain', 'Inability to sleep due to joint pain', 'Joint locking or giving out', 'Visible joint deformities', 'Failure of non-surgical treatments'],
        causes: ['Osteoarthritis', 'Rheumatoid Arthritis', 'Post-traumatic arthritis', 'Avascular necrosis', 'Severe joint fractures'],
        diagnosis: ['Weight-bearing X-Rays', 'MRI Scans', 'Joint aspiration', 'Gait analysis'],
        treatments: ['Total Knee Replacement (TKR)', 'Total Hip Replacement (THR)', 'Partial Joint Replacement', 'Revision Joint Surgery'],
        faqs: [
            { question: 'How long does recovery take after joint replacement?', answer: 'Most patients start walking with support the next day. Full recovery and return to normal activities typically takes 3 to 6 weeks depending on the procedure and patient compliance.' },
            { question: 'How long do joint implants last?', answer: 'Modern joint replacements can last 15 to 20 years or more with proper care.' }
        ],
        doctorKey: 'basit'
    },
    {
        filename: 'ArthroscopyTreatmentPage.jsx',
        route: '/services/arthroscopy-treatment-sundernagar',
        title: 'Arthroscopy Treatment in Sundernagar',
        subtitle: 'Minimally invasive keyhole surgery for accurate joint diagnosis and rapid treatment.',
        overview: 'Arthroscopy is a minimally invasive surgical procedure utilized by our experts to diagnose and treat problems inside a joint. Utilizing a high-definition camera and specialized micro-instruments, we can repair ligaments and cartilage with minimal scarring and faster recovery times.',
        symptoms: ['Unexplained joint pain', 'Clicking or popping sounds in knee/shoulder', 'Joint instability', 'Swelling that does not subside', 'Restricted range of motion'],
        causes: ['Meniscus tears', 'ACL/PCL ligament tears', 'Rotator cuff injuries', 'Loose bone fragments', 'Inflamed joint lining'],
        diagnosis: ['Physical examination', 'MRI Scans', 'Diagnostic Arthroscopy'],
        treatments: ['Arthroscopic meniscus repair', 'ACL Reconstruction', 'Shoulder rotator cuff repair', 'Removal of loose bodies'],
        faqs: [
            { question: 'What is arthroscopy surgery?', answer: 'It is a keyhole surgery where a small camera is inserted into the joint to guide small surgical instruments, resulting in less tissue damage and quicker recovery.' },
            { question: 'Is arthroscopy painful?', answer: 'It involves significantly less pain than open surgery. Most patients experience only mild discomfort which is easily managed with prescribed medication.' }
        ],
        doctorKey: 'basit'
    },
    {
        filename: 'SpineSurgeonPage.jsx',
        route: '/services/spine-surgeon-sundernagar',
        title: 'Expert Spine Surgeon in Sundernagar',
        subtitle: 'Comprehensive, minimally invasive solutions for complex spinal conditions.',
        overview: 'Led by specialists in Minimal Invasive Spine Surgery, our department treats a wide array of spinal conditions from slip discs to complex spinal deformities. We prioritize non-surgical methods but offer advanced stitchless endoscopic procedures when surgery is necessary.',
        symptoms: ['Chronic back or neck pain', 'Radiating pain to arms or legs', 'Numbness or tingling sensations', 'Muscle weakness', 'Difficulty walking or standing straight'],
        causes: ['Herniated or slipped disc', 'Spinal stenosis', 'Scoliosis', 'Spinal tumors or infections', 'Trauma or vertebral fractures'],
        diagnosis: ['Spinal X-Rays', 'Comprehensive MRI of the Spine', 'CT Scans', 'Nerve Electromyography (EMG)'],
        treatments: ['Minimal Invasive Spine Surgery', 'Endoscopic Discectomy', 'Spinal Fusion Surgery', 'Deformity Correction', 'Conservative Pain Management'],
        faqs: [
            { question: 'Are spine surgeries risky?', answer: 'With the advent of endoscopic and minimally invasive techniques, spinal surgeries have become incredibly safe, involving less blood loss and highly successful outcomes.' },
            { question: 'How long is the hospital stay?', answer: 'For most endoscopic procedures, patients can be discharged within 24 to 48 hours.' }
        ],
        doctorKey: 'basit'
    },
    {
        filename: 'EndoscopicSpinePage.jsx',
        route: '/services/endoscopic-spine-surgery',
        title: 'Endoscopic Spine Surgery in Himachal',
        subtitle: 'Advanced stitchless spine surgery for rapid, pain-free recovery.',
        overview: 'Our stitchless endoscopic spine surgery offers a revolutionary alternative to traditional open back surgery. Utilizing an endoscope through a tiny incision, our highly trained surgeons can decompress nerves and remove herniated discs without cutting major muscles, allowing for same-day mobility.',
        symptoms: ['Severe sciatica pain', 'Leg numbness or weakness', 'Unable to stand for long periods', 'Sharp lower back pain', 'Failed conservative treatments'],
        causes: ['Lumbar disc herniation', 'Spinal nerve compression', 'Spinal canal stenosis', 'Degenerative disc disease'],
        diagnosis: ['Detailed MRI evaluation', 'CT Myelogram', 'Clinical neurological assessment'],
        treatments: ['Transforaminal Endoscopic Surgery', 'Interlaminar Endoscopic Decompression', 'Targeted nerve root block'],
        faqs: [
            { question: 'What is stitchless spine surgery?', answer: 'It is a highly advanced technique where the entire procedure is performed through an incision smaller than a pen hole, requiring no stitches, leading to a virtually invisible scar and immediate recovery.' },
            { question: 'Can I walk after surgery?', answer: 'Yes, most patients are encouraged to walk within a few hours following an endoscopic spine surgery.' }
        ],
        doctorKey: 'basit'
    },
    {
        filename: 'SlipDiscPage.jsx',
        route: '/services/slip-disc-treatment-sundernagar',
        title: 'Slip Disc Treatment in Sundernagar',
        subtitle: 'Effective relief for herniated discs causing sciatica and back pain.',
        overview: 'A slipped or herniated disc occurs when the soft inner portion of a spinal disc pushes through the tougher exterior, compressing nervous tissue. We offer targeted therapies ranging from dedicated physiotherapy to minimally invasive endoscopic discectomy to cure this painful condition.',
        symptoms: ['Radiating pain down the leg (Sciatica)', 'Lower back ache worsening with movement', 'Tingling or pins and needles in feet', 'Muscle weakness in legs'],
        causes: ['Age-related wear and tear', 'Lifting heavy objects improperly', 'Sudden twisting movements', 'Traumatic injury'],
        diagnosis: ['Physical exam identifying nerve damage', 'MRI checking precise disc herniation', 'X-Ray to rule out fractures'],
        treatments: ['Physiotherapy & Core strengthening', 'Epidural Corticosteroid Injections', 'Endoscopic Lumbar Discectomy'],
        faqs: [
            { question: 'Does a slipped disc always need surgery?', answer: 'No. Approximately 80-90% of slip disc cases resolve with rest, physical therapy, and medication. Surgery is only recommended if symptoms persist or neurological deficits occur.' }
        ],
        doctorKey: 'basit'
    },
    {
        filename: 'PhysiotherapyPage.jsx',
        route: '/services/physiotherapy-sundernagar',
        title: 'Best Physiotherapy Clinic in Sundernagar',
        subtitle: 'Specialized rehabilitation and therapeutic exercises to restore movement.',
        overview: 'Our dedicated Physiotherapy and Rehabilitation department helps patients regain maximum physical function following injuries, surgeries, or neurological issues. Through personalized plans incorporating Myofascial Release (MFR) and manual therapies, we ensure a sustainable recovery.',
        symptoms: ['Joint stiffness', 'Chronic muscle pain', 'Mobility restrictions post-surgery', 'Sports injury soreness', 'Balance and coordination issues'],
        causes: ['Post-operative stiffness', 'Sports trauma', 'Neurological disorders (Stroke, Paralysis)', 'Prolonged immobility', 'Ergonomic stress'],
        diagnosis: ['Postural assessment', 'Gait analysis', 'Range of motion testing', 'Muscle strength evaluation'],
        treatments: ['Post-Surgery Rehabilitation', 'Sports Injury Rehab', 'Myofascial Release (MFR)', 'Fascial Distortion Model (FDM)', 'Electrotherapy'],
        faqs: [
            { question: 'Do I need a referral to see a physiotherapist?', answer: 'While referrals are common post-surgery, you can directly consult our physiotherapist for any musculoskeletal pain or movement restrictions.' },
            { question: 'Can physiotherapy treat back pain?', answer: 'Yes, targeted core strengthening exercises, manual therapy, and MFR are highly effective in treating chronic back pain.' }
        ],
        doctorKey: 'shubham'
    },
    {
        filename: 'BackPainPhysioPage.jsx',
        route: '/services/back-pain-physiotherapy',
        title: 'Back Pain Physiotherapy',
        subtitle: 'Non-surgical management and core rehabilitation for chronic back pain.',
        overview: 'Back pain is one of the most common ailments we treat. We focus on identifying the biomechanical root cause of the pain rather than just treating the symptoms. Through targeted manipulations and customized exercise regimens, we help individuals achieve a pain-free spine.',
        symptoms: ['Dull aching lower back pain', 'Sharp pain upon bending', 'Muscle spasms in the back', 'Neck stiffness', 'Postural fatigue'],
        causes: ['Poor posture', 'Sedentary lifestyle', 'Muscular imbalances', 'Mild disc bulges', 'Over-exertion'],
        diagnosis: ['Spinal alignment check', 'Flexibility assessment', 'Core strength testing'],
        treatments: ['Core strengthening protocols', 'Manual Therapy', 'Postural correction training', 'Heat and cold therapy', 'Transcutaneous Electrical Nerve Stimulation (TENS)'],
        faqs: [
            { question: 'How long does physical therapy for back pain take?', answer: 'Depending on the severity, typical treatment regimens last between 4 to 8 weeks, with noticeable relief often occurring within the first few sessions.' }
        ],
        doctorKey: 'shubham'
    },
    {
        filename: 'PainSpecialistPage.jsx',
        route: '/services/pain-specialist-sundernagar',
        title: 'Pain Management Specialist in Sundernagar',
        subtitle: 'Targeted medical therapies for chronic and debilitating pain syndromes.',
        overview: 'Chronic pain requires a specialized focus. Our Pain Management clinic offers comprehensive care for patients suffering from long-term pain that affects their quality of life. We utilize advanced injection therapies and multimodal medical interventions to block pain signals effectively.',
        symptoms: ['Pain lasting more than 3 months', 'Burning or electric nerve pain', 'Chronic joint aching', 'Severe post-surgical pain', 'Cancer-related pain'],
        causes: ['Nerve damage (Neuropathy)', 'Severe Osteoarthritis', 'Chronic Spinal Conditions', 'Fibromyalgia', 'Complex Regional Pain Syndrome'],
        diagnosis: ['Detailed pain history', 'Diagnostic nerve blocks', 'Imaging (X-Ray/MRI)'],
        treatments: ['Epidural Steroid Injections', 'Facet Joint Injections', 'Radiofrequency Ablation', 'Nerve Block Injections', 'Multimodal medicinal therapy'],
        faqs: [
            { question: 'What is a pain block injection?', answer: 'A pain block is a targeted injection of local anesthetic and anti-inflammatory medication directly around a painful nerve or joint to instantly block pain signals.' },
            { question: 'Is pain management permanent?', answer: 'While some treatments offer permanent relief (like RFA), others provide extensive temporary relief (months to years) allowing you to participate in physical therapy and rebuild strength.' }
        ],
        doctorKey: 'sunny'
    },
    {
        filename: 'ChronicBackPainPage.jsx',
        route: '/services/chronic-back-pain-treatment',
        title: 'Chronic Back Pain Treatment',
        subtitle: 'Advanced interventions beyond temporary painkillers.',
        overview: 'When back pain becomes a daily struggle and traditional medications fail, specialized Pain Management interventions are necessary. We offer minimally invasive procedures to directly target inflamed nerves and facet joints in the spine to provide long-lasting comfort.',
        symptoms: ['Constant ache in lower back', 'Pain worsening after sitting', 'Sharp jolts of pain during movement', 'Radiating leg pain'],
        causes: ['Facet joint arthropathy', 'Spinal stenosis', 'Chronic slipped discs', 'Post-Laminectomy Syndrome (Failed Back Surgery)'],
        diagnosis: ['Diagnostic medial branch blocks', 'MRI screening'],
        treatments: ['Transforaminal Epidural Injections', 'Medial Branch Radiofrequency Ablation', 'Trigger point injections'],
        faqs: [
            { question: 'Are spine injections safe?', answer: 'Yes, these injections are performed under fluoroscopic (X-Ray) guidance for maximum safety and precision.' }
        ],
        doctorKey: 'sunny'
    },
    {
        filename: 'GeneralMedicinePage.jsx',
        route: '/services/general-medicine-sundernagar',
        title: 'Internal Medicine & Physician in Sundernagar',
        subtitle: 'Holistic health management, accurate diagnosis, and disease prevention.',
        overview: 'The Department of Internal Medicine is the backbone of total healthcare. We specialize in diagnosing, treating, and preventing a broad spectrum of adult illnesses ranging from acute fevers and infections to chronic systemic diseases like hypertension and thyroid disorders.',
        symptoms: ['Unexplained fatigue', 'Prolonged fevers', 'Shortness of breath', 'Chronic headaches', 'Sudden weight loss or gain'],
        causes: ['Viral or bacterial infections', 'Endocrine system imbalances', 'Cardiovascular stress', 'Metabolic syndromes', 'Environmental factors'],
        diagnosis: ['Comprehensive Blood Panels', 'ECG (Electrocardiogram)', 'Ultrasound imaging', 'Urinalysis'],
        treatments: ['Medication management', 'Hypertension Treatment', 'Cardiac Risk Assessment', 'Thyroid disorder management', 'Lifestyle and dietary counseling'],
        faqs: [
            { question: 'What does an internal medicine specialist do?', answer: 'An internist manages complex, chronic, and multi-system diseases in adults, acting as the primary point of comprehensive medical care.' },
            { question: 'How often should I get a preventive health checkup?', answer: 'We recommend comprehensive preventive health checkups annually for adults over 30 to catch unnoticeable issues like high blood pressure or early diabetes.' }
        ],
        doctorKey: 'sanjay'
    },
    {
        filename: 'DiabetesTreatmentPage.jsx',
        route: '/services/diabetes-treatment-sundernagar',
        title: 'Diabetes Treatment & Management',
        subtitle: 'Expert diabetic care to regulate blood sugar and prevent complications.',
        overview: 'Diabetes is a chronic metabolic disease that requires diligent continuous management. Our specialized diabetes care focuses on strict blood sugar control to prevent serious long-term complications affecting the heart, eyes, kidneys, and nerves.',
        symptoms: ['Frequent urination', 'Excessive thirst and hunger', 'Blurred vision', 'Slow-healing sores', 'Tingling or numbness in hands/feet'],
        causes: ['Insulin resistance (Type 2)', 'Autoimmune beta-cell destruction (Type 1)', 'Genetics and family history', 'Sedentary lifestyle and obesity'],
        diagnosis: ['Fasting Blood Sugar Test (FBS)', 'HbA1c Test (3-month average)', 'Glucose Tolerance Test', 'Lipid profiling'],
        treatments: ['Oral Hypoglycemic Agents (Medications)', 'Insulin Therapy', 'Diabetic Neuropathy management', 'Dietary and nutritional planning'],
        faqs: [
            { question: 'Can diabetes be completely cured?', answer: 'Type 2 diabetes can often be sent into remission with massive lifestyle changes, weight loss, and diet, though it requires continuous maintenance. Type 1 diabetes currently strictly requires insulin therapy.' },
            { question: 'How is diabetes managed?', answer: 'It is managed via a combination of prescribed medications, regular blood glucose monitoring, a highly balanced diet, and planned daily physical exercise.' }
        ],
        doctorKey: 'sanjay'
    },
    {
        filename: 'EmergencyCarePage.jsx',
        route: '/services/emergency-trauma-care-sundernagar',
        title: '24/7 Emergency & Trauma Care in Sundernagar',
        subtitle: 'Instant life-saving interventions and dedicated trauma protocols.',
        overview: 'Medical emergencies and accidental traumas require split-second decisions and expert interventions. Our 24/7 Emergency and Trauma center is fully equipped with life support systems, an experienced critical care team, and dedicated on-call surgeons representing various specialties.',
        symptoms: ['Severe traumatic injury', 'Unbearable chest pain', 'Loss of consciousness', 'Uncontrolled bleeding', 'Difficulty breathing'],
        causes: ['Road traffic accidents', 'Heart attacks or strokes', 'Severe allergic reactions', 'Accidental falls', 'Acute surgical emergencies'],
        diagnosis: ['Rapid Primary Survey (ABCDE protocol)', 'STAT CT Scans and X-Rays', 'Emergency bedside ultrasound (FAST)', 'Rapid blood analysis'],
        treatments: ['Advanced Cardiac Life Support (ACLS)', 'Fracture Stabilization and splinting', 'Emergency open surgeries', 'Intensive Care Unit (ICU) admission', 'Blood transfusions'],
        faqs: [
            { question: 'Is the emergency facility open 24 hours?', answer: 'Yes, our casualty department, imaging services, laboratory, and pharmacy are fully operational 24/7.' },
            { question: 'Are specialized surgeons available at night?', answer: 'Yes, we have on-call specialists including Orthopaedic Trauma surgeons and Anesthesiologists ready to operate in emergency scenarios at all times.' }
        ],
        doctorKey: 'basit'
    }
];

let importsStr = '';
let routesStr = '';

pagesData.forEach(page => {
    let doc = doctors[page.doctorKey];
    let content = `import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';

const ${page.filename.replace('.jsx', '')} = ({ onBookClick }) => {
    return (
        <ServicePageLayout 
            title="${page.title}"
            subtitle="${page.subtitle}"
            overview="${page.overview}"
            symptoms={${JSON.stringify(page.symptoms)}}
            causes={${JSON.stringify(page.causes)}}
            diagnosis={${JSON.stringify(page.diagnosis)}}
            treatments={${JSON.stringify(page.treatments)}}
            doctor={${JSON.stringify(doc)}}
            faqs={${JSON.stringify(page.faqs)}}
            onBookClick={onBookClick}
        />
    );
};

export default ${page.filename.replace('.jsx', '')};
`;
    fs.writeFileSync(path.join(outputDir, page.filename), content);
    console.log(`Created ${page.filename}`);
});
