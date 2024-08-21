"use server";

import { ID, Query } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases, PATIENT_COLLECTION_ID } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (appointment: CreateAppointmentParams) => {
    try {
        const newAppointment = await databases.createDocument(
        DATABASE_ID!,
        APPOINTMENT_COLLECTION_ID!,
        ID.unique(),
        appointment
      )
      return parseStringify(newAppointment);
    }
    catch (error) {
        console.error("An error occurred while creating an appointment:", error);
    }
}

export const getAppointments = async (appointmentId: string) => {
    try {
        const appointment = await databases.getDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId,
        );
        return parseStringify(appointment);
    }
    catch (error) {
        console.error("An error occurred while fetching appointments:", error);
    }
}