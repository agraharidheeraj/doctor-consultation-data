export interface Appointment {
  _id: string;
  doctorId: any;
  patientId: any;
  date: string;
  slotStartIso: string;
  slotEndIso: string;
  consultationType: 'Video Consultation' | 'Voice Call' ;
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'In Progress';
  symptoms: string;
  zegoRoomId: string;
  fees: number;
  prescription?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface AppointmentFilters {
  status?: string | string[];
  from?: string;
  to?: string;
  date?: string;
  sortBy?: 'date' | 'createdAt' | 'status';
  sortOrder?: 'asc' | 'desc';
}

interface BookingData {
  doctorId: string;
  slotStartIso: string;
  slotEndIso: string;
  consultationType?: string;
  symptoms: string;
  date: string;
  consultationFees: number;
  platformFees: number;
  totalAmount: number;
}