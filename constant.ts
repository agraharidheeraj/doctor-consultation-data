import { Facebook, Instagram, Linkedin, Twitter ,Phone, Mail, MapPin, Video, Clock, FileText} from "lucide-react";

        // Google svg
              //  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              //     <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              //     <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              //     <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              //     <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              //   </svg>

          // Heart svg
          // <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          //     </svg>

export const healthcareCategories = [
  {
    id: 'primary-care',
    title: 'Primary Care',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    color: 'bg-blue-500'
  },
  {
    id: 'manage-condition',
    title: 'Manage Your Condition',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    color: 'bg-green-500'
  },
  {
    id: 'mental-behavioral-health',
    title: 'Mental & Behavioral Health',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
    color: 'bg-yellow-500'
  },
  {
    id: 'sexual-health',
    title: 'Sexual Health',
    icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    color: 'bg-pink-500'
  },
  {
    id: 'childrens-health',
    title: "Children's Health",
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-8h2v6h-2z',
    color: 'bg-red-500'
  },
  {
    id: 'senior-health',
    title: 'Senior Health',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    color: 'bg-orange-500'
  },
  {
    id: 'womens-health',
    title: "Women's Health",
    icon: 'M17.5 9.5C17.5 6.5 15 4 12 4S6.5 6.5 6.5 9.5c0 2.89 2.39 5.43 5.5 6.44V17c0 .55.45 1 1 1s1-.45 1-1v-1.06c3.11-1.01 5.5-3.55 5.5-6.44zM12 14.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
    color: 'bg-purple-500'
  },
  {
    id: 'mens-health',
    title: "Men's Health",
    icon: 'M17.5 9.5C17.5 6.5 15 4 12 4S6.5 6.5 6.5 9.5c0 2.89 2.39 5.43 5.5 6.44V20h3v-4.06c3.11-1.01 5.5-3.55 5.5-6.44z',
    color: 'bg-indigo-500'
  },
  {
    id: 'wellness',
    title: 'Wellness',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    color: 'bg-emerald-500'
  }
];


// Healthcare categories (matches backend)
export const healthcareCategoriesList = [
  "Primary Care",
  "Manage Your Condition",
  "Mental & Behavioral Health",
  "Sexual Health",
  "Children's Health",
  "Senior Health",
  "Women's Health",
  "Men's Health",
  "Wellness",
];

export const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Orthopedic",
  "Pediatrician",
  "Neurologist",
  "Gynecologist",
  "General Physician",
  "ENT Specialist",
  "Psychiatrist",
  "Ophthalmologist",
];


export  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];


export const socials = [
  { name: "twitter", icon: Twitter, url: "https://twitter.com/medicare-plus" },
  { name: "facebook", icon: Facebook, url: "https://facebook.com/medicare-plus" },
  { name: "linkedin", icon: Linkedin, url: "https://linkedin.com/company/medicare-plus" },
  { name: "instagram", icon: Instagram, url: "https://instagram.com/medicare-plus"},
]


  export const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'in progress': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };


   export const testimonials = [
    {
      rating: 5,
      text: "Doctor was available right away, listened to my symptoms and prescribed the right medication. He made sure to explain the medicines and that was it. Very fast and easy.",
      author: "Pat J.",
      location: "From Texas",
      bgColor: "bg-chart-1/10"
    },
    {
      rating: 5,
      text: "The doctor made me feel comfortable right away, very easy to ask about concerns I might have had and great feedback from my doctors.",
      author: "Patrice P.",
      location: "From New York",
      bgColor: "bg-chart-2/10"
    },
    {
      rating: 5,
      text: "My doctor was very professional, thorough, and careful to ask me numerous relevant questions. She answered my questions not only in a detailed manner, but also in a way I could understand.",
      author: "Betty M.",
      location: "From Tennessee",
      bgColor: "bg-chart-4/10"
    },
    {
      rating: 5,
      text: "It was quick & easy to book the appointment. I was able to get a PC appointment the next morning... within 12 hours! I connected and got my ongoing meds refilled. It was so nice for me living in a rural community.",
      author: "Katherine M.",
      location: "From California",
      bgColor: "bg-chart-5/10"
    }
  ];


    export const footerSections = [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Support Center", href: "/support" },
        { text: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "For Healthcare",
      links: [
        { text: "Join as Doctor", href: "/signup/doctor" },
        { text: "Doctor Resources", href: "/doctor-resources" },
      ]
    },
    {
      title: "For Patients",
      links: [
        { text: "Find Doctors", href: "/doctors" },
        { text: "Book Appointment", href: "/signup/patient" },
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
      ]
    }
  ];


export const contactInfo = [
  {
    icon: Phone,
    text: "1-888-MEDICARE (1-888-633-4227)",
  },
  {
    icon: Mail,
    text: "support@medicare-plus.com",
  },
  {
    icon: MapPin,
    text: "Available across India",
  },
];


  export const faqs = [
    {
      question: "How much does a doctor visit with MediCare+ cost?",
      answer: "With insurance, you pay your copay based on your plan. We accept most plans, including Medicare. Without insurance, online doctor visits are $129. You can become a MediCare+ member and pay $44/visit. Membership is $55 for three months and $180 for a yearly membership."
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept most major health insurance plans including Medicare, BlueCross BlueShield, Aetna, United Healthcare, Cigna, Humana, and many others. We also accept FSA and HSA payments."
    },
    {
      question: "What conditions can MediCare+ doctors treat?",
      answer: "Our doctors can treat a wide range of conditions including cold and flu symptoms, allergies, skin conditions, mental health concerns, chronic condition management, and much more through virtual consultations."
    },
    {
      question: "How quickly can I see a doctor?",
      answer: "Many of our doctors are available for same-day appointments, and some offer immediate consultations. You can book appointments that fit your schedule, often within hours of your request."
    }
  ];

  export const trustLogos = [
    "Business Insider", "CBS News", "CNBC", "Forbes", "Fortune", "Fox Business",
    "Healthline", "Inc.", "Men's Health", "TechCrunch", "The New York Times", "WSJ"
  ];



    export const minutesToTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${period}`;
  };

  export const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = String(parseInt(hours, 10) + 12);
    return `${hours.padStart(2, '0')}:${minutes}:00`;
  };


  // src/lib/dateUtils.ts
export const toLocalYMD = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const startOfDay = (date: Date): Date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};


    export const consultationTypes = [
      {
        type: 'Video Consultation',
        icon: Video,
        description: 'Face-to-face consultation via HD video call',
        price: 0,
        recommended: true
      },
      {
        type: 'Voice Call',
        icon: Phone,
        description: 'Audio-only consultation via voice call',
        price: -100,
        recommended: false
      }
    ];


    
        export const emptyStates = {
      upcoming: {
        icon: Clock,
        title: "No Upcoming Appointments",
        description: "You have no upcoming appointments scheduled.",
      },
      completed: {
        icon: FileText,
        title: "No Completed Appointments",
        description: "Completed consultations will appear here.",
      },
    };



  //  enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] 


  // enum: ['Scheduled', 'Completed', 'Cancelled', 'In Progress']


  //    enum: [
  //     'Cardiologist', 'Dermatologist', 'Orthopedic', 'Pediatrician', 
  //     'Neurologist', 'Gynecologist', 'General Physician', 'ENT Specialist',
  //     'Psychiatrist', 'Ophthalmologist'
  //   ]