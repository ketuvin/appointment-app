import { create } from 'zustand';

export interface Veterinary {
  id: number;
  name: string;
  image: string;
  // Add other properties as needed
}

export interface Pet {
  name: string;
  breed: string;
  age: string;
  gender: string;
  image: string;
}

export interface Appointment {
  veterinary: Veterinary | null;
  service: string;
  pet: Pet;
  ownerName: string;
  dateTime: string;
}

interface AppState {
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
  setSelectedAppointment: (appointment: Appointment | null) => void;
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (appointment: Appointment) => void;
  removeAppointment: (appointment: Appointment) => void;
}

export const useStore = create<AppState>((set) => ({
  appointments: [],
  selectedAppointment: null,

  setSelectedAppointment: (appointment: Appointment | null) => set({ selectedAppointment: appointment }),

  addAppointment: (appointment: Appointment) => set((state) => ({ appointments: [...state.appointments, appointment] })),

  updateAppointment: (updatedAppointment: Appointment) =>
    set((state) => ({
      appointments: state.appointments.map((appointment) =>
        appointment.dateTime === updatedAppointment.dateTime ? updatedAppointment : appointment
      ),
    })),

  removeAppointment: (appointment: Appointment) =>
    set((state) => ({
      appointments: state.appointments.filter((a) => a.dateTime !== appointment.dateTime),
    })),
}));
