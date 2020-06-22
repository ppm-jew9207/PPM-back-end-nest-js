import {  AdvertRef } from '../../models/adverts/adverts.interface';

export interface CreateMentor {
    type: string,
    description: string,
    firstName: string,
    lastName: string,
    photo: string,
    fieldOfProfession: string,
    company: string,
    categories: string,
    city: string,
    phone: string,
    email: string,
}

export interface UpdateMentor {
    email: string;
    categories: string;
    type?: string;
    description?: string;
    firstName?: string;
    lastName?: string;
    photo?: string;
    fieldOfProfession?: string;
    company?: string;
    city?: string;
    phone?: string;
    adverts?: AdvertRef[],
}