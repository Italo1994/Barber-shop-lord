import axios from 'axios';

export const api = axios.create( {
	baseURL: 'https://dcqdokqsniatkcnnhsos.supabase.co/rest/v1/clientes?select=nome',
	headers: {
		apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcWRva3FzbmlhdGtjbm5oc29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MjQ2ODMsImV4cCI6MTk4OTUwMDY4M30.xGgC9ma7is-Qtf2vWa3lwBdQaXtWLEu5FuMa04F-KG4",
		authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcWRva3FzbmlhdGtjbm5oc29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5MjQ2ODMsImV4cCI6MTk4OTUwMDY4M30.xGgC9ma7is-Qtf2vWa3lwBdQaXtWLEu5FuMa04F-KG4"
	}
})