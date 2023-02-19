import { api } from '../services/api';

export const getUsers = async () => {
	const { data } = await api.get('/customers');

	if(data) {
		return data;
	}
}