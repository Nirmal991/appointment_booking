import  { api } from '../axios'
import { IOrganization } from "@/types";
import { OrganizationFormData } from '../validators/organization';

export const organizationApi = {
    create: async (data: OrganizationFormData) => {
        const res = await api.post('/organization', data);
        return res.data.data as IOrganization;
    },
    
    getMyOrganization: async () => {
        const res = await api.get('/organization/get-orgs');
        return res.data.data as IOrganization[];
    }
}