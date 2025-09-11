// Define proper TypeScript interfaces
export interface TimeRange {
  start: string;
  end: string;
}

export interface AvailabilityRange {
  startDate: string;
  endDate: string;
  excludedWeekdays: number[];
}

export interface HospitalInfo {
  name: string;
  address: string;
  city: string;
}

export interface DoctorFormData {
  specialization: string;
  categories: string[]; // Explicitly typed as string array
  qualification: string;
  experience: string;
  about: string;
  fees: string;
  hospitalInfo: HospitalInfo;
  availabilityRange: AvailabilityRange;
  dailyTimeRanges: TimeRange[];
  slotDurationMinutes?: number;
}



// ✅ Enhanced User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  type: "doctor" | "patient";
  phone?: string;
  profileImage?: string;

  // Patient fields
  dob?: string;
  gender?: string;
  bloodGroup?: string;
  age?: number;
  medicalHistory?: {
    allergies?: string;
    currentMedications?: string;
    chronicConditions?: string;
  };
  emergencyContact?: {
    name?: string;
    phone?: string;
    relationship?: string;
  };

  // Doctor fields
  specialization?: string;
  about?: string;
  category?: string[];
  qualification?: string;
  experience?: number;
  fees?: number;
  hospitalInfo?: {
    name?: string;
    address?: string;
    city?: string;
  };

  // ✅ Doctor availability fields
  availabilityRange?: {
    startDate?: string;
    endDate?: string;
    excludedWeekdays?: number[];
  };
  dailyTimeRanges?: Array<{
    start: string;
    end: string;
  }>;
  slotDurationMinutes?: number;
}


// interfaces/Doctor.ts
export interface Doctor {
  _id: string;
  name: string;
  email: string;
  specialization: string;
  category: string[];
  qualification: string;
  experience: number;
  about: string;
  fees: number;
  hospitalInfo: {
    name: string;
    address: string;
    city: string;
  };
  availabilityRange: {
    startDate: Date;
    endDate: Date;
    excludedWeekdays: number[];
  };
  dailyTimeRanges: {
    start: string; // e.g., "09:00"
    end: string;   // e.g., "12:00"
  }[];
  slotDurationMinutes: number;
  profileImage: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}


export interface DoctorFilters {
  search?: string;
  specialization?: string;
  category?: string;
  city?: string;
  minFees?: number;
  maxFees?: number;
  sortBy?: 'fees' | 'experience' | 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}


// Admin Dashboard Types
export interface DashboardStats {
  totalPatients: number;
  totalDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
  pendingAppointments: number;
  totalRevenue: number;
}

export interface MonthlyRevenue {
  _id: {
    year: number;
    month: number;
  };
  revenue: number;
}

export interface UserManagementUser {
  _id: string;
  name: string;
  email: string;
  type: 'patient' | 'doctor';
  isActive?: boolean;
  isVerified?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentRecord {
  _id: string;
  date: string;
  doctorName: string;
  doctorEmail: string;
  patientName: string;
  consultationFees: number;
  platformFees: number;
  totalAmount: number;
  paymentStatus: string;
  payoutStatus: string;
  payoutDate?: string;
  createdAt: string;
}

export interface ReportData {
  userGrowth: Array<{
    _id: {
      year: number;
      month: number;
    };
    patients: number;
  }>;
  appointmentStats: Array<{
    _id: string;
    count: number;
  }>;
}